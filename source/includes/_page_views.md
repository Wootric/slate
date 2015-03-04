# Page Views

## Page View Object

A page view object has the following fields:

Attribute | Type | Description
--------- | ------- | -----------
id | integer | The id of page view
end_user_id | integer |  The id of end user
url | text | The URL of page
at | datetime | Datetime representation of when the page was visited
created_at | datetime |  Datetime representation of when the page view was created
updated_at | datetime |  Datetime representation of when the page view was lately updated

## Get All Page Views

```shell
curl "https://api.wootric.com/v1/end_users/1/page_views?access_token=myaccesstoken"

or

curl -H "Authorization: Bearer myaccesstoken" "https://api.wootric.com/v1/end_users/1/page_views"
```

> The above command returns JSON structured like this:

```json
[
  {
    "id": 1,
    "end_user_id": 1,
    "url" : "http://www.great-service.com",
    "at" : "2014-12-01 18:36:50",
    "created_at" : "2014-12-01 18:36:59",
    "updated_at" : "2014-12-01 18:36:59"
  },
  {
    "id": 2,
    "end_user_id": 1,
    "url" : "http://www.great-service.com",
    "at" : "2014-12-14 02:13:05",
    "created_at" : "2014-12-14 02:13:15",
    "updated_at" : "2014-12-14 02:13:15"
  }
]
```

This endpoint retrieves all page views for end user.

### HTTP Request

`GET https://api.wootric.com/v1/end_users/1/page_views`

### Scope Parameters

Scope parameters filter your page views and can also be chained together by passing multiple scope parameters in an array.

Parameter | Type | Default | Description
--------- | ------- | ------- | -----
page | integer | 1 | Number of returned page
per_page | integer | 25 | Number of records returned on each page
created | hash | {} | Hash with properties used to filter your page views by time it can be used with params (UNIX timestamp type) -  *eq*, *lt*, *lte*, *gt*, *gte*

## Get a Specific Page View

```shell
curl "https://api.wootric.com/v1/end_users/1/page_views/2?access_token=myaccesstoken"

or

curl -H "Authorization: Bearer myaccesstoken" "https://api.wootric.com/v1/end_users/1/page_views/2"
```

> The above command returns JSON structured like this:

```json
{
  "id": 2,
  "end_user_id": 1,
  "url" : "http://www.great-service.com",
  "at" : "2014-12-14 02:13:05",
  "created_at" : "2014-12-14 02:13:15",
  "updated_at" : "2014-12-14 02:13:15"
}
```

This endpoint retrieves a specific page view.

### HTTP Request

`GET https://api.wootric.com/v1/end_users/<END_USER_ID>/page_views/<ID>`

### URL Parameters

Parameter | Description
--------- | -----------
END_USER_ID | The ID of the end user
ID | The ID of the page view to retrieve

## Create Page View

```shell
curl -X POST "https://api.wootric.com/v1/end_users/1/page_views?access_token=myaccesstoken" -d "at=1423751367;url=http://example.com"

or

curl -X POST -H "Authorization: Bearer myaccesstoken" "https://api.wootric.com/v1/end_users/1/page_views" -d "at=1423751367;url=http://example.com"
```

> The above command returns JSON structured like this:

```json
  {
    "id": 1,
    "end_user_id": 1,
    "at": "2015-02-12T06:29:27.000-08:00",
    "url": "http://example.com",
    "created_at" : "2015-02-12T06:29:27.000-08:00",
    "updated_at" : "2015-02-12T06:29:27.000-08:00"
  }
```

This endpoint creates a page view for the end user.

### HTTP Request

`POST https://api.wootric.com/v1/end_users/<END_USER_ID>/page_views`

### URL Parameters

Parameter | Description
--------- | -----------
END_USER_ID | The ID of the end user
at (optional) | When the page was viewed (UNIX timestamp)
url (optional) | URL of the page viewed

## Delete Page View

```shell
curl -X DELETE "https://api.wootric.com/v1/end_users/1/page_views/1?access_token=myaccesstoken"

or

curl -X DELETE -H "Authorization: Bearer myaccesstoken" "https://api.wootric.com/v1/end_users/1/page_views/1"
```

> The above command returns JSON structured like this:

```json
  {
    "id": 1,
    "end_user_id": 1,
    "at": "2015-02-12T06:29:27.000-08:00",
    "url": "http://example.com",
    "created_at" : "2015-02-12T06:29:27.000-08:00",
    "updated_at" : "2015-02-12T06:29:27.000-08:00"
  }
```

This endpoint deletes a page view for the end user.

### HTTP Request

`DELETE https://api.wootric.com/v1/end_users/<END_USER_ID>/page_views/<PAGE_VIEW_ID>`

### URL Parameters

Parameter | Description
--------- | -----------
END_USER_ID | The ID of the end user
PAGE_VIEW_ID | The ID of the page view to delete
