# Responses

## Response Object

A response object has the following fields:

Attribute | Type | Description
--------- | ---- | -----------
id | integer | The ID of response
end_user_id | integer | The ID of end user
survey_id | integer | ID of the survey to which the response belongs
score | integer | The response's score
text | text | The response's comment
completed | boolean | Specifies if a response has been completed
excluded_from_calculations | boolean | Specifies if a response should be excluded from calculations
ip_address | text | The response's IP address
origin_url | text | The response's origin url
created_at | datetime | Datetime representation of when the response was created
updated_at | datetime | Datetime representation of when the response was last updated
tags | string array | The responses's tags
end_user.properties | hash | The end user properties at the moment the survey was taken

## Get All Responses

```shell
curl -H "Authorization: Bearer myaccesstoken" "https://api.wootric.com/v1/responses"
```

> The above command returns the following JSON:

```json
[
    {
        "id": 1,
        "end_user_id": 1,
        "survey_id": 1,
        "score": 0,
        "text": "Better performance would mean a higher score. Site is often slow.",
        "completed": false,
        "excluded_from_calculations": false,
        "ip_address": "127.0.0.1",
        "origin_url": "https://wootric.com",
        "created_at": "2016-12-16 09:05:00 -0800",
        "updated_at": "2016-12-16 09:05:13 -0800",
        "tags": [
            "PERFORMANCE"
        ],
        "notes": [],
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
        "survey_id": 2,
        "score": 10,
        "text": "Great service.",
        "completed": false,
        "excluded_from_calculations": false,
        "ip_address": "127.0.0.1",
        "origin_url": "https://wootric.com",
        "created_at": "2017-12-16 09:10:43 -0800",
        "updated_at": "2017-12-16 09:11:00 -0800",
        "tags": [],
        "notes": [],
        "end_user": {
            "properties": {
                "persona": "Individual",
                "pricing_plan": "Small Business",
                "product_plan": "Web",
                "purchase_date": 1473177888,
                "revenue_amount": 5000
            }
        }
    }
]
```
```shell
TIMESTAMP=$(date --date="2016-12-25" "+%s")
curl -X GET -H "Authorization: Bearer myaccesstoken" "https://api.wootric.com/v1/responses" -d "created[lt]=$TIMESTAMP"
```

> The above command returns the following JSON:

```json
[
    {
        "id": 1,
        "end_user_id": 1,
        "survey_id": 1,
        "score": 0,
        "text": "Better performance would mean a higher score. Site is often slow.",
        "completed": false,
        "excluded_from_calculations": false,
        "ip_address": "127.0.0.1",
        "origin_url": "https://wootric.com",
        "created_at": "2016-12-16 09:05:00 -0800",
        "updated_at": "2016-12-16 09:05:13 -0800",
        "tags": [
            "PERFORMANCE"
        ],
        "notes": [],
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

This endpoint retrieves all responses for a user.

### HTTP Request

`GET https://api.wootric.com/v1/responses`

### Scope Parameters

Scope parameters filter your responses and can also be chained together by passing multiple scope parameters in an array.

Parameter | Type | Default | Description
--------- | ---- | ------- | -----------
page (optional)| integer | 1 | Number of returned page, max 30
per_page (optional) | integer | 25 | Number of records returned on each page, max 50
created | hash | {} | Filter your responses by time of creation (UNIX timestamp type) -  *eq*, *lt*, *lte*, *gt*, *gte* (`created[gt]=UNIX_TIMESTAMP     &created[lt]=UNIX_TIMESTAMP`)
sort_order (optional)| string | desc | Order in which records are shown. Default is newest first. Options are `asc` or `desc`

We recommend to iterate using `created` parameter if you need to get more data than what you get out of our pagination restriction.

## Get All End User's Responses

```shell
curl -H "Authorization: Bearer myaccesstoken" "https://api.wootric.com/v1/end_users/1/responses"
```

> The above command returns the following JSON:

