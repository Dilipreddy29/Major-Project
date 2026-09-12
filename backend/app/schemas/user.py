from datetime import datetime
from typing import Optional
from pydantic import BaseModel, ConfigDict


class WalletResponse(BaseModel):
    id: int
    balance: float
    initial_balance: float

    model_config = ConfigDict(from_attributes=True)


class UserResponse(BaseModel):
    id: int
    name: str
    email: str
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)


class UserWithWalletResponse(UserResponse):
    wallet: Optional[WalletResponse] = None

    model_config = ConfigDict(from_attributes=True)
