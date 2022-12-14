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


class ItineraryIn(BaseModel):
    name: str
    start_date: datetime
    end_date: datetime
    location: str
    account_id: str


class Itinerary(ItineraryIn):
    id: PydanticObjectId


class ItineraryOut(ItineraryIn):
    id: str


class ItineraryList(BaseModel):
    itineraries: List[ItineraryOut]


class EventIn(BaseModel):
    name: str
    date: datetime
    location: str
    category: str
    venue: Optional[str]
    rating: Optional[str]
    address: Optional[str]
    description: str
    itinerary_id: str
    image_url: Optional[str]
    url: Optional[str]


class Event(EventIn):
    id: PydanticObjectId


class EventOut(EventIn):
    id: str


class EventList(BaseModel):
    events: List[EventOut]
