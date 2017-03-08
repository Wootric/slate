# Declines

## Decline Object

A decline object has the following fields:

Attribute | Type | Description
--------- | ------- | -----------
id | integer | The ID of decline
end_user_id | integer | The ID of end user
survey_id | integer | ID of the survey to which the decline belongs
ip_address | text | The decline's IP address
origin_url | text | The decline's origin url
created_at | datetime | Datetime representation of when the decline was created
updated_at | datetime | Datetime representation of when the decline was last updated
end_user.properties | hash | The end user properties at the moment the survey was taken

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
        "survey_id": 10,
        "ip_address": "127.0.0.1",
        "origin_url": "https://wootric.com",
        "created_at": "2016-12-16 14:20:43 -0800",
        "updated_at": "2016-12-16 14:20:43 -0800",
        "end_user": {
            "properties": {
                "persona": "Individual",
                "pricing_plan": "Small Business",
                "product_plan": "Mobile",
                "purchase_date": 1473177881,
                "revenue_amount": 5000
            }
        }
    },
    {
        "id": 2,
        "end_user_id": 2,
        "survey_id": 11,
        "ip_address": "127.0.0.1",
        "origin_url": "https://wootric.com",
        "created_at": "2016-12-16 14:21:10 -0800",
        "updated_at": "2016-12-16 14:21:10 -0800",
        "end_user": {
            "properties": {
                "persona": "Business User",
                "pricing_plan": "Small Business",
                "product_plan": "Mobile",
                "purchase_date": 1473177881,
                "revenue_amount": 5000
            }
        }
    }
]
```

This endpoint retrieves all declines for the user.

### HTTP Request

`GET https://api.wootric.com/v1/declines`

### Scope Parameters

Scope parameters filter your declines and can also be chained together by passing multiple scope parameters in an array.

Parameter | Type | Default | Description
--------- | ---- | ------- | -----------
page | integer | 1 | Number of returned page, max 30
per_page | integer | 25 | Number of records returned on each page, max 50
created | hash | {} | Filter your declines by time of creation (UNIX timestamp type) -  *eq*, *lt*, *lte*, *gt*, *gte* (`created[gt]=UNIX_TIMESTAMP     &created[lt]=UNIX_TIMESTAMP`)
sort_order (optional)| string | desc | Order in which records are shown. Default is newest first. Options are `asc` or `desc`

We recommend to iterate using `created` parameter if you need to get more data than what you get out of our pagination restriction.

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
        "survey_id": 10,
        "ip_address": "127.0.0.1",
        "origin_url": "https://wootric.com",
        "created_at": "2016-12-16 14:20:43 -0800",
        "updated_at": "2016-12-16 14:20:43 -0800",
        "end_user": {
            "properties": {
                "persona": "Individual",
                "pricing_plan": "Small Business",
                "product_plan": "Mobile",
                "purchase_date": 1473177881,
                "revenue_amount": 5000
            }
        }
    },
    {
        "id": 3,
        "end_user_id": 1,
        "survey_id": 12,
        "ip_address": "127.0.0.1",
        "origin_url": "https://wootric.com",
        "created_at": "2016-12-16 14:22:41 -0800",
        "updated_at": "2016-12-16 14:22:41 -0800",
        "end_user": {
            "properties": {
                "persona": "Individual",
                "pricing_plan": "Small Business",
                "product_plan": "Mobile",
                "purchase_date": 1473177881,
                "revenue_amount": 5000
            }
        }
    }
]
```

This endpoint retrieves all declines for end user.

### HTTP Request

`GET https://api.wootric.com/v1/end_users/1/declines`

### Scope Parameters

Scope parameters filter your declines and can also be chained together by passing multiple scope parameters in an array.

Parameter | Type | Default | Description
--------- | ---- | ------- | -----------
page | integer | 1 | Number of returned page, max 30
per_page | integer | 25 | Number of records returned on each page, max 50
created | hash | {} | Filter your declines by time of creation (UNIX timestamp type) -  *eq*, *lt*, *lte*, *gt*, *gte* (`created[gt]=UNIX_TIMESTAMP     &created[lt]=UNIX_TIMESTAMP`)
sort_order (optional)| string | desc | Order in which records are shown. Default is newest first. Options are `asc` or `desc`


## Get a Specific Decline

```shell
curl "https://api.wootric.com/v1/end_users/1/declines/1?access_token=myaccesstoken"

or

curl -H "Authorization: Bearer myaccesstoken" "https://api.wootric.com/v1/end_users/1/declines/1"
```

> The above command returns the following JSON:

```json
{
    "id": 1,
    "end_user_id": 1,
    "survey_id": 10,
    "ip_address": "127.0.0.1",
    "origin_url": "https://wootric.com",
    "created_at": "2016-12-16 14:20:43 -0800",
    "updated_at": "2016-12-16 14:20:43 -0800",
    "end_user": {
        "properties": {
            "persona": "Individual",
            "pricing_plan": "Small Business",
            "product_plan": "Mobile",
            "purchase_date": 1473177881,
            "revenue_amount": 5000
        }
    }
}
```

This endpoint retrieves a specific decline.

### HTTP Request

`GET https://api.wootric.com/v1/end_users/<end_user_id>/declines/<id>`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
end_user_id | integer | The ID of the end user
id | integer | The ID of the decline to retrieve

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

Parameter | Type | Description
--------- | ---- | -----------
end_user_id | integer | The ID of the end user
origin_url (optional) | string | URL of the decline origin
created_at (optional) | integer (UNIX timestamp) |  If present, will set 'created_at' of newly created decline to provided value
end_user.properties (optional) | hash | An object containing the current properties for this end user. If supplied, the end user profile will be updated and the new properties will be associated to this decline.

## Update Decline

```shell
curl -X PUT "https://api.wootric.com/v1/declines/1?access_token=myaccesstoken" -d "end_user[properties][persona]=Individual"

or

curl -X PUT -H "Authorization: Bearer myaccesstoken" "https://api.wootric.com/v1/declines/1" -d "end_user[properties][persona]=Individual"
```

> The above command returns and empty response with status 204.

This endpoint updates an existing decline.

### HTTP Request

`PUT https://api.wootric.com/v1/responses/<id>`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
id | integer | The ID of the response to update
end_user.properties (optional) | hash | An object containing the new set of properties for this decline. This will only update the properties that the end user had at this point in time. The current end user properties won't be updated. Since this feature allows to edit historical data, it's not enabled by default. Please contact us to enable it. A 423 error will be returned when attempting to use this feature if it's not enabled.

## Delete Decline

```shell
curl -X DELETE "https://api.wootric.com/v1/end_users/1/declines/1?access_token=myaccesstoken"

or

curl -X DELETE -H "Authorization: Bearer myaccesstoken" "https://api.wootric.com/v1/end_users/1/declines/1"
```

> The above command returns and empty response with status 204.

This endpoint deletes a decline for the end user.

### HTTP Request

`DELETE https://api.wootric.com/v1/end_users/<end_user_id>/declines/<decline_id>`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
end_user_id | integer | The ID of the end user
decline_id | integer | The ID of the decline to delete
