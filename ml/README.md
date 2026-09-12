# Machine Learning Module Architecture

This directory houses the Machine Learning architecture for the MLO platform.

## Directory Structure

- **`regime/`**: Market Regime Detection models using Hidden Markov Models (HMM) and clustering techniques to identify Bull, Bear, Sideways, and High-Volatility regimes.
- **`equity/`**: Multi-horizon stock price, trend, and return prediction models using gradient boosting (XGBoost/LightGBM).
- **`intraday/`**: High-frequency intraday momentum and breakout prediction engines.
- **`options/`**: Options volatility surface estimation, Greeks calculation, and strategy evaluation.
- **`explainability/`**: SHAP (SHapley Additive exPlanations) attribution engines providing human-interpretable feature importance for predictions.
- **`artifacts/`**: Serialized model checkpoints (`.pkl`, `.json`, `.pt`), scalar transformers, and feature mappings.
