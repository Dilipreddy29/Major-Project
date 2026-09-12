from fastapi import APIRouter

router = APIRouter(prefix="/market", tags=["Market Data"])


@router.get("", summary="Market Module Status Placeholder")
def get_market_status():
    """
    Placeholder endpoint for market data services (NSE stock quotes, index feeds).
    """
    return {
        "status": "success",
        "message": "Market module ready",
        "market": "NSE (National Stock Exchange of India)",
        "features_available": ["Historical Data Fetcher", "Live Feed Streamer", "OHLC Transformer"]
    }
