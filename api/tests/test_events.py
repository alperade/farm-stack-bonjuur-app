import json
from fastapi.testclient import TestClient
from queries.events import EventQueries
from main import app

client = TestClient(app)


class EventQueriesMock:
    def get_all(self):
        return []

    def create(self, event):
        response = {
            "name": "testing event",
            "date": "2022-12-06T21:29:18.709000+00:00",
            "location": "baltimore",
            "category": "custom",
            "venue": "n/a",
            "rating": "n/a",
            "address": "111 main rd",
            "description": "test description",
            "itinerary_id": "638e641f5bc00ac260e849d9",
            "image_url": "string",
            "url": "string",
            "id": "638fb4a1cc1c95efafba9585"
            }
        response.update(event)
        return response


def test_get_events():
    app.dependency_overrides[EventQueries] = EventQueriesMock

    response = client.get('/api/events')

    assert response.status_code == 200
    assert response.json() == {"events": []}

    app.dependency_overrides = {}


def test_create_event():
    app.dependency_overrides[EventQueries] = EventQueriesMock
    event = {
        "name": "Taylor Swift Concert",
        "date": "2022-12-16T21:29:18.709Z",
        "location": "Seattle",
        "category": "concert",
        "venue": "n/a",
        "rating": "n/a",
        "address": "222 main rd",
        "description": "very expensive concert",
        "itinerary_id": "638e641f5bc00ac260e849d9",
        "image_url": "string",
        "url": "string"
        }

    response = client.post('/api/events', json.dumps(event))

    assert response.status_code == 200
    assert response.json()['name'] == 'Taylor Swift Concert'
