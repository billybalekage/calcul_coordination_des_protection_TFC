from secrets import compare_digest

from fastapi import Header, HTTPException

from app.config.config import settings


def require_api_key(
    x_api_key: str | None = Header(default=None, alias="X-API-Key"),
) -> str:
    if not x_api_key or not compare_digest(x_api_key, settings.api_key):
        raise HTTPException(status_code=403, detail="Invalid API key")

    return x_api_key
