from typing import Generator, Tuple, Dict, Any
from sqlalchemy import create_engine, text
from sqlalchemy.orm import sessionmaker, Session
from app.core.config import settings

# Initialize SQLAlchemy engine using PostgreSQL psycopg driver
engine = create_engine(
    settings.DATABASE_URL,
    pool_pre_ping=True,
    echo=settings.DEBUG
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)


def get_db() -> Generator[Session, None, None]:
    """
    FastAPI dependency yielding a SQLAlchemy session.
    """
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


def test_database_connection() -> Tuple[bool, Dict[str, Any]]:
    """
    Attempts to execute a simple query on PostgreSQL to verify connectivity.
    """
    try:
        with engine.connect() as connection:
            result = connection.execute(text("SELECT 1"))
            val = result.scalar()
            if val == 1:
                return True, {"status": "success", "database": "connected", "details": "PostgreSQL database 'mlo_db' connected successfully."}
            return False, {"status": "error", "database": "disconnected", "details": "Unexpected ping response from PostgreSQL."}
    except Exception as e:
        return False, {
            "status": "error",
            "database": "disconnected",
            "message": "Could not connect to PostgreSQL database. Please ensure PostgreSQL is running and your DATABASE_URL password in .env is configured correctly.",
            "error_details": str(e)
        }
