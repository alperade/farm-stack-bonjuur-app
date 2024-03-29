from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os

from routers import auth
from routers import accounts
from routers import members
from routers import waitlistemails

app = FastAPI()

origins = [
    os.environ.get("CORS_HOST", "http://localhost"),
    "http://localhost:3000", "https://bonjuurreact.azurewebsites.net"
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(auth.authenticator.router)
app.include_router(accounts.router)
app.include_router(members.router, prefix="/api")
app.include_router(waitlistemails.router, prefix="/api")
