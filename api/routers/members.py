from fastapi import APIRouter, Depends, HTTPException, status
from models import MemberIn, MemberOut, MemberList
from queries.members import MemberQueries

router = APIRouter()

not_authorized = HTTPException(
    status_code=status.HTTP_401_UNAUTHORIZED,
    detail="Invalid authentication credentials",
    headers={"WWW-Authenticate": "Bearer"},
)


@router.post("/members", response_model=MemberOut)
async def create_member(
    member: MemberIn,
    repo: MemberQueries = Depends(),
):
    member = repo.create(member)
    return member


@router.get("/members", response_model=MemberList)
def get_members(repo: MemberQueries = Depends()):
    return MemberList(members=repo.get_all())


@router.delete("/members/{member_id}", response_model=bool)
async def delete_member(
    member_id: str,
    repo: MemberQueries = Depends(),
):
    repo.delete(id=member_id)
    return True


@router.put("/members/{member_id}", response_model=MemberOut)
def update_member(
    body: dict,
    member_id: str,
    repo: MemberQueries = Depends(),
):
    member = repo.update(member_id, body)
    return member
