from app.features.calculs.rules import get_standard_rules
from app.features.calculs.schemas import CircuitInput, ProtectionInput


def next_breaker(current: float, circuit_type: str, standard: str) -> float:
    rules = get_standard_rules(standard)
    ratings = rules["breakerRatings"]
    breaker = next((rating for rating in ratings if rating >= current), ratings[-1])
    limit = rules.get("maxBreakerByCircuitType", {}).get(circuit_type)
    return min(breaker, limit) if limit else breaker


def short_circuit_current(
    voltage: float,
    distance: float,
    section: float,
    resistivity: float,
) -> float:
    loop_impedance = max(resistivity * distance / section, 0.001)
    return voltage / loop_impedance


def check_protection(
    i_design: float,
    iz_corrected: float,
    i_cc: float,
    protection: ProtectionInput,
    breaker: float,
    standard: str,
) -> tuple[str, str, str, str]:
    trip_factor = get_standard_rules(standard).get("protectionTripFactor", 1.0)
    overload = "PASS" if i_design <= breaker <= iz_corrected else "FAIL"
    breaking = "PASS" if protection.breakingCapacity >= i_cc else "FAIL"
    coordination = (
        "PASS"
        if overload == "PASS" and protection.breakingCapacity >= i_cc and i_design * trip_factor <= iz_corrected
        else "FAIL"
    )
    return overload, breaking, coordination, "PASS" if breaker >= i_design else "FAIL"
