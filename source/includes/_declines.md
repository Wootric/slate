# Declines

## Decline Object

A decline object has the following fields:

Attribute | Type | Description
--------- | ------- | -----------
id | integer | The ID of decline
end_user_id | integer | The ID of end user
created_at | datetime | Datetime representation of when the decline was created
updated_at | datetime | Datetime representation of when the decline was last updated
survey_id | integer | ID of the survey to which the decline belongs

## Get All Declines

```shell
curl "https://api.wootric.com/v1/declines?access_token=myaccesstoken"

or

curl -H "Authorization: Bearer myaccesstoken" "https://api.wootric.com/v1/declines"
```

> The above command returns the following JSON:

```json
[
  {
    "id": 1,
    "end_user_id": 1,
    "created_at":  "2014-11-01 17:38:50",
    "updated_at":  "2014-11-01 17:38:50",
    "user_id": 1,
    "survey_id": 1
  },
  {
    "id": 2,
    "end_user_id": 2,
    "created_at":  "2014-11-01 17:38:50",
    "updated_at":  "2014-11-01 17:38:50",
    "user_id": 1,
    "survey_id": 2
  }
]
```

This endpoint retrieves all declines for the user.

### HTTP Request

`GET https://api.wootric.com/v1/declines`

### Scope Parameters

Scope parameters filter your declines and can also be chained together by passing multiple scope parameters in an array.

Parameter | Type | Default | Description
--------- | ------- | ------- | -----
page | integer | 1 | Number of returned page
per_page | integer | 25 | Number of records returned on each page
created | hash | {} | Filter your declines by time of creation (UNIX timestamp type) -  *eq*, *lt*, *lte*, *gt*, *gte* (`created[gt]=UNIX_TIMESTAMP     &created[lt]=UNIX_TIMESTAMP`)

## Get All End User's Declines

```shell
curl "https://api.wootric.com/v1/end_users/1/declines?access_token=myaccesstoken"

or

curl -H "Authorization: Bearer myaccesstoken" "https://api.wootric.com/v1/end_users/1/declines"
```

> The above command returns the following JSON:

```json
[
  {
    "id": 1,
    "end_user_id": 1,
    "created_at" : "2014-12-01 18:36:59",
    "updated_at" : "2014-12-01 18:36:59",
    "user_id": 16,
    "survey_id": 1
  },
  {
    "id": 2,
    "end_user_id": 1,
    "created_at" : "2014-07-25 14:09:41",
    "updated_at" : "2014-07-25 14:09:41",
    "user_id": 16,
    "survey_id": 1
  }
]
```

This endpoint retrieves all declines for end user.

### HTTP Request

`GET https://api.wootric.com/v1/end_users/1/declines`

### Scope Parameters

Scope parameters filter your declines and can also be chained together by passing multiple scope parameters in an array.

Parameter | Type | Default | Description
--------- | ------- | ------- | -----
page | integer | 1 | Number of returned page
per_page | integer | 25 | Number of records returned on each page
created | hash | {} | Filter your declines by time of creation (UNIX timestamp type) -  *eq*, *lt*, *lte*, *gt*, *gte* (`created[gt]=UNIX_TIMESTAMP     &created[lt]=UNIX_TIMESTAMP`)


## Get a Specific Decline

```shell
curl "https://api.wootric.com/v1/end_users/1/declines/2?access_token=myaccesstoken"

or

curl -H "Authorization: Bearer myaccesstoken" "https://api.wootric.com/v1/end_users/1/declines/2"
```

> The above command returns the following JSON:

```json
  {
    "id": 2,
    "end_user_id": 1,
    "created_at" : "2014-07-25 14:09:41",
    "updated_at" : "2014-07-25 14:09:41",
    "user_id": 16,
    "survey_id": 1,
    "ip_address": "1.1.1.1",
    "origin_url": "http://example.com"
  }
```

This endpoint retrieves a specific decline.

### HTTP Request

`GET https://api.wootric.com/v1/end_users/<end_user_id>/declines/<id>`

### URL Parameters

Parameter | Description
--------- | -----------
end_user_id | The ID of the end user
id | The ID of the decline to retrieve

## Create Decline

```shell
curl -X POST "https://api.wootric.com/v1/end_users/1/declines?access_token=myaccesstoken"

or

curl -X POST -H "Authorization: Bearer myaccesstoken" "https://api.wootric.com/v1/end_users/1/declines"
```

This endpoint creates a decline for the end user.

### HTTP Request

`POST https://api.wootric.com/v1/end_users/<end_user_id>/declines`

### URL Parameters

Parameter | Description
--------- | -----------
end_user_id | The ID of the end user
created_at (optional) | UNIX timestamp, if present, will set 'created_at' of newly created decline to provided value
origin_url (optional) | URL of the decline origin

## Delete Decline

```shell
curl -X DELETE "https://api.wootric.com/v1/end_users/1/declines/1?access_token=myaccesstoken"

or

curl -X DELETE -H "Authorization: Bearer myaccesstoken" "https://api.wootric.com/v1/end_users/1/declines/1"
```

> The above command returns the following JSON:

```json
  {
    "id": 1,
    "end_user_id": 1,
    "created_at" : "2015-02-13T01:44:51.578-08:00",
    "updated_at" : "2015-02-13T01:44:51.578-08:00",
    "user_id": 1
  }
```

This endpoint deletes a decline for the end user.

### HTTP Request

`DELETE https://api.wootric.com/v1/end_users/<end_user_id>/declines/<decline_id>`

### URL Parameters

Parameter | Description
--------- | -----------
end_user_id | The ID of the end user
decline_id | The ID of the decline to delete
