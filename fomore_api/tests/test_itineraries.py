import json
from fastapi.testclient import TestClient
from queries.itineraries import ItineraryQueries
from main import app


client = TestClient(app)


class ItineraryQueriesMock:
    def get_all(self):
        return []

    def create(self, itinerary):
        response = {
            "name": "New York Reunion",
            "start_date": "2022-12-06T22:20:14.171Z",
            "end_date": "2022-12-08T22:20:14.171Z",
            "location": "New York",
            "account_id": "637d311042e7b5cab655ce80",
            "id": "638fc0a73aeb89d463e0d87d"
            }
        response.update(itinerary)
        return response


def test_get_itineraries():
    app.dependency_overrides[ItineraryQueries] = ItineraryQueriesMock

    response = client.get('/api/itineraries')

    assert response.status_code == 200
    assert response.json() == {"itineraries": []}

    app.dependency_overrides = {}


def test_create_itinerary():
    app.dependency_overrides[ItineraryQueries] = ItineraryQueriesMock
    itinerary = {
            "name": "New York Reunion",
            "start_date": "2022-12-06T22:20:14.171Z",
            "end_date": "2022-12-08T22:20:14.171Z",
            "location": "New York",
            "account_id": "637d311042e7b5cab655ce80"
            }

    response = client.post('/api/itineraries', json.dumps(itinerary))

    assert response.status_code == 200
    assert response.json()['name'] == 'New York Reunion'