```json
[
    {
        "id": 1,
        "end_user_id": 1,
        "survey_id": 1,
        "score": 0,
        "text": "Better performance would mean a higher score. Site is often slow.",
        "completed": false,
        "excluded_from_calculations": false,
        "ip_address": "127.0.0.1",
        "origin_url": "https://wootric.com",
        "created_at": "2016-12-16 09:05:00 -0800",
        "updated_at": "2016-12-16 09:05:13 -0800",
        "tags": [
            "PERFORMANCE"
        ],
        "notes": [],
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
        "survey_id": 3,
        "score": 5,
        "text": "Customer support STILL hasn't gotten back to me.",
        "completed": false,
        "excluded_from_calculations": false,
        "ip_address": "127.0.0.1",
        "origin_url": "https://wootric.com",
        "created_at": "2016-12-16 10:30:02 -0800",
        "updated_at": "2016-12-16 10:31:00 -0800",
        "tags": [
            "CALL"
        ],
        "notes": [],
        "end_user": {
            "properties": {
                "persona": "Individual",
                "pricing_plan": "Small Business",
                "product_plan": "Web",
                "purchase_date": 1473177888,
                "revenue_amount": 5000
            }
        }
    }
]
```

This endpoint retrieves all responses for end user.

### HTTP Request

`GET https://api.wootric.com/v1/end_users/1/responses`

### Scope Parameters

Scope parameters filter your responses and can also be chained together by passing multiple scope parameters in an array.

Parameter | Type | Default | Description
--------- | ---- | ------- | -----------
page | integer | 1 | Number of returned page, max 30
per_page | integer | 25 | Number of records returned on each page, max 50
created | hash | {} | Filter your responses by time of creation (UNIX timestamp type) -  *eq*, *lt*, *lte*, *gt*, *gte* (`created[gt]=UNIX_TIMESTAMP     &created[lt]=UNIX_TIMESTAMP`)
sort_order (optional)| string | desc | Order in which records are shown. Default is newest first. Options are `asc` or `desc`

We recommend to iterate using `created` parameter if you need to get more data than what you get out of our pagination restriction.

## Get All Promoters Responses

```shell
curl -H "Authorization: Bearer myaccesstoken" "https://api.wootric.com/v1/end_users/1/responses/promoters"
```

> The above command returns the following JSON:

```json
[
    {
        "id": 6,
        "end_user_id": 1,
        "survey_id": 6,
        "score": 9,
        "text": "Nice app.",
        "completed": false,
        "excluded_from_calculations": false,
        "ip_address": "127.0.0.1",
        "origin_url": "https://wootric.com",
        "created_at": "2016-12-16 13:05:01 -0800",
        "updated_at": "2016-12-16 13:06:11 -0800",
        "tags": [
            "UX"
        ],
        "notes": [],
        "end_user": {
            "properties": {
                "persona": "Business User",
                "pricing_plan": "Small Business",
                "product_plan": "Mobile",
                "purchase_date": 1473177881,
                "revenue_amount": 5000
            }
        }
    },
    {
        "id": 7,
        "end_user_id": 1,
        "survey_id": 7,
        "score": 10,
        "text": "Awesome service! The whole world should know about you guys.",
        "completed": false,
        "excluded_from_calculations": false,
        "ip_address": "127.0.0.1",
        "origin_url": "https://wootric.com",
        "created_at": "2016-12-16 14:20:22 -0800",
        "updated_at": "2016-12-16 14:21:10 -0800",
        "tags": [],
        "notes": [],
        "end_user": {
            "properties": {
                "persona": "Business User",
                "pricing_plan": "Small Business",
                "product_plan": "Web",
                "purchase_date": 1473177888,
                "revenue_amount": 5000
            }
        }
    }
]
```

This endpoint retrieves all promoters responses for end user.

### HTTP Request

`GET https://api.wootric.com/v1/end_users/1/responses/promoters`

### Scope Parameters

Scope parameters filter your promoters responses and can also be chained together by passing multiple scope parameters in an array.

