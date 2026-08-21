from fastapi import APIRouter, Depends, Request

from app.config.config import settings
from app.core.security import require_api_key
from app.features.calculs.controllers import calculate_protection
from app.features.calculs.schemas import CalculationInput, CalculationResponse
from app.limiter import limiter

router = APIRouter(prefix=settings.api_prefix, tags=["calculs"])


@router.get("/")
def api_root():
    return {"message": f"Bienvenue sur l'API Algorithmes ({settings.api_prefix})"}


@router.get("/health")
def health_check():
    return {"status": "ok", "version": settings.app_version}


@router.get("/secure")
def secure_route(api_key: str = Depends(require_api_key)):
    return {"message": "Route protégée", "api_key_received": True}


@router.post(
    "/v1/calculations",
    response_model=CalculationResponse,
)
@limiter.limit(settings.rate_limit_calcul)
def calculate_route(
    request: Request,
    data: CalculationInput,
    _api_key: str = Depends(require_api_key),
):
    return calculate_protection(request, data)
