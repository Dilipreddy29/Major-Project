from fastapi import APIRouter

router = APIRouter(prefix="/backtesting", tags=["Backtesting Engine"])


@router.get("", summary="Backtesting Module Status Placeholder")
def get_backtesting_status():
    """
    Placeholder endpoint for historical strategy backtesting.
    """
    return {
        "status": "success",
        "message": "Backtesting module ready",
        "features": ["Regime-Adaptive Simulation", "Slippage & Commission Modeling", "Drawdown Metrics"]
    }
