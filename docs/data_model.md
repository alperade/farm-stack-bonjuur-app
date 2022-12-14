# Data Models

## FOMORE API Microservice

### Itinerary

| name | type | unique | optional |
|:-|:-|:-|:-|
| name | string | no | no |
| start_date | datetime | no | no |
| end_date | datetime | no | no |
| location | string | no | no |
|account_id| string | no | no |


### Events

| name | type | unique | optional |
|:-|:-|:-|:-|
| name | string | no | no |
| date | datetime | no | no |
| location | string | no | no |
| category | string | no | no |
| venue | string | no | yes |
| rating | string | no | yes |
| address | string | no | yes |
| description | string | no | no |
| itinerary_id | string | no | no |
| image_url | string | no | yes |
| url | string | no | yes |


### Accounts

| name | type | unique | optional |
|:-|:-|:-|:-|
| email | string | no | no |
| password | string | no | no |
| full_name | string | no | no |
