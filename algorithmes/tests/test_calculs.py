import unittest

from app.features.calculs.schemas import CalculationInput
from app.features.calculs.services import calculate_result


class CalculationServiceTests(unittest.TestCase):
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
