from fastapi import APIRouter

from app.features.calculs.routes import router as calculs_router
from app.api.system import router as system_router

api_router = APIRouter()
api_router.include_router(system_router)
api_router.include_router(calculs_router)
