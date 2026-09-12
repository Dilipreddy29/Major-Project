from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from app.database.connection import get_db
from app.schemas.auth import UserSignup, UserLogin, Token
from app.schemas.user import UserWithWalletResponse
from app.services.auth_service import AuthService
from app.api.dependencies import get_current_user
from app.models.user import User

router = APIRouter(prefix="/auth", tags=["Authentication"])


@router.post("/signup", response_model=UserWithWalletResponse, status_code=status.HTTP_201_CREATED, summary="Register New User")
def signup(user_in: UserSignup, db: Session = Depends(get_db)):
    """
    Registers a new user and automatically initializes their virtual paper trading wallet.
    """
    user = AuthService.register_user(db=db, user_in=user_in)
    return user


@router.post("/login", response_model=Token, summary="User Login & JWT Token Generation")
def login(login_in: UserLogin, db: Session = Depends(get_db)):
    """
    Authenticates user email and password, returning JWT Bearer token upon success.
    """
    user = AuthService.authenticate_user(db=db, email=login_in.email, password=login_in.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    access_token = AuthService.create_user_token(user)
    return {"access_token": access_token, "token_type": "bearer"}


@router.get("/me", response_model=UserWithWalletResponse, summary="Get Current Authenticated User Profile")
def get_me(current_user: User = Depends(get_current_user)):
    """
    Returns profile and wallet information for the currently authenticated user.
    """
    return current_user
