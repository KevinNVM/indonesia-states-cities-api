# Indonesia States and Cities API

API Documentation

-----------------

Overview
--------

This project is a \[API for retrieving list of states and cities of indonesia\].

The API is currently is hosted at free hosting, However you can [selfhost it](https://github.com/KevinNVM/indonesia-states-cities-api#installation).

- https://states-and-cities-of-indonesia.cyclic.app/ (Up)
- https://indonesia-states-cities-api.up.railway.app/ (Up)

### `GET /states`

Get a list of states.

#### Query Parameters

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| search | string | no | Search string to filter by name |
| limit | number | no | Maximum number of results |

#### Response

* `route` - string: The route of the endpoint.

* `message` - string: Message in case of error.

* `count` - number: Total number of states returned.

* `data` - array of objects: List of states.

### `GET /country`

Get country details.

#### Response

* `route` - string: The route of the endpoint.

* `data` - array of objects: List of countries.

### `GET /states/:id`

Get a specific state by id.

#### Parameters

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| id | number | yes | The ID of the state to get |

#### Response

* `route` - string: The route of the endpoint.

* `data` - object: The state object.

* `message` - string: Message in case of error.

### `GET /cities`

Get a list of cities.

#### Query Parameters

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| search | string | no | Search string to filter by name |
| limit | number | no | Maximum number of results |

#### Response

* `route` - string: The route of the endpoint.

* `message` - string: Message in case of error.

* `count` - number: Total number of cities returned.

* `data` - array of objects: List of cities.

### `GET /cities/:id`

Get a specific city by id.

#### Parameters

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| id | number | yes | The ID of the city to get |

#### Response

* `route` - string: The route of the endpoint.

* `data` - object: The city object.

* `message` - string: Message in case of error.
