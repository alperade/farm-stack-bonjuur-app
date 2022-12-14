from bson.objectid import ObjectId
from typing import List
from .client import Queries
from models import ItineraryIn, ItineraryOut
from pymongo.collection import ReturnDocument


class ItineraryQueries(Queries):
    DB_NAME = "fomore-db"
    COLLECTION = "itineraries"

    def create(self, itinerary: ItineraryIn) -> ItineraryOut:
        props = itinerary.dict()
        self.collection.insert_one(props)
        props["id"] = str(props["_id"])
        return ItineraryOut(**props)

    def delete(self, id: str):
        self.collection.delete_one({
            "_id": ObjectId(id)
            })

    def get_one(self, id: str):
        itinerary = self.collection.find_one({"_id": ObjectId(id)})
        itinerary["id"] = str(itinerary["_id"])
        return ItineraryOut(**itinerary)

    def get_all(self) -> List[ItineraryOut]:
        result = self.collection.aggregate(
            [
                {
                    "$lookup": {
                        "from": "events",
                        "localField": "_id",
                        "foreignField": "event_id",
                        "as": "events",
                    }
                },
                {"$sort": {"name": 1}},
            ]
        )
        itineraryPropsList = list(result)
        for itineraryProps in itineraryPropsList:
            itineraryProps["id"] = str(itineraryProps["_id"])
            itineraryProps["events"] = [
                str(props["account_id"]) for props in itineraryProps["events"]
            ]
        return [ItineraryOut(**itinerary) for itinerary in itineraryPropsList]

    def update(self, id, body):
        filter = {
                "_id": ObjectId(id),
            }
        itinerary = self.collection.find_one(filter)
        updated_itinerary = self.collection.find_one_and_update(
            itinerary,
            {"$set": body},
            return_document=ReturnDocument.AFTER
            )
        updated_itinerary["id"] = str(updated_itinerary["_id"])
        return ItineraryOut(**updated_itinerary)
