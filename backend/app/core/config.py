import os
from typing import List
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    PROJECT_NAME: str = "MLO — Regime-Adaptive AI-Powered Stock Market Intelligence"
    DEBUG: bool = True
    API_V1_STR: str = "/api"
    CORS_ORIGINS: List[str] = ["http://localhost:5173", "http://127.0.0.1:5173"]
    DATABASE_URL: str = "postgresql+psycopg://postgres:admin@localhost:5432/mlo_db"

    # JWT Authentication Security Settings
    SECRET_KEY: str = "mlo_local_development_secret_key_8f7ef85030a840fb"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60

    model_config = SettingsConfigDict(
        env_file=os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(__file__))), ".env"),
        env_file_encoding="utf-8",
        extra="ignore"
    )


settings = Settings()
