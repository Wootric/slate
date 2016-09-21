# Responses

## Response Object

A response object has the following fields:

Attribute | Type | Description
--------- | ------- | -----------
id | integer | The ID of response
created_at | datetime | Datetime representation of when the response was created
updated_at | datetime | Datetime representation of when the response was last updated
score | integer | The response's score
text | text | The response's comment
ip_address | text | The response's IP address
origin_url | text | The response's origin url
end_user_id | integer | The ID of end user
survey_id | integer | ID of the survey to which the response belongs
completed | boolean | Specifies if a response has been completed
excluded_from_calculations | boolean | Specifies if a response should be excluded from calculations
tags | string array | The responses's tags

## Get All Responses

```shell
curl "https://api.wootric.com/v1/responses?access_token=myaccesstoken"

or

curl -H "Authorization: Bearer myaccesstoken" "https://api.wootric.com/v1/responses"
```

> The above command returns the following JSON:

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

`GET https://api.wootric.com/v1/responses`

### Scope Parameters

Scope parameters filter your responses and can also be chained together by passing multiple scope parameters in an array.

Parameter | Type | Default | Description
--------- | ------- | ------- | -----
page (optional)| integer | 1 | Number of returned page, max 30
per_page (optional) | integer | 25 | Number of records returned on each page, max 50
created | hash | {} | Filter your responses by time of creation (UNIX timestamp type) -  *eq*, *lt*, *lte*, *gt*, *gte* (`created[gt]=UNIX_TIMESTAMP     &created[lt]=UNIX_TIMESTAMP`)
sort_order (optional)| string | asc | Order in which records are shown. Default is oldest first. Options are `asc` or `desc`

We recommend to iterate using `created` parameter if you need to get more data than what you get out of our pagination restriction.

## Get All End User's Responses

```shell
curl "https://api.wootric.com/v1/end_users/1/responses?access_token=myaccesstoken"

or

curl -H "Authorization: Bearer myaccesstoken" "https://api.wootric.com/v1/end_users/1/responses"
```

> The above command returns the following JSON:

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

`GET https://api.wootric.com/v1/end_users/1/responses`

### Scope Parameters

Scope parameters filter your responses and can also be chained together by passing multiple scope parameters in an array.

Parameter | Type | Default | Description
--------- | ------- | ------- | -----
page | integer | 1 | Number of returned page, max 30
per_page | integer | 25 | Number of records returned on each page, max 50
created | hash | {} | Filter your responses by time of creation (UNIX timestamp type) -  *eq*, *lt*, *lte*, *gt*, *gte* (`created[gt]=UNIX_TIMESTAMP     &created[lt]=UNIX_TIMESTAMP`)

We recommend to iterate using `created` parameter if you need to get more data than what you get out of our pagination restriction.


## Get All Promoters Responses

```shell
curl "https://api.wootric.com/v1/end_users/1/responses/promoters?access_token=myaccesstoken"

or

curl -H "Authorization: Bearer myaccesstoken" "https://api.wootric.com/v1/end_users/1/responses/promoters"
```

> The above command returns the following JSON:

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

`GET https://api.wootric.com/v1/end_users/1/responses/promoters`

### Scope Parameters

Scope parameters filter your promoters responses and can also be chained together by passing multiple scope parameters in an array.

Parameter | Type | Default | Description
--------- | ------- | ------- | -----
page | integer | 1 | Number of returned page, max 30
per_page | integer | 25 | Number of records returned on each page, max 50
created | hash | {} | Filter your responses by time of creation (UNIX timestamp type) -  *eq*, *lt*, *lte*, *gt*, *gte* (`created[gt]=UNIX_TIMESTAMP     &created[lt]=UNIX_TIMESTAMP`)


## Get All Passives Responses

```shell
curl "https://api.wootric.com/v1/end_users/1/responses/passives?access_token=myaccesstoken"

or

curl -H "Authorization: Bearer myaccesstoken" "https://api.wootric.com/v1/end_users/1/responses/passives"
```

> The above command returns the following JSON:

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

`GET https://api.wootric.com/v1/end_users/1/responses/passives`

### Scope Parameters

Scope parameters filter your passives responses and can also be chained together by passing multiple scope parameters in an array.

Parameter | Type | Default | Description
--------- | ------- | ------- | -----
page | integer | 1 | Number of returned page, max 30
per_page | integer | 25 | Number of records returned on each page, max 50
created | hash | {} | Filter your responses by time of creation (UNIX timestamp type) -  *eq*, *lt*, *lte*, *gt*, *gte* (`created[gt]=UNIX_TIMESTAMP     &created[lt]=UNIX_TIMESTAMP`)


## Get All Detractors Responses

```shell
curl "https://api.wootric.com/v1/end_users/1/responses/detractors?access_token=myaccesstoken"

or

curl -H "Authorization: Bearer myaccesstoken" "https://api.wootric.com/v1/end_users/1/responses/detractors"
```

> The above command returns the following JSON:

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

`GET https://api.wootric.com/v1/end_users/1/responses/detractors`

### Scope Parameters

Scope parameters filter your detractors responses and can also be chained together by passing multiple scope parameters in an array.

Parameter | Type | Default | Description
--------- | ------- | ------- | -----
page | integer | 1 | Number of returned page, max 30
per_page | integer | 25 | Number of records returned on each page, max 50
created | hash | {} | Filter your responses by time of creation (UNIX timestamp type) -  *eq*, *lt*, *lte*, *gt*, *gte* (`created[gt]=UNIX_TIMESTAMP     &created[lt]=UNIX_TIMESTAMP`)


## Get a Specific Response

```shell
curl "https://api.wootric.com/v1/end_users/1/responses/2?access_token=myaccesstoken"

or

curl -H "Authorization: Bearer myaccesstoken" "https://api.wootric.com/v1/end_users/1/responses/2"
```

> The above command returns the following JSON:

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

`GET https://api.wootric.com/v1/end_users/<end_user_id>/responses/<id>`

### URL Parameters

Parameter | Description
--------- | -----------
end_user_id | The ID of the end user
id | The ID of the decline to retrieve

## Create Response

```shell
curl -X POST "https://api.wootric.com/v1/end_users/1/responses?access_token=myaccesstoken" -d "score=5&text=test response&ip_address=192.168.0.1&origin_url=http://example.com"

or

curl -X POST -H "Authorization: Bearer myaccesstoken" "https://api.wootric.com/v1/end_users/1/responses" -d "score=5&text=test response&ip_address=192.168.0.1&origin_url=http://example.com"
```

This endpoint creates a response for the end user.

### HTTP Request

`POST https://api.wootric.com/v1/end_users/<end_user_id>/responses`

### URL Parameters

Parameter | Description
--------- | -----------
end_user_id | The ID of the end user
score | The end user response score (values from 0 to 10)
ip_address | IP address the response originated from
origin_url | URL the response originated from
text (optional) | The end user comment to the response
created_at (optional) | UNIX timestamp, if present, will set 'created_at' of newly created decline to provided value

## Delete Response

```shell
curl -X DELETE "https://api.wootric.com/v1/end_users/1/responses/1?access_token=myaccesstoken"

or

curl -X DELETE -H "Authorization: Bearer myaccesstoken" "https://api.wootric.com/v1/end_users/1/responses/1"
```

> The above command returns the following JSON:

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

This endpoint deletes an end user response.

### HTTP Request

`DELETE https://api.wootric.com/v1/end_users/<end_user_id>/responses/<response_id>`

### URL Parameters

Parameter | Description
--------- | -----------
end_user_id | The ID of the end user
response_id | The ID of the response to delete
