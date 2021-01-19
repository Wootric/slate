# Imports

## Import Object

An Import object has the following fields:

Attribute | Type | Description
--------- | ------- | -----------
id | integer | The ID of the import
name | string | Import's name
source | string | Import's source
metric_type | string | Import's Metric Type, "nps", "ces", "csat" or "other"
language | string | Import's language
secondary_product_category_id | integer | Import's optional secondary product category ID
response_count | integer | The number of responses in this import
created_at | timestamp | Unix Timestamp of when the import was created
sample_analyzed | boolean | A boolean indicating whether the import has been analyzed or not

<aside class="notice">
In the following cURL examples you must replace `myaccesstoken` with a valid [Access Token](api#authentication) obtained from the main application.
</aside>

## Get imports

This endpoint gets all imports in your account

```shell
curl -s -H "Authorization: Bearer myaccesstoken" -X GET "https://cxi-api.wootric.com/v1/imports" | jq
```

> The above command returns a JSON response similar to this:

```json
[
  {
    "id": 6,
    "name": "ai.csv",
    "source": "Intercom",
    "metric_type": "nps",
    "language": "en",
    "secondary_product_category_id": null,
    "response_count": 2,
    "created_at": 1590090287
  },
  {
    "id": 4,
    "name": "sample.csv",
    "source": "Survey Monkey",
    "metric_type": "nps",
    "language": "en",
    "secondary_product_category_id": null,
    "response_count": 6,
    "created_at": 1588629685
  },
  ...
]
```

### HTTP Request

`GET https://cxi-api.wootric.com/v1/imports`

### URL Parameters

Parameter | Type | Default | Description
--------- | ---- | ------- | -----------
page (optional)| integer | 1 | Number of returned page, max 30
per_page (optional) | integer | 25 | Number of records returned on each page, max 50

## Get a specific import

This endpoint gets a specific import by ID and it'd give you more information about an import than the previous endpoint.

```shell
curl -s -H "Authorization: Bearer myaccesstoken" -X GET "https://cxi-api.wootric.com/v1/imports/6" | jq
```

> The above command returns a JSON response similar to this:

```json
{
  "id": 6,
  "name": "ai.csv",
  "source": "Intercom",
  "metric_type": "nps",
  "language": "en",
  "secondary_product_category_id": null,
  "response_count": 2,
  "created_at": 1590090287,
  "sample_analyzed": true,
  "responses": [
    ... list of responses in this import
  ]
}
```

### HTTP Request

`GET https://cxi-api.wootric.com/v1/imports/<id>`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -------
id | integer | The ID of the import

## Create an import

This endpoint creates an import by uploading a CSV file to /v1/imports, this is a multipart formpost endpoint, so you need to use the proper Content-Type multipart/form-data header.

### CSV file format

For each row in the CSV file we'll create a response in the newly created import, special column names such as `feedback`, `score`, `user_id` and `feedback_date` will be used to create the response and the rest of the columns will be treated as "properties".

The only mandatory column in the CSV file is the `feedback_date` column and it should have a valid value for each row in the file.
Also if you include a `score` column it should consists of Integer values only (blank values are allowed).

Special columns used as response attributes:

Column | Description | Type | Mandatory
---- | ---- | ---- | ----
feedback | the response's feedback | string | false
feedback_date | the response's feedback date (*)as a Unix Timestamp | String/Integer | **true**
user_id | the user's unique ID | string | false
score | the response's NPS, CSAT, CES or other score | Integer | false

Reserved Column Names that cannot be used in the CSV file:
`tags, wootric_response_id `

(*) feedback_date format: `yyyy-mm-dd hh:mm:ss` (e.g 2020-07-16 15:45:00), we also accept `yyyy-mm-dd hh:mm` and `yyyy-mm-dd`. You can also use a Unix Timestamp.

### Limits

Imports only work for CSVs less than 10MB in size

### HTTP Request

`POST https://cxi-api.wootric.com/v1/imports`

### HTTP Headers

`Content-Type: multipart/form-data`

### HTTP POST Body

Multipart Name | Type | Description
--------- | ---- | -------
file | UTF-8 encoded string | The contents of the CSV file (max: 10 MB)


```shell
curl -s -H "Authorization: Bearer myaccesstoken" -XPOST "https://cxi-api.wootric.com/v1/imports" -F "file=@data.csv" | jq
```

> The above command returns a JSON response similar to this:

```json
{
  "id": 11,
  "name": "data.csv",
  "source": null,
  "metric_type": null,
  "language": "en",
  "secondary_product_category_id": null,
  "response_count": 0,
  "created_at": 1611093660,
  "sample_analyzed": false,
  "responses": [
    {
      "id": 403,
      "project_ids": [],
      "feedback": "I wish your pricing model worked better for me. I need a custom plan.",
      "translated_feedback": null,
      "user_id": "mitsu.takasu@example1434.mx",
      "feedback_date": 1504948149,
      "score": 7,
      "metric_type": null,
      "custom_properties": [
        {
          "key": "platform",
          "data_type": "string",
          "value": "Solaris"
        },
        {
          "key": "country",
          "data_type": "string",
          "value": "Ecuador"
        },
        {
          "key": "pricing_plan",
          "data_type": "string",
          "value": "Lite"
        },
        {
          "key": "persona",
          "data_type": "string",
          "value": "Business User"
        }
      ],
      "tags": [],
      "sentiment": null,
      "wootric_response_id": null,
      "wootric_account_id": 38
    },
    ... list of responses in your import
  ]
}
```

## Update an import

This endpoint updates an import's metadata. The name, metric_type and source fields can be set with `PUT /v1/imports/:id`.
Also, this endpoint accepts an optional list of tag_names and project_ids.

### HTTP Request

`PUT https://cxi-api.wootric.com/v1/imports/<id>`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -------
id | integer | The ID of the import
import[name] | string | Import's name
import[source] | string | Import's source
import[metric_type] | string | Import's Metric Type, "nps", "ces", "csat" or "other"
import[language] | string | Import's language
import[secondary_product_category_id] | integer | Import's optional secondary product category ID
import[tag_names] | string[] | List of **existing** `Tag` names in the account that will be applied to each response in the import.
import[project_ids] | integer[] | List of **existing** `project IDs that will be applied to each response in the import.

```shell
curl -s -H "Authorization: Bearer myaccesstoken" -X PUT "https://cxi-api.wootric.com/v1/imports/11" \
  -F import[name]="My second import" \
  -F import[metric_type]=CES \
  -F import[source]=Intercom \
  -F import[tag_names][0]=TEST \
  -F import[project_ids][0]=5 | jq
```

> The above command returns a JSON response similar to this:

```json
{
  "id": 11,
  "name": "My second import",
  "source": "Intercom",
  "metric_type": "ces",
  "language": "en",
  "secondary_product_category_id": null,
  "response_count": 0,
  "created_at": 1611093660,
  "sample_analyzed": false,
  "responses": [
    {
      "id": 413,
      "project_ids": [
        5
      ],
      "feedback": "I wish your pricing model worked better for me. I need a custom plan.",
      "translated_feedback": null,
      "user_id": "mitsu.takasu@example1434.mx",
      "feedback_date": 1504948149,
      "score": 7,
      "metric_type": "ces",
      "custom_properties": [
        {
          "key": "pricing_plan",
          "data_type": "string",
          "value": "Lite"
        },
        {
          "key": "platform",
          "data_type": "string",
          "value": "Solaris"
        },
        {
          "key": "persona",
          "data_type": "string",
          "value": "Business User"
        },
        {
          "key": "country",
          "data_type": "string",
          "value": "Ecuador"
        }
      ],
      "tags": [],
      "sentiment": null,
      "wootric_response_id": null,
      "wootric_account_id": 38
    },
    ... list of responses in your import
  ]
}
```

## Delete an import

```shell
curl -i -s -X DELETE -H "Authorization: Bearer myaccesstoken" "https://cxi-api.wootric.com/v1/imports/10"
```

> The above command returns and empty response with status 202 Accepted.

This endpoint deletes an import in your account along with all associated responses.

### HTTP Request

`DELETE https://cxi-api.wootric.com/v1/imports/<id>`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -------
id | integer | The ID of the import
