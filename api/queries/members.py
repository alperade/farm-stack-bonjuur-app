from bson.objectid import ObjectId
from typing import List
from .client import Queries
from models import MemberIn, MemberOut
from pymongo.collection import ReturnDocument
from datetime import datetime


class MemberQueries(Queries):
    DB_NAME = "bonjuur-db"
    COLLECTION = "members"

    def create(self, member: MemberIn) -> MemberOut:
        props = member.dict()
        props["is_active"] = True
        props["cleaner"] = "Cleaner #1"
        props["created_on"] = datetime.now()
        self.collection.insert_one(props)
        props["id"] = str(props["_id"])
        return MemberOut(**props)


    def delete(self, id: str):
        self.collection.delete_one(
            {
                "_id": ObjectId(id),
            }
        )

    def get_all(self) -> List[MemberOut]:
        result = self.collection.find()
        member_props_list = list(result)
        print(member_props_list)
        for member_props in member_props_list:
            member_props["id"] = str(member_props["_id"])
        return [MemberOut(**member) for member in member_props_list]

    def update(self, id, body):
        filter = {
                "_id": ObjectId(id),
            }
        member = self.collection.find_one(filter)
        member["updated_on"] = datetime.now()
        member["is_active"] = False
        updated_member = self.collection.find_one_and_update(
                                    member,
                                    {"$set": body},
                                    return_document=ReturnDocument.AFTER
                                    )
        updated_member["id"] = str(updated_member["_id"])
        return MemberOut(**updated_member)
