# Data Directory Architecture

This directory manages the multi-stage data pipeline for the MLO platform.

## Directory Structure

- **`raw/`**: Stores original downloaded market data (e.g. NSE CSVs, tick files, web-scraped historical feeds). Never modify files stored here directly.
- **`processed/`**: Contains cleaned, normalized, missing-value adjusted, and standardized market data.
- **`features/`**: Houses calculated technical indicators (RSI, MACD, Bollinger Bands), volatility metrics, regime labels, and pre-constructed dataset matrices prepared for machine learning model training and inference.
