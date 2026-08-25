from app.features.calculs.schemas import CircuitInput, ProtectionInput, RecommendedProtection
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
    
def recommend_protection(
    i_design: float,
    i_start: float,
    iz_corrected: float,
    i_cc: float,
    circuit_type: str,
    supply_type: str,
    standard: str,
) -> RecommendedProtection:
    rules = get_standard_rules(standard)
    limit = rules.get("maxBreakerByCircuitType", {}).get(circuit_type)
    candidates = [
        rating
        for rating in rules["breakerRatings"]
        if rating >= i_design and rating <= iz_corrected
    ]
    if limit:
        candidates = [rating for rating in candidates if rating <= limit]
    rated_current = candidates[0] if candidates else next_breaker(i_design, circuit_type, standard)
    breaking_capacity = next(
        (capacity for capacity in (3000, 4500, 6000, 10000, 15000, 25000) if capacity >= i_cc),
        25000,
    )
    curve = "D" if circuit_type == "FORCE_MOTRICE" and i_start > i_design * 3 else "C"
    poles = 2 if supply_type == "MONOPHASE" else 4
    return RecommendedProtection(
        ratedCurrent=rated_current,
        numberOfPoles=poles,
        curveType=curve,
        breakingCapacity=breaking_capacity,
        differential={
            "required": True,
            "type": "TYPE_A" if circuit_type in {"FORCE_MOTRICE", "CLIMATISATION"} else "TYPE_AC",
            "sensitivity_mA": 30,
            "status": "TO_VERIFY_WITH_INSTALLATION_STUDY",
        },
        selectionBasis={
            "designCurrentA": i_design,
            "correctedCableCapacityA": iz_corrected,
            "shortCircuitCurrentA": i_cc,
            "startingCurrentA": i_start,
            "standard": standard,
        },
    )


def check_protection(
    i_design: float,
    iz_corrected: float,
    i_cc: float,
    protection: ProtectionInput | RecommendedProtection,
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
