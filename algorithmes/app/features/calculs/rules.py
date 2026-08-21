from typing import Any

STANDARD_RULES: dict[str, dict[str, Any]] = {
    "NFC_15_100": {
        "label": "NF C 15-100",
        "resistivity": 0.023,
        "voltageDropLimitPercent": 5.0,
        "lightingVoltageDropLimitPercent": 3.0,
        "sections": [1.5, 2.5, 4, 6, 10, 16, 25, 35, 50, 70, 95, 120],
        "breakerRatings": [10, 16, 20, 25, 32, 40, 50, 63, 80, 100, 125, 160],
        "maxBreakerByCircuitType": {
            "ECLAIRAGE": 16,
            "PRISE_COURANT": 20,
            "CHAUFFAGE": 20,
            "FORCE_MOTRICE": 32,
            "CLIMATISATION": 32,
            "AUTRE": 32,
        },
        "correctionFactors": {
            "ambientTemperature": 1.0,
            "grouping": 1.0,
            "thermalInsulation": 1.0,
            "soilThermalResistivity": 1.0,
        },
    },
    "IEC_60364": {
        "label": "IEC 60364",
        "resistivity": 0.0225,
        "voltageDropLimitPercent": 5.0,
        "lightingVoltageDropLimitPercent": 3.0,
        "sections": [1.5, 2.5, 4, 6, 10, 16, 25, 35, 50, 70, 95, 120],
        "breakerRatings": [6, 10, 13, 16, 20, 25, 32, 40, 50, 63, 80, 100, 125, 160],
        "correctionFactors": {
            "ambientTemperature": 1.0,
            "grouping": 1.0,
            "thermalInsulation": 1.0,
            "soilThermalResistivity": 1.0,
        },
        "protectionTripFactor": 1.45,
    },
    "IEEE_141": {
        "label": "IEEE 141",
        "resistivity": 0.022,
        "voltageDropLimitPercent": 5.0,
        "lightingVoltageDropLimitPercent": 3.0,
        "sections": [1.5, 2.5, 4, 6, 10, 16, 25, 35, 50, 70, 95, 120],
        "breakerRatings": [10, 15, 20, 25, 30, 35, 40, 50, 60, 70, 80, 100, 125, 160],
        "correctionFactors": {
            "ambientTemperature": 1.0,
            "grouping": 1.0,
            "thermalInsulation": 1.0,
            "soilThermalResistivity": 1.0,
        },
    },
    "IEEE_242": {
        "label": "IEEE 242",
        "resistivity": 0.022,
        "voltageDropLimitPercent": 3.0,
        "lightingVoltageDropLimitPercent": 3.0,
        "sections": [1.5, 2.5, 4, 6, 10, 16, 25, 35, 50, 70, 95, 120],
        "breakerRatings": [10, 15, 20, 25, 30, 35, 40, 50, 60, 70, 80, 100, 125, 160],
        "correctionFactors": {
            "ambientTemperature": 1.0,
            "grouping": 1.0,
            "thermalInsulation": 1.0,
            "soilThermalResistivity": 1.0,
        },
    },
}

# Reference ampacity values. They are explicit inputs to be replaced by the
# project's selected normative table when installation data is available.
AMPACITY_BY_MODE: dict[str, list[float]] = {
    "AIR_LIBRE": [18, 25, 32, 40, 55, 70, 92, 115, 145, 185, 225, 260],
    "SOUS_CONDUIT_EN_SAILLIE": [15, 21, 28, 36, 50, 65, 85, 105, 135, 170, 205, 240],
    "ENCASTRE_DANS_MUR": [14, 20, 26, 34, 46, 61, 80, 100, 125, 160, 195, 230],
    "CHEMINEE_DE_CABLES": [16, 22, 29, 38, 52, 68, 88, 110, 140, 178, 215, 250],
    "ENTERRE": [19, 26, 34, 43, 58, 75, 98, 122, 154, 195, 235, 275],
}


def get_standard_rules(standard: str) -> dict[str, Any]:
    try:
        return STANDARD_RULES[standard]
    except KeyError as error:
        raise ValueError(f"Standard de calcul non supporté: {standard}") from error


def get_sections(standard: str) -> list[float]:
    return get_standard_rules(standard)["sections"]
