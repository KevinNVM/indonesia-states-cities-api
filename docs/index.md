# Indonesia States and Cities API

Documentation provided by [https://docsify.js.org/](https://docsify.js.org/)

API Documentation

-----------------

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

#### Example

```js
(async () => {

    const response = await fetch('.../states?search=');
    const data = await response.json();
    console.log(data);

})()

// Output :
{
    "route": "/states",
    "count": 34,
    "data": [
        {
            "id",
            "name",
            "state_code",
            "latitude",
            "longitude",
            "type"
        },
        ...
    ]
}
```

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

#### Example

```js
(async () => {

    const response = await fetch('.../states/:id');
    const data = await response.json();
    console.log(data);

})()

// Output :
{
    "route": "/states/:id",
    "data": {
        "id",
        "name",
        "state_code",
        "latitude",
        "longitude",
        "type"
    }
}
```

### `GET /cities`

Get a list of cities.

#### Query Parameters

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| state | number\|string | no | Search cities by `stateCode` or `stateId` |
| search | string | no | Search string to filter by name |
| limit | number | no | Maximum number of results |

#### Response

* `route` - string: The route of the endpoint.

* `message` - string: Message in case of error.

* `count` - number: Total number of cities returned.

* `data` - array of objects: List of cities.

#### Example

```js
(async () => {

    const response = await fetch('.../cities?search=&limit=&state=');
    const data = await response.json();
    console.log(data);

})()

// Output :
{
    "route": "/cities",
    "count": 50,
    "data": [
        {
            "id",
            "name",
            "latitude",
            "longitude",
            "stateCode",
            "stateId"
        },
        ...
    ]
}
```

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

#### Example

```js
(async () => {

    const response = await fetch('.../cities/:id');
    const data = await response.json();
    console.log(data);

})()

// Output :
{
    "route": "/cities/:id",
    "data": {
        "id",
        "name",
        "latitude",
        "longitude",
        "stateCode",
        "stateId"
    }
}
```
