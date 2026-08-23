from pathlib import Path

from pydantic import Field, field_validator
from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    app_title: str = Field(default="API Algorithmes de calculs des protection electrique")
    app_version: str = Field(default="1.0.0")
    debug: bool = Field(default=False)
    api_key: str = Field(..., min_length=16)
    allowed_hosts: str = Field(default="localhost,127.0.0.1,[::1]")
    cors_origins: str = Field(default="http://localhost:8800,http://127.0.0.1:8800")
    api_prefix: str = Field(default="/api")
    https_redirect: bool = Field(default=False)
    gzip_min_size: int = Field(default=1000, ge=0)
    redis_url: str | None = Field(default=None)
    rate_limit_public: str = Field(default="60/minute")
    rate_limit_private: str = Field(default="300/hour")
    rate_limit_calcul: str = Field(default="20/minute")
    docs_enabled: bool = Field(default=False)
    default_host: str = Field(default="localhost")

    class Config:
        env_file = Path(__file__).resolve().parents[2] / ".env"
        extra = "ignore"

    @field_validator("allowed_hosts", "cors_origins", mode="before")
    @classmethod
    def normalize_comma_separated(cls, value):
        if isinstance(value, str):
            return ",".join(
                item.strip()
                for item in value.split(",")
                if item.strip()
            )
        return value

    @staticmethod
    def parse_comma_separated_list(value):
        if value is None:
            return []
        if isinstance(value, str):
            return [item.strip() for item in value.split(",") if item.strip()]
        if isinstance(value, (list, tuple)):
            return [str(item).strip() for item in value if str(item).strip()]
        return [str(value).strip()] if str(value).strip() else []

    def get_allowed_hosts(self):
        return self.parse_comma_separated_list(self.allowed_hosts)

    def get_cors_origins(self):
        return self.parse_comma_separated_list(self.cors_origins)


settings = Settings()
