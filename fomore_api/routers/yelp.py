from fastapi import APIRouter, HTTPException, status
from datetime import datetime
import requests
import os

YELP_API_KEY = os.environ["YELP_API_KEY"]

router = APIRouter()

not_authorized = HTTPException(
    status_code=status.HTTP_401_UNAUTHORIZED,
    detail="Invalid authentication credentials",
    headers={"WWW-Authenticate": "Bearer"},
)


@router.get("/restaurant_search/")
def get_external_restaurant(
    location: str,
    date: datetime,
    itinerary_id: str
):
    location = location.replace(" ", "%")
    url = 'https://api.yelp.com/v3/businesses/search'
    params = {
        "term": 'restaurant',
        "location": location,
        "radius": 5000,
        "sort_by": "rating",
        "limit": 5,
    }
    headers = {"Authorization": YELP_API_KEY}
    response = requests.get(url, params=params, headers=headers)
    data = response.json()
    print(data)
    res = [{
        "name": restaurant["name"],
        "date": date,
        "location": restaurant["location"]["city"],
        "category": "resturant",
        "address": restaurant["location"]["address1"],
        "rating": restaurant["rating"],
        "venue": "N/A",
        "description":restaurant["categories"][0]["title"],
        "itinerary_id": itinerary_id,
        "image_url": restaurant["image_url"],
        "url": restaurant["url"]
    } for restaurant in data["businesses"]]
    return res


@router.get("/event_search/")
def get_external_event(
    location: str,
    date: datetime,
    itinerary_id: str
):
    location = location.replace(" ", "%")
    date_epoch = int(date.timestamp())
    url = 'https://api.yelp.com/v3/events'
    params = {
        "location": location,
        "start_date": date_epoch,
        "sort_on": "popularity",
        "limit": 5,
        "radius": 5000,
       }
    headers = {"Authorization": YELP_API_KEY}
    response = requests.get(url, params=params, headers=headers)
    data = response.json()
    res = [{
        "name": event["name"],
        "date": date,
        "location": event["location"]["city"],
        "category": "event",
        "venue": event["business_id"],
        "description":event["description"],
        "itinerary_id": itinerary_id,
        "image_url": event["image_url"],
        "url": event["event_site_url"]
    } for event in data["events"]]
    return res


@router.get("/attraction_search/")
def get_external_attracion(
    location: str,
    date: datetime,
    itinerary_id: str
):
    location = location.replace(" ", "%")
    url = 'https://api.yelp.com/v3/businesses/search'
    params = {
        "term": 'tourist%attractions',
        "location": location,
        "radius": 5000,
        "sort_by": "rating",
        "limit": 5,
    }
    headers = {"Authorization": YELP_API_KEY}
    response = requests.get(url, params=params, headers=headers)
    data = response.json()
    res = [{
        "name": attraction["name"],
        "date": date,
        "location": attraction["location"]["city"],
        "category": "attraction",
        "venue": "N/A",
        "rating": "N/A",
        "address": "N/A",
        "description":attraction["categories"][0]["title"],
        "itinerary_id": itinerary_id,
        "image_url": attraction["image_url"],
        "url": attraction["url"]
    } for attraction in data["businesses"]]
    return res
