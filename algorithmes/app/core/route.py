from math import sqrt
from typing import Literal

from fastapi import APIRouter, Depends, Header, HTTPException
from pydantic import BaseModel, ConfigDict, Field, model_validator

from app.config.config import settings


def require_api_key(x_api_key: str | None = Header(default=None, alias="X-API-Key")) -> str:
    if not settings.api_key:
        return ""

    if x_api_key != settings.api_key:
        raise HTTPException(status_code=403, detail="Invalid API key")

    return x_api_key


router = APIRouter()


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


class ProtectionInput(BaseModel):
    model_config = ConfigDict(extra="ignore")

    type: Literal["DISJONCTEUR", "FUSIBLE", "INTERRUPTEUR_SECTIONNEUR"]
    ratedCurrent: float = Field(gt=0)
    numberOfPoles: Literal[1, 2, 3, 4]
    curveType: Literal["B", "C", "D", "K", "Z"]
    breakingCapacity: float = Field(gt=0)


class FurthestLoadDistanceInput(BaseModel):
    model_config = ConfigDict(extra="ignore")

    circuitName: str = Field(min_length=1, max_length=150)
    distance: float = Field(ge=0)


class CalculationInput(BaseModel):
    project: ProjectInput
    powerSupply: PowerSupplyInput
    circuits: list[CircuitInput] = Field(min_length=1)
    cableData: CableDataInput
    protection: ProtectionInput
    furthestLoadDistance: FurthestLoadDistanceInput

    @model_validator(mode="after")
    def validate_distance_circuit(self):
        names = {c.name for c in self.circuits}
        if self.furthestLoadDistance.circuitName not in names:
            raise ValueError("furthestLoadDistance.circuitName must match a circuit")
        return self


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


def calculate_result(data: CalculationInput) -> CalculationResult:
    total_power = sum(c.totalPower * c.circuitCount for c in data.circuits)
    voltage = data.powerSupply.nominalVoltage
    if data.powerSupply.type == "TRIPHASE":
        current_nominal = total_power / (sqrt(3) * voltage)
    else:
        current_nominal = total_power / voltage

    current_design = current_nominal * 1.25
    recommended_breaker = data.protection.ratedCurrent
    section = 1.5 if current_design <= 16 else 2.5 if current_design <= 25 else 6.0
    corrected_capacity = section * (10 if data.cableData.material == "CUIVRE" else 7.5)
    distance = data.furthestLoadDistance.distance
    voltage_drop_volts = (current_nominal * distance * 0.0175 * 2) / section
    voltage_drop_percent = voltage_drop_volts / voltage * 100
    short_circuit_current = voltage / max(distance * 0.0175 / section, 0.001)

    return CalculationResult(
        currentNominal=current_nominal,
        currentDesign=current_design,
        recommendedCableSection=section,
        correctedCableCapacity=corrected_capacity,
        recommendedBreaker=recommended_breaker,
        voltageDropVolts=voltage_drop_volts,
        voltageDropPercent=voltage_drop_percent,
        shortCircuitCurrentAtEnd=short_circuit_current,
        breakerBreakingCapacity=data.protection.breakingCapacity,
        overloadCheck="PASS" if current_design <= corrected_capacity else "FAIL",
        voltageDropCheck="PASS" if voltage_drop_percent <= 3 else "FAIL",
        breakingCapacityCheck=(
            "PASS"
            if data.protection.breakingCapacity >= short_circuit_current
            else "FAIL"
        ),
        coordinationCheck=(
            "PASS" if data.protection.ratedCurrent >= current_design else "FAIL"
        ),
    )


@router.get("/")
def read_root():
    return {
        "project": "Algorithmes",
        "message": "Algothmes de calcul de protection electrique",
        "version": settings.app_version,
    }


@router.get(f"{settings.api_prefix}")
def api_root():
    return {"message": f"Bienvenue sur l'API Algorithmes ({settings.api_prefix})"}


@router.get(f"{settings.api_prefix}/health")
def health_check():
    return {"status": "ok", "version": settings.app_version}


@router.get(f"{settings.api_prefix}/secure")
def secure_route(api_key: str = Depends(require_api_key)):
    return {"message": "Route protégée", "api_key_received": True}


@router.post(f"{settings.api_prefix}/v1/calculations")
def calculate_protection(
    data: CalculationInput,
    _api_key: str = Depends(require_api_key),
):
    return {"result": calculate_result(data)}
