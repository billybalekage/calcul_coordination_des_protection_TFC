from app.features.calculs.current import phase_factor
from app.features.calculs.rules import get_standard_rules
from app.features.calculs.schemas import CableDataInput, CircuitInput, PowerSupplyInput


def calculate_voltage_drop(
    current: float,
    distance: float,
    section: float,
    circuit: CircuitInput,
    power_supply: PowerSupplyInput,
    cable_data: CableDataInput,
) -> tuple[float, float]:
    rules = get_standard_rules(power_supply.standard)
    resistance = cable_data.millivoltsPerAmpereMeter
    if resistance is None:
        resistance = (1000 * rules["resistivity"]) / section
    drop = phase_factor(power_supply) * resistance * current * distance / 1000
    if power_supply.type == "MONOPHASE":
        drop *= 2
    return drop, drop / power_supply.nominalVoltage * 100
