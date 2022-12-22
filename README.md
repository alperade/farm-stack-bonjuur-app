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
- Deploy react on azure
- Forgot password with email reset (https://www.geeksforgeeks.org/sending-email-using-fastapi-framework-in-python/)
- Stop subscription page (turn is_active to false)

## Deployment Resources
- https://learn.microsoft.com/en-us/azure/app-service/tutorial-custom-container?tabs=azure-cli&pivots=container-linux
- docker requires you to specify a --platform=linux/amd64 each time you need to build or run an amd64 image/container.
- https://stackoverflow.com/questions/60163440/docker-fails-to-pull-the-image-from-within-azure-app-service
