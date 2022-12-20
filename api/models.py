from bson.objectid import ObjectId
from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime


class PydanticObjectId(ObjectId):
    @classmethod
    def __get_validators__(cls):
        yield cls.validate

    @classmethod
    def validate(cls, value: ObjectId | str) -> ObjectId:
        if value:
            try:
                ObjectId(value)
            except ValueError:
                raise ValueError(f"Not a valid object id: {value}")
        return value


class SessionOut(BaseModel):
    jti: str
    account_id: str


class AccountIn(BaseModel):
    email: str
    password: str
    full_name: str


class Account(AccountIn):
    id: PydanticObjectId


class AccountOut(BaseModel):
    id: str
    email: str
    full_name: str


class MemberIn(BaseModel):
    membership: str
    bedrooms: int
    bathrooms: int
    pets: int
    humans: int
    email: str
    phone: str
    full_name: str
    address: str
    apt: str
    start_date: datetime
    time_slot: str
    created_on: Optional[datetime]
    updated_on: Optional[datetime]
    cleaner: Optional[str]
    is_active: Optional[bool]


class Member(MemberIn):
    id: PydanticObjectId


class MemberOut(MemberIn):
    id: str


class MemberList(BaseModel):
    members: List[MemberOut]


class WaitListEmailIn(BaseModel):
    email: str
    address: str
    created_on: Optional[datetime]


class WaitListEmail(WaitListEmailIn):
    id: PydanticObjectId


class WaitListEmailOut(WaitListEmailIn):
    id: str


class WaitListEmailList(BaseModel):
    waitlistemails: List[WaitListEmailOut]
