import unittest

from app.features.calculs.schemas import CalculationInput
from app.features.calculs.current import calculate_currents
from app.features.calculs.services import calculate_result


class CalculationServiceTests(unittest.TestCase):
    def test_missing_or_null_design_factors_default_to_one(self):
        power_supply = {
            "type": "MONOPHASE",
            "nominalVoltage": 230,
            "frequency": 50,
            "regimeNeutre": "TT",
            "distanceSourceToTGBT": 0,
        }
        base_circuit = {
            "name": "C1",
            "type": "AUTRE",
            "totalPower": 2300,
            "circuitCount": 1,
        }

        for factors in (
            {},
            {"utilizationFactor": None, "simultaneityFactor": None},
        ):
            circuit = CalculationInput.model_validate(
                {
                    "project": {"id": "project-1", "name": "Atelier"},
                    "powerSupply": power_supply,
                    "circuits": [{**base_circuit, **factors}],
                    "cableData": {
                        "material": "CUIVRE",
                        "isolation": "PVC",
                        "modePose": "AIR_LIBRE",
                    },
                    "protection": {
                        "type": "DISJONCTEUR",
                        "ratedCurrent": 16,
                        "numberOfPoles": 2,
                        "curveType": "C",
                        "breakingCapacity": 6000,
                    },
                    "furthestLoadDistance": {
                        "circuitName": "C1",
                        "distance": 20,
                    },
                }
            ).circuits[0]

            ib, i_design, _ = calculate_currents(
                circuit,
                CalculationInput.model_validate(
                    {
                        "project": {"id": "project-1", "name": "Atelier"},
                        "powerSupply": power_supply,
                        "circuits": [base_circuit],
                        "cableData": {
                            "material": "CUIVRE",
                            "isolation": "PVC",
                            "modePose": "AIR_LIBRE",
                        },
                        "protection": {
                            "type": "DISJONCTEUR",
                            "ratedCurrent": 16,
                            "numberOfPoles": 2,
                            "curveType": "C",
                            "breakingCapacity": 6000,
                        },
                        "furthestLoadDistance": {
                            "circuitName": "C1",
                            "distance": 20,
                        },
                    }
                ).powerSupply,
            )

            self.assertAlmostEqual(ib, 10.0)
            self.assertAlmostEqual(i_design, ib)

    def test_single_and_three_phase_use_different_electrical_formulas(self):
        payload = {
            "project": {"id": "project-1", "name": "Atelier"},
            "powerSupply": {
                "type": "MONOPHASE",
                "nominalVoltage": 230,
                "frequency": 50,
                "regimeNeutre": "TT",
                "distanceSourceToTGBT": 0,
            },
            "circuits": [
                {
                    "name": "C1",
                    "type": "AUTRE",
                    "totalPower": 2300,
                    "circuitCount": 1,
                }
            ],
            "cableData": {
                "material": "CUIVRE",
                "isolation": "PVC",
                "modePose": "AIR_LIBRE",
            },
            "protection": {
                "type": "DISJONCTEUR",
                "ratedCurrent": 16,
                "numberOfPoles": 2,
                "curveType": "C",
                "breakingCapacity": 6000,
            },
            "furthestLoadDistance": {"circuitName": "C1", "distance": 20},
        }

        single_phase = calculate_result(CalculationInput.model_validate(payload))
        payload["powerSupply"] = {
            **payload["powerSupply"],
            "type": "TRIPHASE",
            "nominalVoltage": 400,
        }
        three_phase = calculate_result(CalculationInput.model_validate(payload))

        self.assertAlmostEqual(single_phase.perCircuit[0].ib, 10.0)
        self.assertAlmostEqual(
            three_phase.perCircuit[0].ib,
            2300 / (3**0.5 * 400),
        )
        self.assertGreater(single_phase.perCircuit[0].voltageDropVolts, 0)
        self.assertLess(
            three_phase.perCircuit[0].voltageDropVolts,
            single_phase.perCircuit[0].voltageDropVolts,
        )

    def test_supply_type_is_required_and_restricted(self):
        payload = {
            "project": {"id": "project-1", "name": "Atelier"},
            "powerSupply": {
                "type": "BIPHASE",
                "nominalVoltage": 230,
                "frequency": 50,
                "regimeNeutre": "TT",
                "distanceSourceToTGBT": 0,
            },
            "circuits": [
                {
                    "name": "C1",
                    "type": "AUTRE",
                    "totalPower": 1000,
                    "circuitCount": 1,
                }
            ],
            "cableData": {
                "material": "CUIVRE",
                "isolation": "PVC",
                "modePose": "AIR_LIBRE",
            },
            "protection": {
                "type": "DISJONCTEUR",
                "ratedCurrent": 10,
                "numberOfPoles": 2,
                "curveType": "C",
                "breakingCapacity": 6000,
            },
            "furthestLoadDistance": {"circuitName": "C1", "distance": 20},
        }

        with self.assertRaises(ValueError):
            CalculationInput.model_validate(payload)

    def test_calculation_matches_backend_contract(self):
        payload = {
            "project": {"id": "project-1", "name": "Atelier"},
            "powerSupply": {
                "type": "TRIPHASE",
                "nominalVoltage": 400,
                "frequency": 50,
                "regimeNeutre": "TT",
                "distanceSourceToTGBT": 12,
            },
            "circuits": [
                {
                    "name": "Eclairage",
                    "circuitCount": 1,
                    "type": "ECLAIRAGE",
                    "totalPower": 3000,
                }
            ],
            "cableData": {
                "material": "CUIVRE",
                "isolation": "PVC",
                "modePose": "AIR_LIBRE",
            },
            "protection": {
                "type": "DISJONCTEUR",
                "ratedCurrent": 32,
                "numberOfPoles": 4,
                "curveType": "C",
                "breakingCapacity": 6000,
            },
            "furthestLoadDistance": {
                "circuitName": "Eclairage",
                "distance": 25,
            },
        }

        result = calculate_result(CalculationInput.model_validate(payload))

        self.assertEqual(result.recommendedCableSection, 1.5)
        self.assertEqual(result.recommendedBreaker, 10)
        self.assertEqual(result.overloadCheck, "PASS")
        self.assertEqual(len(result.perCircuit), 1)
        self.assertGreater(result.perCircuit[0].recommendedSection, 0)

    def test_distance_must_reference_a_circuit(self):
        payload = {
            "project": {"id": "project-1", "name": "Atelier"},
            "powerSupply": {
                "type": "MONOPHASE",
                "nominalVoltage": 230,
                "frequency": 50,
                "regimeNeutre": "TT",
                "distanceSourceToTGBT": 0,
            },
            "circuits": [
                {
                    "name": "C1",
                    "circuitCount": 1,
                    "type": "ECLAIRAGE",
                    "totalPower": 1000,
                }
            ],
            "cableData": {
                "material": "CUIVRE",
                "isolation": "PVC",
                "modePose": "AIR_LIBRE",
            },
            "protection": {
                "type": "DISJONCTEUR",
                "ratedCurrent": 10,
                "numberOfPoles": 1,
                "curveType": "C",
                "breakingCapacity": 6000,
            },
            "furthestLoadDistance": {"circuitName": "unknown", "distance": 1},
        }

        with self.assertRaises(ValueError):
            CalculationInput.model_validate(payload)


if __name__ == "__main__":
    unittest.main()
