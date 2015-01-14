# Declines

## Decline Object

A decline object has the following fields:

Attribute | Type | Description
--------- | ------- | -----------
id | integer | The id of decline
end_user_id | integer | The id of end user
created_at | datetime | Datetime representation of when the decline was created
updated_at | datetime | Datetime representation of when the decline was lately updated
user_id | integer | The id of user

## Get All Declines

```shell
curl "https://api.wootric.com/v1/end_users/1/declines?access_token=myaccesstoken"
```

> The above command returns JSON structured like this:

```json
[
  {
    "id": 1,
    "end_user_id": 1,
    "created_at" : "2014-12-01 18:36:59",
    "updated_at" : "2014-12-01 18:36:59",
    "user_id": 16
  },
  {
    "id": 2,
    "end_user_id": 1,
    "created_at" : "2014-07-25 14:09:41",
    "updated_at" : "2014-07-25 14:09:41",
    "user_id": 16
  }
]
```

This endpoint retrieves all declines for end user.

### HTTP Request

`GET https://api.wootric.com/v1/end_users/1/declines?access_token=myaccesstoken`

### Scope Parameters

Scope paramaters filter your declines and can also be chained together by passing multiple scope paramters in an array.

Parameter | Type | Default | Description
--------- | ------- | ------- | -----
page | integer | 1 | Number of returned page
per_page | integer | 25 | Number of records returned on each page
created | hash | {} | Hash with properties used to filter your declines by time it can be used with params (UNIX timestamp type) -  *eq*, *lt*, *lte*, *gt*, *gte*

## Get a Specific Declines

```shell
curl "https://api.wootric.com/v1/end_users/1/declines/2?access_token=myaccesstoken"
```

> The above command returns JSON structured like this:

```json
  {
    "id": 2,
    "end_user_id": 1,
    "created_at" : "2014-07-25 14:09:41",
    "updated_at" : "2014-07-25 14:09:41",
    "user_id": 16
  }
```

This endpoint retrieves a specific decline.

### HTTP Request

`GET https://api.wootric.com/v1/end_users/<END_USER_ID>/declines/<ID>?access_token=myaccesstoken`

### URL Parameters

Parameter | Description
--------- | -----------
END_USER_ID | The ID of the end user
ID | The ID of the decline to retrieve