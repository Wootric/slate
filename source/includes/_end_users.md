# End Users

## End User Object

A end user object has the following fields:

Attribute | Type | Description
--------- | ------- | -----------
id | integer | The id of end user
created_at | datetime | Datetime representation of when the end user was created
updated_at | datetime | Datetime representation of when the end user was lately updated
email | string | End user email
last_surveyed | datetime | Datetime representation of when the end user was lately surveyed
external_created_at | integer |
user_id | integer | The id of user
page_views_count | integer | Total number of page views
properites | hash | Properties (i.e. plan, product)

## Get All End Users

```shell
curl "https://api.wootric.com/v1/end_users?access_token=myaccesstoken"
```

> The above command returns JSON structured like this:

```json
[
  {
    "id": 1,
    "created_at" : "2014-12-01 18:36:59",
    "updated_at" : "2014-12-01 18:36:59",
    "email": "nps@example.com",
    "last_surveyed": null,
    "external_created_at": null,
    "user_id": 16,
    "page_views_count" : 1,
    "properites": {"plan": "Small Business", "product": "Example"}
  },
  {
    "id": 2,
    "created_at" : "2014-12-01 18:36:59",
    "updated_at" : "2014-12-04 12:43:44",
    "email": "nps2@example.com",
    "last_surveyed": null,
    "external_created_at": null,
    "user_id": 16,
    "page_views_count" : 3,
    "properites": {"plan": "Enterprise", "product": "The Company"}
  }
]
```

This endpoint retrieves all end users.

### HTTP Request

`GET http://api.wootric.com/v1/end_users?access_token=myaccesstoken`

### Scope Parameters

Scope paramaters filter your end users and can also be chained together by passing multiple scope paramters in an array.

Parameter | Type | Default | Description
--------- | ------- | ------- | -----
page | integer | 1 | Number of returned page
per_page | integer | 25 | Number of records returned on each page
created | hash | {} | Hash with properties used to filter your end users by time it can be used with params (UNIX timestamp type) -  *eq*, *lt*, *lte*, *gt*, *gte*

## Get a Specific End User

```shell
curl " http://api.wootric.com/v1/end_users/2?access_token=myaccesstoken"
```

> The above command returns JSON structured like this:

```json
  {
    "id": 2,
    "created_at" : "2014-12-01 18:36:59",
    "updated_at" : "2014-12-04 12:43:44",
    "email": "nps2@example.com",
    "last_surveyed": null,
    "external_created_at": null,
    "user_id": 16,
    "page_views_count" : 3,
    "properites": {"plan": "Enterprise", "product": "The Company"}
  }
```

This endpoint retrieves a specific end user.


### HTTP Request

`GET https://api.wootric.com/v1/end_users/<ID>`

### URL Parameters

Parameter | Description
--------- | -----------
ID | The ID of the end user to retrieve