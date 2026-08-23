from math import sqrt

from app.features.calculs.schemas import CircuitInput, PowerSupplyInput

def default_cos_phi(circuit_type: str) -> float:
    return 0.8 if circuit_type in {"FORCE_MOTRICE", "PRISE_COURANT", "CLIMATISATION"} else 1.0

def default_utilization_factor(value: float | None) -> float:
    return value if value is not None else 1.0

def default_simultaneity_factor(value: float | None) -> float:
    return value if value is not None else 1.0

def phase_factor(power_supply: PowerSupplyInput) -> float:
    return sqrt(3) if power_supply.type == "TRIPHASE" else 1.0

#calcul le courant d'emploie en fonction du nombre de circuit, de la puissance totale.
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

    # i_design est le courant de conception, qui prend en compte les facteurs d'utilisation et de simultanéité du circuit
    utilization_factor = default_utilization_factor(
        getattr(circuit, "utilizationFactor", None)
    )
    simultaneity_factor = default_simultaneity_factor(
        getattr(circuit, "simultaneityFactor", None)
    )
    i_design = ib * utilization_factor * simultaneity_factor
    has_starting_current = (
        circuit.hasStartingCurrent
        if circuit.hasStartingCurrent is not None
        else circuit.type == "FORCE_MOTRICE"
    )
    i_start = ib * circuit.startCurrentMultiplier if has_starting_current else ib
    return ib, i_design, i_start
