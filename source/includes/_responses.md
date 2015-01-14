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
curl "https://api.wootric.com/v1/end_users/1/responses?access_token=myaccesstoken"
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

`GET https://api.wootric.com/v1/end_users/1/responses?access_token=myaccesstoken`

### Scope Parameters

Scope paramaters filter your responses and can also be chained together by passing multiple scope paramters in an array.

Parameter | Type | Default | Description
--------- | ------- | ------- | -----
page | integer | 1 | Number of returned page
per_page | integer | 25 | Number of records returned on each page
created | hash | {} | Hash with properties used to filter your responses by time it can be used with params (UNIX timestamp type) -  *eq*, *lt*, *lte*, *gt*, *gte*

## Get All Promoters Responses

```shell
curl "https://api.wootric.com/v1/end_users/1/responses/promoters?access_token=myaccesstoken"
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

`GET https://api.wootric.com/v1/end_users/1/responses/promoters?access_token=myaccesstoken`

### Scope Parameters

Scope paramaters filter your promoters responses and can also be chained together by passing multiple scope paramters in an array.

Parameter | Type | Default | Description
--------- | ------- | ------- | -----
page | integer | 1 | Number of returned page
per_page | integer | 25 | Number of records returned on each page
created | hash | {} | Hash with properties used to filter your promoters responses by time it can be used with params (UNIX timestamp type) -  *eq*, *lt*, *lte*, *gt*, *gte*

## Get All Passives Responses

```shell
curl "https://api.wootric.com/v1/end_users/1/responses/passives?access_token=myaccesstoken"
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

`GET https://api.wootric.com/v1/end_users/1/responses/passives?access_token=myaccesstoken`

### Scope Parameters

Scope paramaters filter your passives responses and can also be chained together by passing multiple scope paramters in an array.

Parameter | Type | Default | Description
--------- | ------- | ------- | -----
page | integer | 1 | Number of returned page
per_page | integer | 25 | Number of records returned on each page
created | hash | {} | Hash with properties used to filter your passives responses by time it can be used with params (UNIX timestamp type) -  *eq*, *lt*, *lte*, *gt*, *gte*

## Get All Detractors Responses

```shell
curl "https://api.wootric.com/v1/end_users/1/responses/detractors?access_token=myaccesstoken"
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

`GET https://api.wootric.com/v1/end_users/1/responses/detractors?access_token=myaccesstoken`

### Scope Parameters

Scope paramaters filter your detractors responses and can also be chained together by passing multiple scope paramters in an array.

Parameter | Type | Default | Description
--------- | ------- | ------- | -----
page | integer | 1 | Number of returned page
per_page | integer | 25 | Number of records returned on each page
created | hash | {} | Hash with properties used to filter your detractors responses by time it can be used with params (UNIX timestamp type) -  *eq*, *lt*, *lte*, *gt*, *gte*

## Get a Specific Response

```shell
curl "https://api.wootric.com/v1/end_users/1/responses/2?access_token=myaccesstoken"
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

`GET https://api.wootric.com/v1/end_users/<END_USER_ID>/responses/<ID>?access_token=myaccesstoken`

### URL Parameters

Parameter | Description
--------- | -----------
END_USER_ID | The ID of the end user
ID | The ID of the decline to retrieve