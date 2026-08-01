from typing import List

from pydantic_settings import BaseSettings, SettingsConfigDict
from pydantic import Field


class Settings(BaseSettings):
    app_title: str = Field(default="API Algorithmes")
    app_version: str = Field(default="1.0.0")
    debug: bool = Field(default=False)
    api_key: str = Field(default="change-me-in-production")
    allowed_hosts: str = Field(default="localhost,127.0.0.1,[::1]")
    cors_origins: str = Field(default="http://localhost:3000,http://127.0.0.1:3000")
    api_prefix: str = Field(default="/api")

    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

    def get_allowed_hosts(self) -> List[str]:
        return [host.strip() for host in self.allowed_hosts.split(",") if host.strip()]

    def get_cors_origins(self) -> List[str]:
        return [origin.strip() for origin in self.cors_origins.split(",") if origin.strip()]


settings = Settings()
