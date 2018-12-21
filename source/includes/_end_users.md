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
external_id | string | An optional unique string identifier
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


## Get a Specific End User by ID

```shell
curl "https://api.wootric.com/v1/end_users/2?access_token=myaccesstoken"

or

curl -H "Authorization: Bearer myaccesstoken" "https://api.wootric.com/v1/end_users/2"
```

> The above command returns the following JSON:

```json
{
  "id": 2,
  "created_at": "2018-01-02 23:03:41 -0800",
  "updated_at": "2018-01-16 23:07:03 -0800",
  "email": "nps2@example.com",
  "last_surveyed": "2018-01-07 15:30:44 -0800",
  "external_created_at": 1515940485,
  "last_seen_at": null,
  "properties": {
    "country": "UK",
    "persona": "Individual",
    "pricing_plan": "Lite",
    "product_plan": "Mobile",
    "purchase_date": 1494569021,
    "revenue_amount": 10000
  },
  "phone_number": null,
  "external_id": "e9a12f9aa245cfd5",
  "last_response": null,
  "settings": {
    "email_nps": true,
    "mobile_nps": true,
    "web_nps": true
  }
}
```

This endpoint retrieves a specific end user by id.


### HTTP Request

`GET https://api.wootric.com/v1/end_users/<id>`

### URL Parameters

Parameter | Description
--------- | -----------
id | The ID of the end user to retrieve

## Get a Specific End User by Email

```shell
curl "https://api.wootric.com/v1/end_users/2?access_token=myaccesstoken"

or

curl -H "Authorization: Bearer myaccesstoken" "https://api.wootric.com/v1/end_users/nps2@example.com"
```

> The above command returns the following JSON:

```json
{
  "id": 2,
  "created_at": "2018-01-02 23:03:41 -0800",
  "updated_at": "2018-01-16 23:07:03 -0800",
  "email": "nps2@example.com",
  "last_surveyed": "2018-01-07 15:30:44 -0800",
  "external_created_at": 1515940485,
  "last_seen_at": null,
  "properties": {
    "country": "UK",
    "persona": "Individual",
    "pricing_plan": "Lite",
    "product_plan": "Mobile",
    "purchase_date": 1494569021,
    "revenue_amount": 10000
  },
  "phone_number": null,
  "external_id": "e9a12f9aa245cfd5",
  "last_response": null,
  "settings": {
    "email_nps": true,
    "mobile_nps": true,
    "web_nps": true
  }
}
```

This endpoint retrieves a specific end user by email.


### HTTP Request

`GET https://api.wootric.com/v1/end_users/<email>`

### URL Parameters

Parameter | Description
--------- | -----------
email | The Email of the end user to retrieve

## Get a Specific End User by Phone Number

```shell
curl "https://api.wootric.com/v1/end_users/phone_number/+14155554131?access_token=myaccesstoken"

or

curl -H "Authorization: Bearer myaccesstoken" "https://api.wootric.com/v1/end_users/phone_number/+14155554131"
```

> The above command returns the following JSON:

```json
{
  "id": 2,
  "created_at": "2018-01-02 23:03:41 -0800",
  "updated_at": "2018-01-16 23:07:03 -0800",
  "email": "nps2@example.com",
  "last_surveyed": "2018-01-07 15:30:44 -0800",
  "external_created_at": 1515940485,
  "last_seen_at": null,
  "properties": {
    "country": "UK",
    "persona": "Individual",
    "pricing_plan": "Lite",
    "product_plan": "Mobile",
    "purchase_date": 1494569021,
    "revenue_amount": 10000
  },
  "phone_number": "+14155554131",
  "external_id": "e9a12f9aa245cfd5",
  "last_response": null,
  "settings": {
    "email_nps": true,
    "mobile_nps": true,
    "web_nps": true
  }
}
```

This endpoint retrieves a specific end user by phone number.

### HTTP Request

`GET https://api.wootric.com/v1/end_users/phone_number/<phone_number>`

### URL Parameters

Parameter | Description
--------- | -----------
phone_number | The Phone Number of the end user to retrieve. The phone number must be prefixed with '+'. If it's just digits, it will look up by id.

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
external_id (optional) | A unique string identifier
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
external_id (optional) | A unique string identifier
properties (optional) | Hash of additional properties

## Delete End User

```shell
# Using the end user's ID:

curl -X DELETE "https://api.wootric.com/v1/end_users/1?access_token=myaccesstoken"

or

curl -X DELETE -H "Authorization: Bearer myaccesstoken" "https://api.wootric.com/v1/end_users/1"

# Using the end user's email address:

curl -X DELETE "https://api.wootric.com/v1/end_users/user@domain.com?access_token=myaccesstoken"

or

curl -X DELETE -H "Authorization: Bearer myaccesstoken" "https://api.wootric.com/v1/end_users/user@domain.com"
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
    "properties": "{'company':'TestCompany', 'city':'San Francisco'}"
  }
```

This endpoint marks the end user for deletion. Deletion would be performed the following day at 7 AM UTC.

### HTTP Request

`DELETE https://api.wootric.com/v1/end_users/<end_user_id_or_email>`

### URL Parameters

Parameter | Description
--------- | -----------
end_user_id_or_email | The ID or the email of the end user to delete

## Export specific End User's data

```shell
curl "https://api.wootric.com/v1/end_users/2/export?access_token=myaccesstoken"

or

curl -H "Authorization: Bearer myaccesstoken" "https://api.wootric.com/v1/end_users/2/export"
```

> The above command returns an empty JSON response. Inspect the response code to see if it was successsful or not:

```http
HTTP/1.1 202 Accepted
```

This endpoint schedules an export to be processed for the given end user ID, when the export file is ready we'll send you an email with a link to the final JSON export file.

### HTTP Request

`GET https://api.wootric.com/v1/end_users/<id>/export`

### URL Parameters

Parameter | Description
--------- | -----------
id | The ID of the end user to export
