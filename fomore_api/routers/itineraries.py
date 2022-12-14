from fastapi import APIRouter, Depends, HTTPException, status
from models import ItineraryIn, ItineraryList, ItineraryOut
from queries.itineraries import ItineraryQueries
from routers.sockets import socket_manager

router = APIRouter()

not_authorized = HTTPException(
    status_code=status.HTTP_401_UNAUTHORIZED,
    detail="Invalid authentication credentials",
    headers={"WWW-Authenticate": "Bearer"},
)


@router.post("/itineraries", response_model=ItineraryOut)
async def create_itinerary(
    itinerary: ItineraryIn,
    repo: ItineraryQueries = Depends(),
):
    itinerary = repo.create(itinerary)
    await socket_manager.broadcast_refetch()
    return itinerary


@router.get("/itineraries", response_model=ItineraryList)
def get_itineraries(repo: ItineraryQueries = Depends()):
    return ItineraryList(itineraries=repo.get_all())


@router.get("/itineraries/{itinerary_id}", response_model=ItineraryOut)
def get_itinerary(
        itinerary_id: str, repo: ItineraryQueries = Depends()):
    itinerary = repo.get_one(itinerary_id)
    return itinerary


@router.delete("/itineraries/{itinerary_id}", response_model=bool)
async def delete_itinerary(
    itinerary_id: str,
    repo: ItineraryQueries = Depends(),
):
    await socket_manager.broadcast_refetch()
    repo.delete(id=itinerary_id)
    return True


@router.put("/itineraries/{itinerary_id}", response_model=ItineraryOut)
def update_itinerary(
    body: dict,
    itinerary_id: str,
    repo: ItineraryQueries = Depends(),
):
    itinerary = repo.update(itinerary_id, body)
    return itinerary
