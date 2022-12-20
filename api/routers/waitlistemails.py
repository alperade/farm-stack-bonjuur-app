from fastapi import APIRouter, Depends, HTTPException, status
from models import WaitListEmailIn, WaitListEmailOut, WaitListEmailList
from queries.waitlistemails import WaitListEmailQueries

router = APIRouter()

not_authorized = HTTPException(
    status_code=status.HTTP_401_UNAUTHORIZED,
    detail="Invalid authentication credentials",
    headers={"WWW-Authenticate": "Bearer"},
)


@router.post("/waitlistemails", response_model=WaitListEmailOut)
async def create_waitlistemail(
    waitlistemail: WaitListEmailIn,
    repo: WaitListEmailQueries = Depends(),
):
    waitlistemail = repo.create(waitlistemail)
    return waitlistemail


@router.get("/waitlistemails", response_model=WaitListEmailList)
def get_waitlistemails(repo: WaitListEmailQueries = Depends()):
    return WaitListEmailList(waitlistemails=repo.get_all())


@router.delete("/waitlistemails/{waitlistemail_id}", response_model=bool)
async def delete_waitlistemail(
    waitlistemail_id: str,
    repo: WaitListEmailQueries = Depends(),
):
    repo.delete(id=waitlistemail_id)
    return True


@router.put("/waitlistemails/{waitlistemail_id}", response_model=WaitListEmailOut)
def update_waitlistemail(
    body: dict,
    waitlistemail_id: str,
    repo: WaitListEmailQueries = Depends(),
):
    waitlistemail = repo.update(waitlistemail_id, body)
    return waitlistemail
