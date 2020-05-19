# Metrics

## NPS Object

An NPS object has the following fields:

Attribute | Type | Description
--------- | ------- | -----------
nps | integer | NPS for a given date range
responses | integer | Number of responses for a given date range
detractors | integer | Number of detractors for a given date range
passives | integer | Number of passives for a given date range
promoters | integer | Number of promoters for a given date range
response_rate | integer | Response rate percentage for a given date range
email_response_rate | integer | Email response rate percentage for a given date range

## Get NPS summary

```shell
curl -H "Authorization: Bearer myaccesstoken" "https://api.wootric.com/v1/nps_summary"

# With params

curl -H "Authorization: Bearer myaccesstoken" "https://api.wootric.com/v1/nps_summary?date%5Bstart%5D='YYYY-MM-DD'&date%5Bend%5D='YYYY-MM-DD'"
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

This endpoint retrieves the NPS summary for the specified 
date range. If no date range is specified, the API returns NPS summary for
the last month.

<aside class="notice">
The values returned by this endpoint depend on the Account's time zone setting.
</aside>

### HTTP Request

`GET https://api.wootric.com/v1/nps_summary`

### URL Parameters

Parameter | Type | Default | Description
--------- | ------- | ------- | -----
date (optional)| hash | {} | NPS summary by start date (optional) and end date (optional) (`date[start]='YYYY-MM-DD'&date[end]='YYYY-MM-DD'`)
