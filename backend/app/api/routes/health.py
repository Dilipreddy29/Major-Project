from fastapi import APIRouter, Response, status
from app.database.connection import test_database_connection

router = APIRouter(prefix="/health", tags=["Health Checks"])


@router.get("", summary="General Health Check")
def health_check():
    """
    Returns general backend health status.
    """
    return {
        "status": "healthy",
        "service": "MLO Stock Market Intelligence Platform API",
        "version": "1.0.0"
    }


@router.get("/database", summary="Database Connection Health Check")
def database_health_check(response: Response):
    """
    Attempts connection to PostgreSQL database using SQLAlchemy.
    """
    is_connected, result = test_database_connection()
    if not is_connected:
        response.status_code = status.HTTP_503_SERVICE_UNAVAILABLE
    return result
