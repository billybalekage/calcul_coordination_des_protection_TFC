from app.features.calculs.rules import AMPACITY_BY_MODE, get_standard_rules
from app.features.calculs.schemas import CableDataInput


def total_correction_factor(cable_data: CableDataInput, standard: str) -> float:
    factors = get_standard_rules(standard)["correctionFactors"].copy()
    factors.update(cable_data.correctionFactors)
    product = 1.0
    for factor in factors.values():
        if factor <= 0 or factor > 1:
            raise ValueError("Les facteurs de correction doivent être compris entre 0 et 1.")
        product *= factor
    return product


def reference_ampacity(cable_data: CableDataInput, standard: str) -> float:
    if cable_data.izReference is not None:
        return cable_data.izReference

    values = AMPACITY_BY_MODE[cable_data.modePose]
    material_factor = 0.75 if cable_data.material == "ALUMINIUM" else 1.0
    return values[0] * material_factor


def ampacity_for_section(
    section: float,
    cable_data: CableDataInput,
    standard: str,
) -> float:
    if cable_data.izReference is not None:
        base = cable_data.izReference * (section / 1.5) ** 0.65
    else:
        sections = get_standard_rules(standard)["sections"]
        values = AMPACITY_BY_MODE[cable_data.modePose]
        base = values[sections.index(section)]
    return base * (0.75 if cable_data.material == "ALUMINIUM" else 1.0)


def conductor_protection_section(phase_section: float) -> float:
    if phase_section <= 16:
        return phase_section
    if phase_section <= 35:
        return 16.0
    return phase_section / 2
