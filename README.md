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
- Add name and apt number to model
- More than 3 bedrooms page
- Based on room count input, we recommend keep + page
