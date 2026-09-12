from fastapi import APIRouter

router = APIRouter(prefix="/prediction", tags=["Prediction Engine"])


@router.get("", summary="Prediction Module Status Placeholder")
def get_prediction_status():
    """
    Placeholder endpoint for AI predictions (Equity, Intraday, Options, Regime).
    """
    return {
        "status": "success",
        "message": "Prediction module ready",
        "supported_models": ["Hidden Markov Model (Regime)", "XGBoost (Trend)", "SHAP (Explainability)"],
        "note": "Machine Learning models are not initialized yet. Ready for future integration."
    }
