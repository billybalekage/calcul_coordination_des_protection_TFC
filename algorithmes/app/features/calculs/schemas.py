from typing import Literal

from pydantic import BaseModel, ConfigDict, Field, model_validator


class ProjectInput(BaseModel):
    model_config = ConfigDict(extra="ignore")

    id: str
    name: str = Field(min_length=1, max_length=150)
    client: str | None = None
    location: str | None = None


class PowerSupplyInput(BaseModel):
    model_config = ConfigDict(extra="ignore")

    type: Literal["MONOPHASE", "TRIPHASE"]
    nominalVoltage: float = Field(gt=0)
    frequency: float = Field(gt=0)
    regimeNeutre: Literal["TT", "TN", "IT"]
    distanceSourceToTGBT: float = Field(ge=0)
    standard: Literal["NFC_15_100", "IEC_60364"] = "NFC_15_100"


class CircuitInput(BaseModel):
    model_config = ConfigDict(extra="ignore")

    name: str = Field(min_length=1, max_length=150)
    circuitCount: int = Field(default=1, ge=1)
    type: Literal[
        "ECLAIRAGE",
        "PRISE_COURANT",
        "FORCE_MOTRICE",
        "CHAUFFAGE",
        "CLIMATISATION",
        "AUTRE",
    ]
    totalPower: float = Field(ge=0)
    distance: float | None = Field(default=None, ge=0)
    cosPhi: float | None = Field(default=None, gt=0, le=1)
    utilizationFactor: float | None = Field(default=1.0, gt=0, le=1)
    simultaneityFactor: float | None = Field(default=1.0, gt=0, le=1)
    startCurrentMultiplier: float = Field(default=6.0, ge=1)
    hasStartingCurrent: bool | None = None
    cableData: "CableDataInput | None" = None
    protection: "ProtectionInput | None" = None


class CableDataInput(BaseModel):
    model_config = ConfigDict(extra="ignore")

    material: Literal["CUIVRE", "ALUMINIUM"]
    isolation: Literal["PVC", "XLPE", "EPR"]
    modePose: Literal[
        "SOUS_CONDUIT_EN_SAILLIE",
        "ENCASTRE_DANS_MUR",
        "CHEMINEE_DE_CABLES",
        "ENTERRE",
        "AIR_LIBRE",
    ]
    correctionFactors: dict[str, float] = Field(default_factory=dict)
    izReference: float | None = Field(default=None, gt=0)
    millivoltsPerAmpereMeter: float | None = Field(default=None, gt=0)


class ProtectionInput(BaseModel):
    model_config = ConfigDict(extra="ignore")

    type: Literal["DISJONCTEUR", "FUSIBLE", "INTERRUPTEUR_SECTIONNEUR"]
    ratedCurrent: float = Field(gt=0)
    numberOfPoles: Literal[1, 2, 3, 4]
    curveType: Literal["B", "C", "D", "K", "Z"]
    breakingCapacity: float = Field(gt=0)
    selectivityVerified: bool = False


class FurthestLoadDistanceInput(BaseModel):
    model_config = ConfigDict(extra="ignore")

    circuitName: str = Field(min_length=1, max_length=150)
    distance: float = Field(ge=0)


class CalculationInput(BaseModel):
    project: ProjectInput
    powerSupply: PowerSupplyInput
    circuits: list[CircuitInput] = Field(min_length=1)
    cableData: CableDataInput | None = None
    protection: ProtectionInput | None = None
    furthestLoadDistance: FurthestLoadDistanceInput | None = None

    @model_validator(mode="after")
    def validate_circuit_equipment(self):
        names = [circuit.name for circuit in self.circuits]
        if len(names) != len(set(names)):
            raise ValueError("Circuit names must be unique")

        for circuit in self.circuits:
            if circuit.cableData is None:
                circuit.cableData = self.cableData
            if circuit.protection is None:
                circuit.protection = self.protection
            if circuit.cableData is None or circuit.protection is None:
                raise ValueError(
                    f"Circuit '{circuit.name}' must define cableData and protection"
                )
            if circuit.distance is None and self.furthestLoadDistance:
                if circuit.name == self.furthestLoadDistance.circuitName:
                    circuit.distance = self.furthestLoadDistance.distance
            if circuit.distance is None:
                raise ValueError(
                    f"Circuit '{circuit.name}' must define its cable distance"
                )

        return self


class CircuitCalculationResult(BaseModel):
    circuitName: str
    ib: float
    iDesign: float
    iStart: float
    kTotal: float
    iz: float
    izCorrected: float
    minimumSection: float
    recommendedSection: float
    peSection: float
    voltageDropVolts: float
    voltageDropPercent: float
    shortCircuitCurrentAtEnd: float
    recommendedBreaker: float
    requiredBreakingCapacity: float
    overloadCheck: Literal["PASS", "FAIL", "TO_VERIFY_WITH_MANUFACTURER"]
    voltageDropCheck: Literal["PASS", "FAIL", "TO_VERIFY_WITH_MANUFACTURER"]
    breakingCapacityCheck: Literal["PASS", "FAIL", "TO_VERIFY_WITH_MANUFACTURER"]
    coordinationCheck: Literal["PASS", "FAIL", "TO_VERIFY_WITH_MANUFACTURER"]
    assumptions: dict[str, object] = Field(default_factory=dict)


class CalculationResult(BaseModel):
    currentNominal: float
    currentDesign: float
    recommendedCableSection: float
    correctedCableCapacity: float
    recommendedBreaker: float
    voltageDropVolts: float
    voltageDropPercent: float
    shortCircuitCurrentAtEnd: float
    breakerBreakingCapacity: float
    overloadCheck: Literal["PASS", "FAIL", "TO_VERIFY_WITH_MANUFACTURER"]
    voltageDropCheck: Literal["PASS", "FAIL", "TO_VERIFY_WITH_MANUFACTURER"]
    breakingCapacityCheck: Literal["PASS", "FAIL", "TO_VERIFY_WITH_MANUFACTURER"]
    coordinationCheck: Literal["PASS", "FAIL", "TO_VERIFY_WITH_MANUFACTURER"]
    standard: str
    perCircuit: list[CircuitCalculationResult]


class CalculationResponse(BaseModel):
    result: CalculationResult
