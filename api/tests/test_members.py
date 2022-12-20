import json
from fastapi.testclient import TestClient
from queries.members import MemberQueries
from main import app

client = TestClient(app)


class MemberQueriesMock:
    def get_all(self):
        return []

    def create(self, member):
        response = {
            "membership": "Just Keep",
            "bedrooms": 2,
            "bathrooms": 2,
            "pets": 0,
            "humans": 2,
            "email": "test1@test.com",
            "phone": "123-456-7890",
            "full_name": "Test Name",
            "address": "Test Address",
            "apt": "5K",
            "start_date": "2022-11-18T00:00:00+00:00",
            "time_slot": "Morning",
            "created_on": "2022-11-11T00:00:00+00:00",
            "cleaner": "Pema",
            "id": "63a1e45f595a13d6c6dcd123"
            }
        response.update(member)
        return response


def test_get_members():
    app.dependency_overrides[MemberQueries] = MemberQueriesMock

    response = client.get('/api/members')

    assert response.status_code == 200
    assert response.json() == {"members": []}

    app.dependency_overrides = {}


def test_create_member():
    app.dependency_overrides[MemberQueries] = MemberQueriesMock
    member = {
            "membership": "Just Keep",
            "bedrooms": 2,
            "bathrooms": 2,
            "pets": 0,
            "humans": 2,
            "email": "test1@test.com",
            "phone": "123-456-7890",
            "full_name": "Test Name",
            "address": "Test Address",
            "apt": "5K",
            "start_date": "2022-11-18T00:00:00+00:00",
            "time_slot": "Morning",
            "created_on": "2022-11-11T00:00:00+00:00",
            "cleaner": "Pema",
        }

    response = client.post('/api/members', json.dumps(member))

    assert response.status_code == 200
    assert response.json()['full_name'] == 'Test Name'
