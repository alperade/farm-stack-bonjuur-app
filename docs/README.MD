# FOMORE

- Alper Ademoglu
- Patrick Cerutti
- Cara Dobbertin
- Bryan Kleinberg
- Connor Swanson



## Design

- [API Design](https://gitlab.com/patcerutti23/module3-project-gamma/-/blob/front_end/docs/api-design.md)
- [Data Models](https://gitlab.com/patcerutti23/module3-project-gamma/-/blob/front_end/docs/data_model.md)
- [GHI](https://gitlab.com/patcerutti23/module3-project-gamma/-/blob/front_end/docs/ghi.md)
- 3rd party integrations from Yelp API

## Intended market

The FOMORE app is targeting people who are looking for events in a city they currently live in or are traveling to. The user can keep track of their events via their itineraries page and edit their trip by adding or deleting events, restaurants, or attractions in the surrounding area. 

## Functionality

- Initially, the user has access to search a city and filter by date to get events without being logged in 
- They can filter their search by using tabs that list general events, restaurants, and attractions. 
- To utilize their itineraries page the user must sign up or login
- Once the user is authorized:
    - They can create itineraries to plan a trip or experience
    - Events can be added to those itineraries
    - Update/Edit their itineraries
    - And create their own events

## Project Initialization
    1. Clone the repository down to your local machine
    2. CD into the new file you just cloned
    3. Open your docker application
    4. Run docker volume create fomore-mongo-data
    5. Run docker compose build
    6. Run docker compose up
    7. Go to localhost:3000 and enjoy the app!!



