# Responses

## Response Object

A response object has the following fields:

Attribute | Type | Description
--------- | ------- | -----------
id | integer | The id of response
created_at | datetime | Datetime representation of when the response was created
updated_at | datetime | Datetime representation of when the response was lately updated
score | integer | The response's score
text | text | The response's comment
ip_address | text | The response's IP address
origin_url | text | The response's origin url
end_user_id | integer | The id of end user
user_id | integer | The if of user

## Get All Responses

```shell
curl "http://api.staging.wootric.com/v1/responses?access_token=myaccesstoken"

or

curl -H "Authorization: Bearer myaccesstoken" "http://api.staging.wootric.com/v1/responses"
```

> The above command returns JSON structured like this:

```json
[
  {
    "id": 1,
    "created_at" : "2014-12-01 18:36:59",
    "updated_at" : "2014-12-01 18:36:59",
    "score": 10,
    "text": "Great Service",
    "ip_address": "192.168.0.1",
    "origin_url" : "http://www.great-service.com",
    "end_user_id": 1,
    "user_id": 16
  },
  {
    "id": 2,
    "created_at" : "2014-11-01 17:38:50",
    "updated_at" : "2014-11-01 17:38:50",
    "score": 0,
    "text": "Please fix those bugs",
    "ip_address": "127.0.0.1",
    "origin_url" : "http://www.fix-bugs.com",
    "end_user_id": 2,
    "user_id": 16
  }
]
```

This endpoint retrieves all responses for a user.

### HTTP Request

`GET http://api.staging.wootric.com/v1/end_users/1/responses`

### Scope Parameters

Scope parameters filter your responses and can also be chained together by passing multiple scope parameters in an array.

Parameter | Type | Default | Description
--------- | ------- | ------- | -----
page | integer | 1 | Number of returned page
per_page | integer | 25 | Number of records returned on each page
created | hash | {} | Hash with properties used to filter your responses by time it can be used with params (UNIX timestamp type) -  *eq*, *lt*, *lte*, *gt*, *gte*

## Get All End User's Responses

```shell
curl "http://api.staging.wootric.com/v1/end_users/1/responses?access_token=myaccesstoken"

or

curl -H "Authorization: Bearer myaccesstoken" "http://api.staging.wootric.com/v1/end_users/1/responses"
```

> The above command returns JSON structured like this:

```json
[
  {
    "id": 1,
    "created_at" : "2014-12-01 18:36:59",
    "updated_at" : "2014-12-01 18:36:59",
    "score": 10,
    "text": "Great Service",
    "ip_address": "192.168.0.1",
    "origin_url" : "http://www.great-service.com",
    "end_user_id": 1,
    "user_id": 16
  },
  {
    "id": 2,
    "created_at" : "2014-11-01 17:38:50",
    "updated_at" : "2014-11-01 17:38:50",
    "score": 0,
    "text": "Please fix those bugs",
    "ip_address": "127.0.0.1",
    "origin_url" : "http://www.fix-bugs.com",
    "end_user_id": 1,
    "user_id": 16
  }
]
```

This endpoint retrieves all responses for end user.

### HTTP Request

`GET http://api.staging.wootric.com/v1/end_users/1/responses`

### Scope Parameters

Scope parameters filter your responses and can also be chained together by passing multiple scope parameters in an array.

Parameter | Type | Default | Description
--------- | ------- | ------- | -----
page | integer | 1 | Number of returned page
per_page | integer | 25 | Number of records returned on each page
created | hash | {} | Hash with properties used to filter your responses by time it can be used with params (UNIX timestamp type) -  *eq*, *lt*, *lte*, *gt*, *gte*

## Get All Promoters Responses

```shell
curl "http://api.staging.wootric.com/v1/end_users/1/responses/promoters?access_token=myaccesstoken"

or

curl -H "Authorization: Bearer myaccesstoken" "http://api.staging.wootric.com/v1/end_users/1/responses/promoters"
```

> The above command returns JSON structured like this:

```json
[
  {
    "id": 1,
    "created_at" : "2014-12-01 18:36:59",
    "updated_at" : "2014-12-01 18:36:59",
    "score": 10,
    "text": "Great Service",
    "ip_address": "192.168.0.1",
    "origin_url" : "http://www.great-service.com",
    "end_user_id": 1,
    "user_id": 16
  },
  {
    "id": 3,
    "created_at" : "2014-11-01 17:38:50",
    "updated_at" : "2014-11-01 17:38:50",
    "score": 9,
    "text": "Nice app",
    "ip_address": "127.0.0.1",
    "origin_url" : "http://www.nice-app.com",
    "end_user_id": 1,
    "user_id": 16
  }
]
```

This endpoint retrieves all promoters responses for end user.

### HTTP Request

`GET http://api.staging.wootric.com/v1/end_users/1/responses/promoters`

### Scope Parameters

Scope parameters filter your promoters responses and can also be chained together by passing multiple scope parameters in an array.

Parameter | Type | Default | Description
--------- | ------- | ------- | -----
page | integer | 1 | Number of returned page
per_page | integer | 25 | Number of records returned on each page
created | hash | {} | Hash with properties used to filter your promoters responses by time it can be used with params (UNIX timestamp type) -  *eq*, *lt*, *lte*, *gt*, *gte*

## Get All Passives Responses

```shell
curl "http://api.staging.wootric.com/v1/end_users/1/responses/passives?access_token=myaccesstoken"

or

curl -H "Authorization: Bearer myaccesstoken" "http://api.staging.wootric.com/v1/end_users/1/responses/passives"
```

> The above command returns JSON structured like this:

