from fastapi import APIRouter

from app.config.config import settings

router = APIRouter(tags=["system"])


@router.get("/")
def read_root():
    return {
        "project": "Algorithmes",
        "message": "Algorithmes de calcul de protection electrique",
        "version": settings.app_version,
    }
