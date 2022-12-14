## 12/12/22
- Project complete, ready for presentation.

## 12/9/22
- Merged main and updated the code, getting ready for final deployment.
- Updates to code for code cleanliness.

## 12/8/22
- Minor changes to frontend code. Itineraries don't show events when logged out.
- Merged code between front_end and development branches.

## 12/7/22
- Worked on Readme file and update wireframe.
- Minor changes to frontend code to fix bugs.
- Ran lint tests.

## 12/6/22
- Cleaned up code and removed unused variables to pass Gitlab CI/CD pipeline tests.
- Worked on unit tests. Set up test_get_events (refer to test_events.py under fomore_api/tests)

## 12/5/22
- Registered account on Atlas website and set up a free Mongo database.
- Signed up to Render.com and worked on deploying Fast API on Render.com.

## 12/2/22
- Account slice and endpoints are complete. Signup, signin and signout are functional.
- Started reviewing deployment and CI/CD.

## 12/1/22
- Updated itinerary list component to re-render when events are added.
- Added tags to redux endpoints. Invalidate tags function is used for re-rendering components.
- Started working on login and signup modals.

## 11/30/22
- Completed endpoints for 'update' and 'delete' event.
- Updated search results page to display error messages.
- Updated directory, re-organized and renamed files

## 11/29/22
- Cleaned up code and fixed key errors on forms and endpoints.
- Started working on deleteEvent endpoint.
- Finished building out addEvent endpoint..

## 11/28/22
- Itineraries redux endpoints are functional.
- Started working on events redux endpoints.
- Set up a search bar reducer. Search bar input updates the store state.

## 11/23/22
- Started working on redux, created a store file.
- Worked on itinerary API redux endpoints.
- Updated navigation bar and added links to create itineraries.

## 11/22/22
- Updated event model and added address and rating fields.
- Created cards for search results and updated CSS styling.
- Added built in data for events and itineraries.

## 11/21/22
- Worked on authentication and account creation.
- Got familiar with jwtdown_fastapi library and did trouble shooting on logging in after creating an account.
- Front end started working on forms and page layout.

## 11/18/22
- Started working on the front end. Set up a temporary app.js and a searchevent component.
- Created a simple table on frontend to show restaurant results from Yelp.
- Set up three 'search' endpoints for Yelp API: restaurants, attractions and event.

## 11/17/22
- Worked on Event APIs: get, create, delete, update
- Updated routers and query files.
- Had team discussion about React components.
- Created a separate branch for frontend.

## 11/16/22
- Started working on itinerary API calls.
- Worked on get list of itineraries, create an itinerary and delete an itinerary.
- Updated Mongo dockerfile to include events and itinerary databases.

## 11/15/22
- Reviewed end points and updated paths.
- Utilized Trello for task management. Reviewed deliverables.
- Updated docker-compose file and fixed npm start & install error under React command.
- Added api-design.md to /docs.

## 11/14/22
- Updated the wireframe to add a page that shows list of itineraries.
- Decided on using Yelp Fusion API to get information on events, restaurants and points of interest.
- Tested code to get information on Yelp Events API.
- Worked on End Points documentation. Added end points.

## TO - DOs
- upgrade 'update event form': save event id to store global state (instead of choosing event from a dropdown)
- Dockercompose Yaml: move signing key and database login info to .env file.
- Deployment
- Unit test
