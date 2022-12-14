# API Design

### GET list of events (third party)
- **Path**: /events
- **Method**: Get
- **Query parameters**:
  ```
  {
        "location": location,
        "start_date": date_epoch,
        "sort_on": "popularity",
        "limit": 5,
        "radius": 5000,
  }
  ```
- **Headers**: {“Authorization”: YElP_API_KEY}
- Response shape: 
```
{"total": int,
    "events": [
        {
            "name": event["name"],
        "date": date,
        "location": event["location"]["city"],
        "category": "event",
        "venue": event["business_id"],
        "description":event["description"],
        "itinerary_id": itinerary_id,
        "image_url": event["image_url"],
        "url": event["event_site_url"]
        }
    ]
}    
```

### GET list of restaurants(third party)
- **GET** https://api.yelp.com/v3/businesses/search
- **Path**: /restaurant_search/
- **Method**: Get
- **Query parameters**:
```
  {
        "term": 'restaurant',
        "location": location,
        "radius": 5000,
        "sort_by": "rating",
        "limit": 5,
  }
```
- **Headers**: {“Authorization”: YELP_API_KEY}
- Response shape:
```
  [{
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
  }]
```

### GET list of Attractions (third party)
- GET https://api.yelp.com/v3/businesses/search
- **Path**: /attraction_search/
- **Method**: Get
- **Query parameters**:
```
{
        "term": 'tourist%attractions',
        "location": location,
        "radius": 5000,
        "sort_by": "rating",
        "limit": 5,
}
```
- **Headers**: {“Authorization”: YELP_API_KEY}
- Response shape:
```
[{
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
}]
```
### Accounts
- **Paths**: /api/accounts
- **Method**: Get
Request shape: 
```
{
  email: str
  password: str
  full_name: str
}
```
### Log in/Log out
- **Path**: /token
- **Method**: Post, Delete
- **Headers**: {"WWW-Authenticate": "Bearer"}
Request shape Get:
```
{  
  username: string
  password: string
}
```
- Response: Account information and a token
Response shape Get (JSON):
```
{
  "access_token": "string",
  "token_type": "Bearer"
}
```
Request shape Delete:
```
{
  fastapi_token: string
}
```
Response shape Delete:
```
{
  true
}
```

### Itineraries
- **Path**: /api/itineraries
- **Method**: Get
- **Headers**: {"WWW-Authenticate": "Bearer"}
- **Response shape**:
```
{
  "itineraries": [
    {
      "name": "string",
      "start_date": "2022-12-06T22:52:20.672Z",
      "end_date": "2022-12-06T22:52:20.672Z",
      "location": "string",
      "account_id": "string",
      "id": "string"
    }
  ]
}
```


### POST itinerary
- **Path**: /api/itineraries/
- **Method**: Post
- **Headers**: {"WWW-Authenticate": "Bearer"}
Request body:
```
{
  "name": "string",
  "start_date": "2022-12-06T22:53:44.083Z",
  "end_date": "2022-12-06T22:53:44.083Z",
  "location": "string",
  "account_id": "string"
}
```
Response body:
```
{
  "name": "string",
  "start_date": "2022-12-06T22:53:44.088Z",
  "end_date": "2022-12-06T22:53:44.088Z",
  "location": "string",
  "account_id": "string",
  "id": "string"
}
```


## GET Detail of Itinerary
- **Path**: /api/itineraries/{itinerary_id}
- **Method**: Get Detail
- **Headers**: {"WWW-Authenticate": "Bearer"}
Request shape:
```
{
  itinerary_id: string
}
```
Response shape:
```
{
  "name": "string",
  "start_date": "2022-12-06T22:54:30.885Z",
  "end_date": "2022-12-06T22:54:30.885Z",
  "location": "string",
  "account_id": "string",
  "id": "string"
}
```


### Delete Itinerary
- **Path**: /itineraries/{itinerary_id}
- **Method**: Delete, Put
- **Headers**: {"WWW-Authenticate": "Bearer"}
Request shape:
```
{
  itinerary_id: string
}
```
Response shape:
```
{
  Deleted: bool
}
```
- **Method**: Put
Request shape:
```
{
  itinerary_id: string
}
```
Response shape:
```
{
  "name": "string",
  "start_date": "2022-12-06T22:56:00.731Z",
  "end_date": "2022-12-06T22:56:00.731Z",
  "location": "string",
  "account_id": "string",
  "id": "string"
}
```


### User Created Events
- **Path**: /events/
- **Method**: Post
- **Headers**: {"WWW-Authenticate": "Bearer"}
Request Body:
```
{
  "name": "string",
  "date": "2022-12-06T22:59:57.083Z",
  "location": "string",
  "category": "string",
  "venue": "string",
  "rating": "string",
  "address": "string",
  "description": "string",
  "itinerary_id": "string",
  "image_url": "string",
  "url": "string"
}
```
Response body:
```
{
  "name": "string",
  "date": "2022-12-06T22:59:57.088Z",
  "location": "string",
  "category": "string",
  "venue": "string",
  "rating": "string",
  "address": "string",
  "description": "string",
  "itinerary_id": "string",
  "image_url": "string",
  "url": "string",
  "id": "string"
}
```


### GET list of created events by user
- **Path**: /api/events
- **Method**: GET
- **Headers**: {"WWW-Authenticate": "Bearer"}
Response Shape:
```
"events": [
  {
    "name": "taylor swift concert $28000",
    "date": "2022-11-18T00:00:00+00:00",
    "location": "string",
    "category": "event",
    "venue": "string",
    "rating": "N/A",
    "address": "N/A",
    "description": "too expensive",
    "itinerary_id": "63755aa26282cfade5af40f9",
    "image_url": "https://media.npr.org/assets/img/2022/11/21/gettyimages-484816706-8838823b36e61ecf9459debab7c14d769ab83205-s800-c85.webp",
    "url": null,
    "id": "638a3473307cf7441ffb2ec0"
  }
```

### update or delete an event
- **Path**: /api/events/{event_id}
- **Method**: Put, Delete
- **Headers**: {"WWW-Authenticate": "Bearer"}
Request shape:
```
{
  "name": "string",
  "date": "2022-12-06T22:59:57.083Z",
  "location": "string",
  "category": "string",
  "venue": "string",
  "rating": "string",
  "address": "string",
  "description": "string",
  "itinerary_id": "string",
  "image_url": "string",
  "url": "string"
}
```
Response Shape:

```
{
  "name": "string",
  "date": "2022-12-06T23:02:51.932Z",
  "location": "string",
  "category": "string",
  "venue": "string",
  "rating": "string",
  "address": "string",
  "description": "string",
  "itinerary_id": "string",
  "image_url": "string",
  "url": "string",
  "id": "string"
}
```
**Method**: Put
Request body:
```
{
  event_id: string
}
```
Response body:
```
{
  "name": "string",
  "date": "2022-12-06T23:10:03.115Z",
  "location": "string",
  "category": "string",
  "venue": "string",
  "rating": "string",
  "address": "string",
  "description": "string",
  "itinerary_id": "string",
  "image_url": "string",
  "url": "string",
  "id": "string"
}
```


