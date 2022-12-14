from .client import Queries
from models import Account, SessionOut
from bson.objectid import ObjectId
from typing import Optional


class SessionQueries(Queries):
    DB_NAME = "fomore-db"
    COLLECTION = "sessions"

    def get(self, jti: str):
        return self.collection.find_one({"jti": jti})

    def create(self, jti: str, account: Account) -> Optional[Account]:
        result = self.collection.insert_one(
            {
                "jti": jti,
                "account_id": ObjectId(account.id),
            }
        )
        if result and result.inserted_id:
            return SessionOut(jti=jti, account_id=account.id)
        return "Succeeessss"

    def delete(self, jti: str):
        self.collection.delete_many({"jti": jti})

    def validate(self, jti: str):
        return self.collection.count_documents({"jti": jti}) > 0

    def delete_sessions(self, account_id: str):
        self.collection.delete_many({"account_id": ObjectId(account_id)})