Parameter | Type | Default | Description
--------- | ---- | ------- | -----------
page | integer | 1 | Number of returned page, max 30
per_page | integer | 25 | Number of records returned on each page, max 50
created | hash | {} | Filter your responses by time of creation (UNIX timestamp type) -  *eq*, *lt*, *lte*, *gt*, *gte* (`created[gt]=UNIX_TIMESTAMP     &created[lt]=UNIX_TIMESTAMP`)
sort_order (optional)| string | desc | Order in which records are shown. Default is newest first. Options are `asc` or `desc`

## Get All Passives Responses

```shell
curl -H "Authorization: Bearer myaccesstoken" "https://api.wootric.com/v1/end_users/1/responses/passives"
```

> The above command returns the following JSON:

```json
[
    {
        "id": 4,
        "end_user_id": 1,
        "survey_id": 4,
        "score": 7,
        "text": "Cool site.",
        "completed": false,
        "excluded_from_calculations": false,
        "ip_address": "127.0.0.1",
        "origin_url": "https://wootric.com",
        "created_at": "2016-12-16 11:05:01 -0800",
        "updated_at": "2016-12-16 11:05:13 -0800",
        "tags": [
            "UX"
        ],
        "notes": [],
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
        "id": 5,
        "end_user_id": 1,
        "survey_id": 5,
        "score": 8,
        "text": "Good service.",
        "completed": false,
        "excluded_from_calculations": false,
        "ip_address": "127.0.0.1",
        "origin_url": "https://wootric.com",
        "created_at": "2016-12-16 12:00:02 -0800",
        "updated_at": "2016-12-16 12:01:00 -0800",
        "tags": [],
        "notes": [],
        "end_user": {
            "properties": {
                "persona": "Business User",
                "pricing_plan": "Small Business",
                "product_plan": "Web",
                "purchase_date": 1473177888,
                "revenue_amount": 5000
            }
        }
    }
]
```

This endpoint retrieves all passives responses for end user.

### HTTP Request

`GET https://api.wootric.com/v1/end_users/1/responses/passives`

### Scope Parameters

Scope parameters filter your passives responses and can also be chained together by passing multiple scope parameters in an array.

Parameter | Type | Default | Description
--------- | ---- | ------- | -----------
page | integer | 1 | Number of returned page, max 30
per_page | integer | 25 | Number of records returned on each page, max 50
created | hash | {} | Filter your responses by time of creation (UNIX timestamp type) -  *eq*, *lt*, *lte*, *gt*, *gte* (`created[gt]=UNIX_TIMESTAMP     &created[lt]=UNIX_TIMESTAMP`)
sort_order (optional)| string | desc | Order in which records are shown. Default is newest first. Options are `asc` or `desc`


## Get All Detractors Responses

```shell
curl -H "Authorization: Bearer myaccesstoken" "https://api.wootric.com/v1/end_users/1/responses/detractors"
```

> The above command returns the following JSON:

```json
[
    {
        "id": 1,
        "end_user_id": 1,
        "survey_id": 1,
        "score": 0,
        "text": "Better performance would mean a higher score. Site is often slow.",
        "completed": false,
        "excluded_from_calculations": false,
        "ip_address": "127.0.0.1",
        "origin_url": "https://wootric.com",
        "created_at": "2016-12-16 09:05:00 -0800",
        "updated_at": "2016-12-16 09:05:13 -0800",
        "tags": [
            "PERFORMANCE"
        ],
        "notes": [],
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
        "survey_id": 3,
        "score": 5,
        "text": "Customer support STILL hasn't gotten back to me.",
        "completed": false,
        "excluded_from_calculations": false,
        "ip_address": "127.0.0.1",
        "origin_url": "https://wootric.com",
        "created_at": "2016-12-16 10:30:02 -0800",
        "updated_at": "2016-12-16 10:31:00 -0800",
        "tags": [
            "CALL"
        ],
        "notes": [],
        "end_user": {
            "properties": {
                "persona": "Individual",
                "pricing_plan": "Small Business",
                "product_plan": "Web",
                "purchase_date": 1473177888,
                "revenue_amount": 5000
            }
        }
    }
]
```

