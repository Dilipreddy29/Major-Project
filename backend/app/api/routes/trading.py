from fastapi import APIRouter

router = APIRouter(prefix="/trading", tags=["Paper Trading"])


@router.get("", summary="Trading Module Status Placeholder")
def get_trading_status():
    """
    Placeholder endpoint for Paper Trading execution.
    """
    return {
        "status": "success",
        "message": "Trading module ready",
        "mode": "PAPER_TRADING",
        "features": ["Order Placement Engine", "Execution Simulator", "P&L Calculator"]
    }
