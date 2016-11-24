# NPS Score

## NPS Score Object

An NPS score object has the following fields:

Attribute | Type | Description
--------- | ------- | -----------
nps | integer | NPS Score for a given date range
responses | integer | Number of responses for a given date range
detractors | integer | Number of detractors for a given date range
passives | integer | Number of passives for a given date range
promoters | integer | Number of promoters for a given date range
response_rate | integer | Response rate percentage for a given date range
email_response_rate | integer | Email response rate percentage for a given date range

## Get NPS Score summary

```shell
curl "https://api.wootric.com/v1/nps_score?access_token=myaccesstoken"

or

curl -H "Authorization: Bearer myaccesstoken" "https://api.wootric.com/v1/nps_score"
```

> The above command returns the following JSON:

```json
  {
    "nps": 55,
    "responses": 75,
    "detractors": 5,
    "passives": 24,
    "promoters": 46,
    "response_rate": 92,
    "email_response_rate": 0
  }
```

This endpoint retrieves the NPS score summary for the specified 
date range. If no date range is specified, the API returns NPS score summary for
the last month.

### HTTP Request

`GET https://api.wootric.com/v1/nps_score`

### URL Parameters

Parameter | Type | Default | Description
--------- | ------- | ------- | -----
date (optional)| hash | {} | NPS score summary by start date (optional) and end date (optional) (`date[start]=START_DATE&date[end]=END_DATE`)
