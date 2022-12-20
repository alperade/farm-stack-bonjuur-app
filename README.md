# Bonjuur App

RESTful web application for scheduling cleaning appointments.

## Getting started

- docker volume create bonjuur-mongo-data
- docker compose build
- docker bompose up

## Model

- membership: string (just keeping or keeping+)
- bedrooms: integer ( < 4 )
- bathrooms: integer ( < 3 )
- email
- phone_num
- address
- start_date
- time_slot (morning afternoon evening)
- is_active
- cleaner


## To-do
- Create a page for sign up for updates (if address is not serviced)
- Stop subscription page (turn is_active to false)
- Admin page (shows is active false and updated on date)
- Forgot password with email reset (https://www.geeksforgeeks.org/sending-email-using-fastapi-framework-in-python/)
- Update nav bar sign up modal (or remove)
