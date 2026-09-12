from fastapi import APIRouter
from app.api.routes import (
    health,
    auth,
    market,
    prediction,
    trading,
    portfolio,
    backtesting,
    analytics,
)

api_router = APIRouter(prefix="/api")

api_router.include_router(health.router)
api_router.include_router(auth.router)
api_router.include_router(market.router)
api_router.include_router(prediction.router)
api_router.include_router(trading.router)
api_router.include_router(portfolio.router)
api_router.include_router(backtesting.router)
api_router.include_router(analytics.router)
