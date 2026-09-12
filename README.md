# MLO — Regime-Adaptive AI-Powered Stock Market Intelligence & Paper Trading Platform

A high-performance quantitative stock intelligence, paper trading, and regime-adaptive analytics platform built specifically for the **Indian Stock Market (NSE)**.

---

## Project Overview

**MLO** is an academic-grade stock intelligence platform designed to integrate regime-adaptive Machine Learning models (Hidden Markov Models, XGBoost, SHAP explainability) with a real-time paper trading and backtesting engine.

> [!NOTE]
> **Development Phase**: Architectural Phase completed. Core API routing, PostgreSQL connection layer, data pipeline folders, ML placeholders, and React frontend shell are set up. Machine Learning models and DB table schemas will be integrated in future phases.

---

## Directory Architecture

```
MLO/
├── frontend/             # React + TypeScript + Vite + Tailwind CSS + Recharts UI
│   ├── src/
│   │   ├── api/          # Axios HTTP Client (apiClient.ts)
│   │   ├── components/   # UI & Chart Components
│   │   ├── hooks/        # Custom React Hooks (useApiHealth.ts)
│   │   ├── layouts/      # Main Navigation Shell (MainLayout.tsx)
│   │   ├── pages/        # 9 Modular View Routes (Dashboard, Market, Equity, Intraday, Options, Trading, Portfolio, Backtesting, Analytics)
│   │   ├── services/     # API Service Wrappers
│   │   ├── types/        # TypeScript Definitions
│   │   ├── utils/        # Formatters & Helpers
│   │   ├── App.tsx       # React Router setup
│   │   └── main.tsx
│   ├── package.json
│   ├── vite.config.ts
│   └── .env.example
│
├── backend/              # Python FastAPI + SQLAlchemy + Psycopg Backend
│   ├── app/
│   │   ├── api/          # REST API Routers & Endpoints
│   │   ├── core/         # Settings & Constants
│   │   ├── database/     # SQLAlchemy Engine & Session Helper
│   │   ├── models/       # DB Models Placeholder
│   │   ├── schemas/      # Pydantic Schemas Placeholder
│   │   ├── services/     # Business Service Layer Placeholders
│   │   └── main.py       # FastAPI Entry Point
│   ├── requirements.txt
│   ├── .env.example
│   └── README.md
│
├── data/                 # Data Pipeline Infrastructure
│   ├── raw/              # Original downloaded NSE datasets
│   ├── processed/        # Cleaned & standardized market data
│   └── features/         # Technical indicators & ML feature matrices
│
├── ml/                   # Machine Learning Engine (Placeholders)
│   ├── regime/           # HMM Market Regime Detection
│   ├── equity/           # Multi-Horizon Equity Trend Prediction
│   ├── intraday/         # Intraday Momentum & Signal Models
│   ├── options/          # Options Volatility & Greeks Analytics
│   ├── explainability/   # SHAP Feature Attribution
│   └── artifacts/        # Saved Model Checkpoints
│
├── docs/                 # System Architecture & Documentation
├── README.md             # Master Setup & Operations Guide
└── .gitignore            # Git exclusion rules (Local project)
```

---

## Technology Stack

### Frontend
- **Framework**: React 18 with TypeScript & Vite
- **Styling**: Tailwind CSS (Financial Dark Theme)
- **Routing**: React Router DOM v6
- **HTTP Client**: Axios
- **Data Visualization**: Recharts

### Backend
- **Framework**: FastAPI (Python)
- **ASGI Server**: Uvicorn
- **Database Engine**: SQLAlchemy 2.0 (Async-ready)
- **Database Driver**: `psycopg` (PostgreSQL driver v3)
- **Config & Validation**: Pydantic & Pydantic-Settings

### Database
- **Database**: PostgreSQL (Local instance `mlo_db`)

---

## Quick Start Guide

### 1. Backend Setup
```bash
cd backend

# Create Python Virtual Environment
python -m venv venv

# Activate Virtual Environment (Windows PowerShell)
.\venv\Scripts\Activate.ps1

# Install Dependencies
pip install -r requirements.txt

# Create local configuration
copy .env.example .env

# Edit .env and enter your PostgreSQL password:
# DATABASE_URL=postgresql+psycopg://postgres:YOUR_PASSWORD@localhost:5432/mlo_db

# Start FastAPI server
uvicorn app.main:app --reload
```
- Interactive Swagger UI: `http://localhost:8000/docs`
- General Health API: `http://localhost:8000/api/health`
- Database Health API: `http://localhost:8000/api/health/database`

---

### 2. Frontend Setup
```bash
cd frontend

# Install Dependencies
npm install

# Create environment file
copy .env.example .env

# Start React Dev Server
npm run dev
```
- Open UI: `http://localhost:5173/`

---

## Local PostgreSQL Setup & Configuration Guide

For detailed step-by-step instructions on installing PostgreSQL on Windows, creating the database `mlo_db`, and testing backend connectivity, refer to the **Step-by-Step Setup Guide** in the output summary.
