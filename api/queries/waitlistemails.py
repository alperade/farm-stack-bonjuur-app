from bson.objectid import ObjectId
from typing import List
from .client import Queries
from models import WaitListEmailIn, WaitListEmailOut
from pymongo.collection import ReturnDocument
from datetime import datetime


class WaitListEmailQueries(Queries):
    DB_NAME = "bonjuur-db"
    COLLECTION = "waitlistemails"

    def create(self, waitlistemail: WaitListEmailIn) -> WaitListEmailOut:
        props = waitlistemail.dict()
        props["created_on"] = datetime.now()
        self.collection.insert_one(props)
        props["id"] = str(props["_id"])
        return WaitListEmailOut(**props)


    def delete(self, id: str):
        self.collection.delete_one(
            {
                "_id": ObjectId(id),
            }
        )

    def get_all(self) -> List[WaitListEmailOut]:
        result = self.collection.find()
        waitlistemail_props_list = list(result)
        for waitlistemail_props in waitlistemail_props_list:
            waitlistemail_props["id"] = str(waitlistemail_props["_id"])
        return [WaitListEmailOut(**waitlistemail) for waitlistemail in waitlistemail_props_list]

    def update(self, id, body):
        filter = {
                "_id": ObjectId(id),
            }
        waitlistemail = self.collection.find_one(filter)
        updated_waitlistemail = self.collection.find_one_and_update(
                                    waitlistemail,
                                    {"$set": body},
                                    return_document=ReturnDocument.AFTER
                                    )
        updated_waitlistemail["id"] = str(updated_waitlistemail["_id"])
        return WaitListEmailOut(**updated_waitlistemail)
