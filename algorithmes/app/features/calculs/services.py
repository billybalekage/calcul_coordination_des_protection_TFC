from app.features.calculs.cable import (
    ampacity_for_section,
    conductor_protection_section,
    total_correction_factor,
)
from app.features.calculs.current import calculate_currents, phase_factor
from app.features.calculs.protections import (
    check_protection,
    next_breaker,
    short_circuit_current,
)
from app.features.calculs.rules import get_standard_rules
from app.features.calculs.schemas import (
    CalculationInput,
    CalculationResult,
    CircuitCalculationResult,
)
from app.features.calculs.voltage_drop import calculate_voltage_drop


def distance_for_circuit(data: CalculationInput, circuit) -> float:
    return circuit.distance


def calculate_circuit(data: CalculationInput, circuit) -> CircuitCalculationResult:
    rules = get_standard_rules(data.powerSupply.standard)
    cable_data = circuit.cableData
    protection = circuit.protection
    ib, i_design, i_start = calculate_currents(circuit, data.powerSupply)
    k_total = total_correction_factor(cable_data, data.powerSupply.standard)
    distance = distance_for_circuit(data, circuit)
    limit = (
        rules["lightingVoltageDropLimitPercent"]
        if circuit.type == "ECLAIRAGE"
        else rules["voltageDropLimitPercent"]
    )
    thermal_minimum = (
        1.5
        * i_design
        / ampacity_for_section(1.5, cable_data, data.powerSupply.standard)
        / k_total
    )
    voltage_minimum = (
        phase_factor(data.powerSupply)
        * (2 if data.powerSupply.type == "MONOPHASE" else 1)
        * rules["resistivity"]
        * i_design
        * distance
        / (data.powerSupply.nominalVoltage * limit / 100)
    )
    minimum_section = max(thermal_minimum, voltage_minimum)
    selected_section = rules["sections"][-1]
    selected_iz = ampacity_for_section(selected_section, cable_data, data.powerSupply.standard)
    selected_drop = (0.0, 0.0)

    for section in rules["sections"]:
        iz = ampacity_for_section(section, cable_data, data.powerSupply.standard)
        iz_corrected = iz * k_total
        drop = calculate_voltage_drop(
            i_design,
            distance,
            section,
            circuit,
            data.powerSupply,
            cable_data,
        )
        if i_design <= iz_corrected and drop[1] <= limit:
            selected_section = section
            selected_iz = iz
            selected_drop = drop
            break
    else:
        selected_drop = calculate_voltage_drop(
            i_design,
            distance,
            selected_section,
            circuit,
            data.powerSupply,
            cable_data,
        )

    iz_corrected = selected_iz * k_total
    i_cc = short_circuit_current(
        data.powerSupply.nominalVoltage,
        distance,
        selected_section,
        rules["resistivity"],
    )
    breaker = next_breaker(
        i_design,
        circuit.type,
        data.powerSupply.standard,
    )
    overload, breaking, coordination, _ = check_protection(
        i_design,
        iz_corrected,
        i_cc,
        protection,
        protection.ratedCurrent,
        data.powerSupply.standard,
    )

    return CircuitCalculationResult(
        circuitName=circuit.name,
        ib=ib,
        iDesign=i_design,
        iStart=i_start,
        kTotal=k_total,
        iz=selected_iz,
        izCorrected=iz_corrected,
        minimumSection=minimum_section,
        recommendedSection=selected_section,
        peSection=conductor_protection_section(selected_section),
        voltageDropVolts=selected_drop[0],
        voltageDropPercent=selected_drop[1],
        shortCircuitCurrentAtEnd=i_cc,
        recommendedBreaker=breaker,
        requiredBreakingCapacity=i_cc,
        overloadCheck=overload,
        voltageDropCheck="PASS" if selected_drop[1] <= limit else "FAIL",
        breakingCapacityCheck=(
            breaking
            if protection.selectivityVerified
            else "TO_VERIFY_WITH_MANUFACTURER"
        ),
        coordinationCheck=(
            coordination
            if protection.selectivityVerified
            else "TO_VERIFY_WITH_MANUFACTURER"
        ),
        assumptions={
            "distanceMeters": distance,
            "correctionFactor": k_total,
            "cableDataProvidedPerCircuit": True,
            "protectionDataProvidedPerCircuit": True,
            "selectivityVerified": protection.selectivityVerified,
            "shortCircuitMethod": "SIMPLIFIED_LOOP_IMPEDANCE",
        },
    )


def calculate_result(data: CalculationInput) -> CalculationResult:
    circuit_results = [calculate_circuit(data, circuit) for circuit in data.circuits]
    furthest = max(circuit_results, key=lambda result: result.voltageDropPercent)
    return CalculationResult(
        currentNominal=sum(result.ib for result in circuit_results),
        currentDesign=sum(result.iDesign for result in circuit_results),
        recommendedCableSection=max(result.recommendedSection for result in circuit_results),
        correctedCableCapacity=min(result.izCorrected for result in circuit_results),
        recommendedBreaker=max(result.recommendedBreaker for result in circuit_results),
        voltageDropVolts=furthest.voltageDropVolts,
        voltageDropPercent=furthest.voltageDropPercent,
        shortCircuitCurrentAtEnd=max(
            result.shortCircuitCurrentAtEnd for result in circuit_results
        ),
        breakerBreakingCapacity=min(
            circuit.protection.breakingCapacity for circuit in data.circuits
        ),
        overloadCheck=(
            "PASS"
            if all(result.overloadCheck == "PASS" for result in circuit_results)
            else "FAIL"
        ),
        voltageDropCheck=(
            "PASS"
            if all(result.voltageDropCheck == "PASS" for result in circuit_results)
            else "FAIL"
        ),
        breakingCapacityCheck=(
            "PASS"
            if all(result.breakingCapacityCheck == "PASS" for result in circuit_results)
            else "FAIL"
        ),
        coordinationCheck=(
            "PASS"
            if all(result.coordinationCheck == "PASS" for result in circuit_results)
            else "FAIL"
        ),
        standard=data.powerSupply.standard,
        perCircuit=circuit_results,
    )
