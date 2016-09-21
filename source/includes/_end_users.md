# End Users

## End User Object

A end user object has the following fields:

Attribute | Type | Description
--------- | ------- | -----------
id | integer | The ID of end user
created_at | datetime | Datetime representation of when the end user was created
updated_at | datetime | Datetime representation of when the end user was last updated
email | string | End user email
last_surveyed | datetime | Datetime representation of when the end user was last surveyed
external_created_at | integer | UNIX timestamp of when the end user was created externally
page_views_count | integer | Total number of page views
properties | hash | Properties (i.e. plan, product)

## Get All End Users

```shell
curl "https://api.wootric.com/v1/end_users?access_token=myaccesstoken"

or

curl -H "Authorization: Bearer myaccesstoken" "https://api.wootric.com/v1/end_users"
```

> The above command returns the following JSON:

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
    "properties": {"plan": "Small Business", "product": "Example"}
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
    "properties": {"plan": "Enterprise", "product": "The Company"}
  }
]
```

This endpoint retrieves all end users.

### HTTP Request

`GET https://api.wootric.com/v1/end_users`

### Scope Parameters

Scope parameters filter your end users and can also be chained together by passing multiple scope parameters in an array.

Parameter | Type | Default | Description
--------- | ------- | ------- | -----
page (optional) | integer | 1 | Number of returned page, max 30
per_page (optional) | integer | 25 | Number of records returned on each page, max 50
created (optional) | hash | {} | Filter your end users by time of creation (UNIX timestamp type) -  *eq*, *lt*, *lte*, *gt*, *gte* (`created[gt]=UNIX_TIMESTAMP     &created[lt]=UNIX_TIMESTAMP`)
email (optional) | string | None | Filter end users by email (will return an array containing a single end user object if the end user with provided email exists)
sort_order (optional)| string | asc | Order in which records are shown. Default is oldest first. Options are `asc` or `desc`

We recommend to iterate using `created` parameter if you need to get more data than what you get out of our pagination restriction.  


## Get a Specific End User

```shell
curl "https://api.wootric.com/v1/end_users/2?access_token=myaccesstoken"

or

curl -H "Authorization: Bearer myaccesstoken" "https://api.wootric.com/v1/end_users/2"
```

> The above command returns the following JSON:

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
    "properties": {"plan": "Enterprise", "product": "The Company"}
  }
```

This endpoint retrieves a specific end user.


### HTTP Request

`GET https://api.wootric.com/v1/end_users/<id>`

### URL Parameters

Parameter | Description
--------- | -----------
id | The ID of the end user to retrieve

## Create End User

```shell
curl -X POST "https://api.wootric.com/v1/end_users?access_token=myaccesstoken" -d "email=enduser@example.com&last_surveyed=1423732280&properties[company]=TestCompany&properties[city]=San Francisco"

or

curl -X POST -H "Authorization: Bearer myaccesstoken" "https://api.wootric.com/v1/end_users" -d "email=enduser@example.com&last_surveyed=1423732280&properties[company]=TestCompany&properties[city]=San Francisco"
```

> The above command returns the following JSON:

```json
  {
    "id": 1,
    "email": "enduser@example.com",
    "last_surveyed": "2015-02-12T06:29:27.000-08:00",
    "external_created_at": null,
    "created_at" : "2015-02-12T06:29:27.000-08:00",
    "updated_at" : "2015-02-12T06:29:27.000-08:00",
    "user_id": 1,
    "page_views_count": 0,
    "properties": "{'company':'TestCompany', 'city':'San Francisco'}"
  }
```

This endpoint creates the end user.

### HTTP Request

`POST https://api.wootric.com/v1/end_users`

### URL Parameters

Parameter | Description
--------- | -----------
email | End user's email address
last_surveyed (optional) | Date of last survey for the end user (UNIX Timestamp)
external_created_at (optional) | Date of creation of the end user in external application (UNIX Timestamp)
properties (optional) | Hash of additional properties

## Update End User

```shell
curl -X PUT "https://api.wootric.com/v1/end_users/1?access_token=myaccesstoken" -d "email=enduser_new@example.com&properties[company]=NewCompany&properties[city]=New Reno"

or

curl -X PUT -H "Authorization: Bearer myaccesstoken" "https://api.wootric.com/v1/end_users/1" -d "email=enduser_new@example.com&properties[company]=NewCompany&properties[city]=New Reno"
```

> The above command returns the following JSON:

```json
  {
    "id": 1,
    "email": "enduser_new@example.com",
    "last_surveyed": "2015-02-12T06:29:27.000-08:00",
    "external_created_at": null,
    "created_at" : "2015-02-12T06:29:27.000-08:00",
    "updated_at" : "2015-02-12T06:29:27.000-08:00",
    "user_id": 1,
    "page_views_count": 0,
    "properties": "{'company':'NewCompany', 'city':'New Reno'}"
  }
```

This endpoint updates the end user with specified params.

### HTTP Request

`PUT https://api.wootric.com/v1/end_users/<END_USER_ID>`

### URL Parameters

Parameter | Description
--------- | -----------
END_USER_ID | The ID of the end user to update
email (optional) | End User's Email Address
last_surveyed (optional) | Date of last survey for the end user (UNIX Timestamp)
external_created_at (optional) | Date of creation of the end user in external application (UNIX Timestamp)
properties (optional) | Hash of additional properties

## Delete End User

```shell
curl -X DELETE "https://api.wootric.com/v1/end_users/1?access_token=myaccesstoken"

or

curl -X DELETE -H "Authorization: Bearer myaccesstoken" "https://api.wootric.com/v1/end_users/1"
```

> The above command returns the following JSON:

```json
  {
    "id": 1,
    "email": "enduser@example.com",
    "last_surveyed": "2015-02-12T06:29:27.000-08:00",
    "external_created_at": null,
    "created_at" : "2015-02-12T06:29:27.000-08:00",
    "updated_at" : "2015-02-12T06:29:27.000-08:00",
    "user_id": 1,
    "page_views_count": 0,
    "properties": "{'company':'TestCompany', 'city':'San Francisco'}"
  }
```

This endpoint deletes the end user.

### HTTP Request

`DELETE https://api.wootric.com/v1/end_users/<end_user_id>`

### URL Parameters

Parameter | Description
--------- | -----------
end_user_id | The ID of the end user to delete
