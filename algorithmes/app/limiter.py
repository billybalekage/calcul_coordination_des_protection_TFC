from slowapi import Limiter
from slowapi.errors import RateLimitExceeded
from slowapi.middleware import SlowAPIMiddleware
from slowapi.util import get_remote_address
from starlette.responses import JSONResponse

from app.config.config import settings

limiter = Limiter(
    key_func=get_remote_address,
    storage_uri=settings.redis_url or "memory://",
)


def init_rate_limiting(app):
    app.state.limiter = limiter
    app.add_middleware(SlowAPIMiddleware)

    async def rate_limit_handler(request, exc):
        return JSONResponse(
            status_code=429,
            content={
                "success": False,
                "error": {
                    "message": "Too many requests, please try again later.",
                    "code": "RATE_LIMIT_EXCEEDED",
                    "details": None,
                    "requestId": request.headers.get("x-request-id"),
                },
            },
        )

    app.add_exception_handler(RateLimitExceeded, rate_limit_handler)