This endpoint retrieves all detractors responses for end user.

### HTTP Request

`GET https://api.wootric.com/v1/end_users/1/responses/detractors`

### Scope Parameters

Scope parameters filter your detractors responses and can also be chained together by passing multiple scope parameters in an array.

Parameter | Type | Default | Description
--------- | ---- | ------- | -----------
page | integer | 1 | Number of returned page, max 30
per_page | integer | 25 | Number of records returned on each page, max 50
created | hash | {} | Filter your responses by time of creation (UNIX timestamp type) -  *eq*, *lt*, *lte*, *gt*, *gte* (`created[gt]=UNIX_TIMESTAMP     &created[lt]=UNIX_TIMESTAMP`)
sort_order (optional)| string | desc | Order in which records are shown. Default is newest first. Options are `asc` or `desc`


## Get a Specific Response

```shell
curl -H "Authorization: Bearer myaccesstoken" "https://api.wootric.com/v1/end_users/2/responses/2"
```

> The above command returns the following JSON:

```json
{
    "id": 2,
    "end_user_id": 2,
    "survey_id": 2,
    "score": 10,
    "text": "Great service.",
    "completed": false,
    "excluded_from_calculations": false,
    "ip_address": "127.0.0.1",
    "origin_url": "https://wootric.com",
    "created_at": "2016-12-16 09:10:43 -0800",
    "updated_at": "2016-12-16 09:11:00 -0800",
    "tags": [],
    "notes": [],
    "end_user": {
        "properties": {
            "persona": "Individual",
            "pricing_plan": "Small Business",
            "product_plan": "Web",
            "purchase_date": 1473177888,
            "revenue_amount": 5000
        }
    }
}
```

This endpoint retrieves a specific response.

### HTTP Request

`GET https://api.wootric.com/v1/end_users/<end_user_id>/responses/<id>`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
end_user_id | integer | The ID of the end user
id | integer | The ID of the decline to retrieve

## Create Response

```shell
curl -X POST -H "Authorization: Bearer myaccesstoken" "https://api.wootric.com/v1/end_users/1/responses" -d "score=5&text=test response&ip_address=192.168.0.1&origin_url=http://example.com"
```

This endpoint creates a response for the end user.

### HTTP Request

`POST https://api.wootric.com/v1/end_users/<end_user_id>/responses`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
end_user_id | integer | The ID of the end user
score | integer | The end user response score (values from 0 to 10)
ip_address | text | IP address the response originated from
origin_url | text | URL the response originated from
text (optional) | text | The end user comment to the response
created_at (optional) | integer (UNIX timestamp) | If present, will set 'created_at' of newly created decline to provided value
end_user.properties (optional) | hash | An object containing the current properties for this end user. If supplied, the end user profile will be updated and the new properties will be associated to this response.

## Update Response

```shell
curl -X PUT -H "Authorization: Bearer myaccesstoken" "https://api.wootric.com/v1/responses/1" -d "completed=true&excluded_from_calculations=false"
```

> The above command returns and empty response with status 204.

This endpoint updates an existing response.

### HTTP Request

`PUT https://api.wootric.com/v1/responses/<id>`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
id | integer | The ID of the response to update
completed (optional) | boolean | Indicates if the response is complete
excluded_from_calculations (optional) | boolean | Indicates if the response is invalid
end_user.properties (optional) | hash | An object containing the new set of properties for this response. This will only update the properties that the end user had at this point in time. The current end user properties won't be updated. Since this feature allows to edit historical data, it's not enabled by default. Please contact us to enable it. A 423 error will be returned when attempting to use this feature if it's not enabled.

## Delete Response

```shell
curl -X DELETE -H "Authorization: Bearer myaccesstoken" "https://api.wootric.com/v1/end_users/1/responses/1"
```

> The above command returns and empty response with status 204.

This endpoint deletes an end user response.

### HTTP Request

`DELETE https://api.wootric.com/v1/end_users/<end_user_id>/responses/<response_id>`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
end_user_id | integer | The ID of the end user
response_id | integer | The ID of the response to delete
