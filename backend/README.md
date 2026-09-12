# MLO Backend Service

FastAPI-powered asynchronous backend service providing REST API endpoints, CORS handling, data pipeline triggers, and PostgreSQL database connectivity.

## Environment Variables
Configured via `.env` file (copied from `.env.example`):
- `PROJECT_NAME`: Title of the FastAPI application.
- `DEBUG`: Boolean flag for debug logs.
- `API_V1_STR`: API route prefix (`/api`).
- `CORS_ORIGINS`: Allowed CORS origin list (e.g. `["http://localhost:5173"]`).
- `DATABASE_URL`: SQLAlchemy connection string format: `postgresql+psycopg://<USER>:<PASSWORD>@<HOST>:<PORT>/<DB_NAME>`.

## Running the Server Locally
```bash
# Create virtual environment
python -m venv venv

# Activate (Windows PowerShell)
.\venv\Scripts\Activate.ps1

# Install requirements
pip install -r requirements.txt

# Run Uvicorn server
uvicorn app.main:app --reload
```

Interactive API documentation available at `http://localhost:8000/docs`.
