from fastapi import APIRouter, Depends, Header, HTTPException

from app.config.config import settings


def require_api_key(x_api_key: str | None = Header(default=None, alias="X-API-Key")) -> str:
    if not settings.api_key:
        return ""

    if x_api_key != settings.api_key:
        raise HTTPException(status_code=403, detail="Invalid API key")

    return x_api_key


router = APIRouter()


@router.get("/")
def read_root():
    return {
        "project": "Algorithmes",
        "message": "Bienvenue sur l'API Algorithmes",
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
