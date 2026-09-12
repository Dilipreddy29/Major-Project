# MLO — Architecture Overview

## Overview
**MLO** is a regime-adaptive, AI-powered stock market intelligence and paper trading platform designed for high-frequency and multi-horizon market analysis on the Indian Stock Market (NSE).

## Layered System Architecture

```
                                  ┌──────────────────────────────┐
                                  │      React + Vite Frontend    │
                                  │  Tailwind CSS + Recharts UI  │
                                  └──────────────┬───────────────┘
                                                 │ HTTP / REST APIs
                                  ┌──────────────▼───────────────┐
                                  │       FastAPI Backend        │
                                  │  (Asynchronous REST Router)  │
                                  └──────────────┬───────────────┘
                                                 │
            ┌────────────────────────────────────┼────────────────────────────────────┐
            │                                    │                                    │
┌───────────▼────────────┐           ┌───────────▼────────────┐           ┌───────────▼────────────┐
│   PostgreSQL Database  │           │   Data Pipeline Layer  │           │   ML Engine (Future)   │
│  (SQLAlchemy Sessions) │           │  Raw ➔ Cleaned ➔ Feat  │           │  HMM / XGBoost / SHAP  │
└────────────────────────┘           └────────────────────────┘           └────────────────────────┘
```

## System Modules

1. **Frontend Architecture**
   - Built using React 18, TypeScript, Vite, and Tailwind CSS.
   - Modular navigation with routes for Dashboard, Market, Equity, Intraday, Options, Paper Trading, Portfolio, Backtesting, and Analytics.
   - Centralized API client (`apiClient.ts`) built on Axios with configurable base URLs.

2. **Backend API Layer**
   - FastAPI handles high-throughput asynchronous requests with lightweight routing.
   - Pydantic models validate request payloads and responses.
   - PostgreSQL integration powered by SQLAlchemy 2.0 and `psycopg` (v3).

3. **Data Pipeline Layer (`/data`)**
   - `raw/`: Unaltered market feeds and historical tick/OHLC data.
   - `processed/`: Standardized, cleaned, and resampled time-series data.
   - `features/`: Engineered technical indicators, macro features, and ML-ready matrices.

4. **Machine Learning Architecture (`/ml`)**
   - Designed for future integration of Hidden Markov Models (HMM) for market regime detection, ensemble models (XGBoost/LightGBM) for equity and intraday predictions, options volatility analytics, and SHAP explainability.
