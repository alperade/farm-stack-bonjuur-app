## 12/6/22
- working on unit tests and proper structure for each test

## 12/5/22
- reviewed deployment and discussed organization of branches for project submission
- hide "add" buttons on home page if not logged in
- fixed date on itinerary detail page

## 12/2/22
- apply to adjust date display on main page to proper format of mm/dd/yyyy
- implemented filter of itineraries on create event page
- able to implement filter of itineraries on itinerary detail page

## 12/1/22
- working on buttons on list pages to redirect to proper urls

## 11/30/22
- continue to work on detail page

## 11/29/22
- working on filtering events to display on detail itinerary page

## 11/28/22
- worked on implementing Redux with forms and lists
- began working on itinerary display on front end, lists and detail pages

## 11/23/22
- working on login and authentication on front_end
- will look to add link to Yelp from name of event and/or picture
- created separate branch front_end_auth to track current work
- sign up and log in modals not populating on page

## 11/22/22
- worked on updating main page
- created event form for events and attractions
- added rating and address to search results
- merged development branch with front_end

## 11/21/22
- reviewed changes with SearchEvent form to populate data from API call to Yelp
- back-end will work on updating account data for authorization and returning AccountID
- today front-end will work on forms and structure of layout and use React Bootstrap
- implemented card layout with tabs for search results with frontend team
- will begin work on itinerary list and separate containers for main page

## 11/17/22
- working on get request for single itinerary; receiving error message for id passing to query which was resolved with:
itinerary["id"] = str(itinerary["_id"])
return ItineraryOut(**itinerary)
- began work on frontend with researching and learning about React hooks, worked with team member on having a template main page rendering on localhost, successful with addition of reactor-router-dom to dependency, will continue to assess and modify to use React hooks methods

## 11/16/22
- worked on updating fomore_api file to Project Setup resource for MongoDB and FastAPI

## 11/15/22
- reviewed API paths to finalize routes for urls
- confirmed pulling events for itineraries from events vs itineraries endpoint
- began working with FastAPI and MongoDB as group
- confirmed Docker containers running for all group members with updated yaml file

## 11/14/22
- repo cloned and docker yaml file updated to create gamma volume
- Docker 2 containers running
- worked through initial commits and pushes to main with group, pull prior to git add .
- error for divergent branches fixed with git fetch, git merge and then pushing to main
- finalized using Yelp as primary API