```json
[
  {
    "id": 21,
    "created_at" : "2014-12-01 18:36:59",
    "updated_at" : "2014-12-01 18:36:59",
    "score": 8,
    "text": "Cool Site",
    "ip_address": "192.168.0.1",
    "origin_url" : "http://www.cool-site.com",
    "end_user_id": 1,
    "user_id": 16
  },
  {
    "id": 23,
    "created_at" : "2014-11-01 17:38:50",
    "updated_at" : "2014-11-01 17:38:50",
    "score": 7,
    "text": "Good Service",
    "ip_address": "127.0.0.1",
    "origin_url" : "http://www.good-service.com",
    "end_user_id": 1,
    "user_id": 16
  }
]
```

This endpoint retrieves all passives responses for end user.

### HTTP Request

`GET http://api.staging.wootric.com/v1/end_users/1/responses/passives`

### Scope Parameters

Scope parameters filter your passives responses and can also be chained together by passing multiple scope parameters in an array.

Parameter | Type | Default | Description
--------- | ------- | ------- | -----
page | integer | 1 | Number of returned page
per_page | integer | 25 | Number of records returned on each page
created | hash | {} | Hash with properties used to filter your passives responses by time it can be used with params (UNIX timestamp type) -  *eq*, *lt*, *lte*, *gt*, *gte*

## Get All Detractors Responses

```shell
curl "http://api.staging.wootric.com/v1/end_users/1/responses/detractors?access_token=myaccesstoken"

or

curl -H "Authorization: Bearer myaccesstoken" "http://api.staging.wootric.com/v1/end_users/1/responses/detractors"
```

> The above command returns JSON structured like this:

```json
[
  {
    "id": 101,
    "created_at" : "2014-12-01 18:36:59",
    "updated_at" : "2014-12-01 18:36:59",
    "score": 3,
    "text": "It doesn't work",
    "ip_address": "192.168.0.1",
    "origin_url" : "http://www.doesnt-work.com",
    "end_user_id": 1,
    "user_id": 16
  },
  {
    "id": 2,
    "created_at" : "2014-11-01 17:38:50",
    "updated_at" : "2014-11-01 17:38:50",
    "score": 0,
    "text": "Please fix those bugs",
    "ip_address": "127.0.0.1",
    "origin_url" : "http://www.fix-bugs.com",
    "end_user_id": 1,
    "user_id": 16
  }
]
```

This endpoint retrieves all detractors responses for end user.

### HTTP Request

`GET http://api.staging.wootric.com/v1/end_users/1/responses/detractors`

### Scope Parameters

Scope parameters filter your detractors responses and can also be chained together by passing multiple scope parameters in an array.

Parameter | Type | Default | Description
--------- | ------- | ------- | -----
page | integer | 1 | Number of returned page
per_page | integer | 25 | Number of records returned on each page
created | hash | {} | Hash with properties used to filter your detractors responses by time it can be used with params (UNIX timestamp type) -  *eq*, *lt*, *lte*, *gt*, *gte*

## Get a Specific Response

```shell
curl "http://api.staging.wootric.com/v1/end_users/1/responses/2?access_token=myaccesstoken"

or

curl -H "Authorization: Bearer myaccesstoken" "http://api.staging.wootric.com/v1/end_users/1/responses/2"
```

> The above command returns JSON structured like this:

```json
{
  "id": 2,
  "created_at" : "2014-11-01 17:38:50",
  "updated_at" : "2014-11-01 17:38:50",
  "score": 0,
  "text": "Please fix those bugs",
  "ip_address": "127.0.0.1",
  "origin_url" : "http://www.fix-bugs.com",
  "end_user_id": 1,
  "user_id": 16
}
```

This endpoint retrieves a specific response.

### HTTP Request

`GET http://api.staging.wootric.com/v1/end_users/<END_USER_ID>/responses/<ID>`

### URL Parameters

Parameter | Description
--------- | -----------
END_USER_ID | The ID of the end user
ID | The ID of the decline to retrieve

## Create Response

```shell
curl -X POST "http://api.staging.wootric.com/v1/end_users/1/responses?access_token=myaccesstoken" -d "score=5;text=test response;ip_address=192.168.0.1;origin_url=http://example.com"

or

curl -X POST -H "Authorization: Bearer myaccesstoken" "http://api.staging.wootric.com/v1/end_users/1/responses" -d "score=5;text=test response;ip_address=192.168.0.1;origin_url=http://example.com"
```

This endpoint creates a response for the end user.

### HTTP Request

`POST http://api.staging.wootric.com/v1/end_users/<END_USER_ID>/responses`

### URL Parameters

Parameter | Description
--------- | -----------
END_USER_ID | The ID of the end user
SCORE | The end user response score (values from 0 to 10)
IP_ADDRESS | IP address the response originated from
ORIGIN_URL | URL the response originated from
text (optional) | The end user comment to the response

## Delete Response

```shell
curl -X DELETE "http://api.staging.wootric.com/v1/end_users/1/respones/1?access_token=myaccesstoken"

or

curl -X DELETE -H "Authorization: Bearer myaccesstoken" "http://api.staging.wootric.com/v1/end_users/1/respones/1"
```

> The above command returns JSON structured like this:

```json
  {
    "id": 1,
    "created_at" : "2015-02-12T06:29:27.000-08:00",
    "updated_at" : "2015-02-12T06:29:27.000-08:00",
    "score": 5,
    "text": "test response",
    "ip_address": "192.168.0.1",
    "origin_url": "http://example.com"
  }
```

This endpoint deletes a page view for the end user.

### HTTP Request

`DELETE http://api.staging.wootric.com/v1/end_users/<END_USER_ID>/respones/<RESPONSE_ID>`

### URL Parameters

Parameter | Description
--------- | -----------
END_USER_ID | The ID of the end user
RESPONSE_ID | The ID of the response to delete
