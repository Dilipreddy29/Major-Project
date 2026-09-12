from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import settings
from app.api.router import api_router

app = FastAPI(
    title=settings.PROJECT_NAME,
    description="MLO — Regime-Adaptive AI-Powered Stock Market Intelligence & Paper Trading Platform Backend API",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc"
)

# Configure CORS Middleware for Frontend Access
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include Central API Router
app.include_router(api_router)


@app.get("/", tags=["Root"])
def read_root():
    return {
        "message": "Welcome to MLO — Regime-Adaptive AI-Powered Stock Market Intelligence API",
        "docs": "/docs",
        "health": "/api/health",
        "database_health": "/api/health/database"
    }
