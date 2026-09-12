from typing import Optional
from sqlalchemy.orm import Session
from fastapi import HTTPException, status
from app.models.user import User
from app.models.wallet import Wallet
from app.schemas.auth import UserSignup
from app.core.security import get_password_hash, verify_password, create_access_token


class AuthService:
    @staticmethod
    def register_user(db: Session, user_in: UserSignup) -> User:
        """
        Registers a new user, hashes password, and automatically initializes virtual paper trading wallet.
        """
        # 1. Check if email already exists
        existing_user = db.query(User).filter(User.email == user_in.email.lower()).first()
        if existing_user:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="User with this email already exists."
            )

        # 2. Create User record with hashed password
        user = User(
            name=user_in.name,
            email=user_in.email.lower(),
            password_hash=get_password_hash(user_in.password)
        )
        db.add(user)
        db.flush()  # Assigns user.id

        # 3. Automatically create virtual wallet with ₹10,00,000 initial balance
        wallet = Wallet(
            user_id=user.id,
            balance=1000000.0,
            initial_balance=1000000.0
        )
        db.add(wallet)
        db.commit()
        db.refresh(user)

        return user

    @staticmethod
    def authenticate_user(db: Session, email: str, password: str) -> Optional[User]:
        """
        Authenticates user email and password against stored bcrypt hash.
        """
        user = db.query(User).filter(User.email == email.lower()).first()
        if not user:
            return None
        if not verify_password(password, user.password_hash):
            return None
        return user

    @staticmethod
    def create_user_token(user: User) -> str:
        """
        Generates JWT access token for authenticated user.
        """
        return create_access_token(subject=str(user.id))
