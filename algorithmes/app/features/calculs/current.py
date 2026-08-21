from math import sqrt

from app.features.calculs.schemas import CircuitInput, PowerSupplyInput


def default_cos_phi(circuit_type: str) -> float:
    return 0.8 if circuit_type in {"FORCE_MOTRICE", "PRISE_COURANT", "CLIMATISATION"} else 1.0


def phase_factor(power_supply: PowerSupplyInput) -> float:
    return sqrt(3) if power_supply.type == "TRIPHASE" else 1.0


def calculate_currents(
    circuit: CircuitInput,
    power_supply: PowerSupplyInput,
) -> tuple[float, float, float]:
    cos_phi = circuit.cosPhi or default_cos_phi(circuit.type)
    ib = (
        circuit.totalPower
        * circuit.circuitCount
        / (phase_factor(power_supply) * power_supply.nominalVoltage * cos_phi)
    )
    i_design = ib * circuit.utilizationFactor * circuit.simultaneityFactor
    has_starting_current = (
        circuit.hasStartingCurrent
        if circuit.hasStartingCurrent is not None
        else circuit.type == "FORCE_MOTRICE"
    )
    i_start = ib * circuit.startCurrentMultiplier if has_starting_current else ib
    return ib, i_design, i_start
