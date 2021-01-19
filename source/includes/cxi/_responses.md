# Reponses

## Response Object

A Response object has the following fields:

Attribute | Type | Description
--------- | ------- | -----------
id | integer | The ID of the response
feedback | string | the response's feedback
feedback_date | string/integer | the response's feedback date (*) 
user_id | string | the user's unique ID
metric_type | string | response's metric type, one of `nps`, `csat`, `ces` or `other`
score | integer | the response's NPS, CSAT, CES or other score
sentiment | string | response's sentiment, `positive`, `negative`, `neutral` or `null`
project_ids | integer[] | Array of all associated [Projects](cxi#projects)
tags | Hash[] | a list of [Tags](cxi#tags) associated with this response
custom_properties | Hash[] | a list of associated custom properties for this response (**)

(*) feedback_date format: `yyyy-mm-dd hh:mm:ss` (e.g 2020-07-16 15:45:00), we also accept `yyyy-mm-dd hh:mm` and `yyyy-mm-dd`. You can also use a Unix Timestamp.

(**) custom_properties are associated to responses when you create an [Import](cxi#create-an-import). The properties and their values are the columns and cells that you use in the uploaded CSV file.

<aside class="notice">
In the following cURL examples you must replace `myaccesstoken` with a valid [Access Token](api#authentication) obtained from the main application.
</aside>

## Get responses

This endpoint gets all responses in your account

```shell
curl -s -H "Authorization: Bearer myaccesstoken" -X GET "https://cxi-api.wootric.com/v1/responses" | jq
```

> The above command returns a JSON response similar to this:

```json
{
  "total_count": 10,
  "items": [
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
      "tags": [
        {
          "id": 93,
          "name": "TECHNICAL",
          "display_name": "TECHNICAL",
          "description": null,
          "mode": "smart",
          "sentiment": "negative",
          "text_match_terms": [],
          "filter_rules": {}
        },
        {
          "id": 87,
          "name": "PEOPLE",
          "display_name": "PEOPLE",
          "description": null,
          "mode": "smart",
          "sentiment": "positive",
          "text_match_terms": [],
          "filter_rules": {}
        },
        {
          "id": 89,
          "name": "PRODUCT_QUALITY",
          "display_name": "PRODUCT_QUALITY",
          "description": null,
          "mode": "smart",
          "sentiment": "negative",
          "text_match_terms": [],
          "filter_rules": {}
        }
      ],
      "sentiment": "positive",
      "wootric_response_id": null,
      "wootric_account_id": 38
    },
    ...
  ]
}
```

### HTTP Request

`GET https://cxi-api.wootric.com/v1/responses`

### URL Parameters

Parameter | Type | Default | Description
--------- | ---- | ------- | -----------
page (optional)| integer | 1 | Number of returned page, max 30
per_page (optional) | integer | 25 | Number of records returned on each page, max 50
sort_order (optional) | string | desc | Sort responses by `feedback_date` in ascending or descending order
