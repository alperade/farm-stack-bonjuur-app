from fastapi import APIRouter, Depends, HTTPException, status
from models import EventIn, EventOut, EventList
from queries.events import EventQueries
from routers.sockets import socket_manager

router = APIRouter()

not_authorized = HTTPException(
    status_code=status.HTTP_401_UNAUTHORIZED,
    detail="Invalid authentication credentials",
    headers={"WWW-Authenticate": "Bearer"},
)


@router.post("/events", response_model=EventOut)
async def create_event(
    event: EventIn,
    repo: EventQueries = Depends(),
):
    event = repo.create(event)
    await socket_manager.broadcast_refetch()
    return event


@router.get("/events", response_model=EventList)
def get_events(repo: EventQueries = Depends()):
    return EventList(events=repo.get_all())


@router.delete("/events/{event_id}", response_model=bool)
async def delete_event(
    event_id: str,
    repo: EventQueries = Depends(),
):
    await socket_manager.broadcast_refetch()
    repo.delete(id=event_id)
    return True


@router.put("/events/{event_id}", response_model=EventOut)
def update_event(
    body: dict,
    event_id: str,
    repo: EventQueries = Depends(),
):
    event = repo.update(event_id, body)
    return event
