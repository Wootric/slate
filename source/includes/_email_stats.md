#Email Stats

```sh
curl -H "Authorization: Bearer myaccesstoken" "https://api.wootric.com/v2/email_stats"

{
  "email_stats": {
    "send_date": "Aug  3, 2023-Sep  3, 2024",
    "send_requests": 7,
    "emails_sent": 5,
    "delivered": 5,
    "delivered_percentage": "100.0%",
    "bounce_rate": 0,
    "bounce_rate_percentage": "0.0%",
    "open_rate": "60%",
    "response_rate": "0%",
    "not_eligible": "2 (29%)",
    "raw_results": {
      "processed": 5,
      "bounce": 0,
      "dropped": 0,
      "delivered": 5,
      "opted_out": 2,
      "not_delivered": 0,
      "open": 3,
      "spamreport": 0,
      "not_eligible": 0,
      "total_surveys": 5,
      "total_responses": 0,
      "sart_date": "2023-08-03T00:00:00-07:00",
      "end_date": "2024-09-03T23:59:59-07:00"
    }
  },
  "initial_send": null,
  "reminder_send": null
}
```

Returns email stats information depending on the date_range selected.

Param | Type | Description
----- | ---- | ------------
date_range | Hash | See **date_range** parameters below

## Sources

```sh
curl -H "Authorization: Bearer myaccesstoken" "https://api.wootric.com/v2/email_stats/sources"


{
  "ongoing": [
    {
      "id": "email_api",
      "name": "Email API *"
    },
    {
      "id": "webhook_trigger",
      "name": "Webhook Trigger *"
    }
  ],
  "sends": [
    {
      "id": 1,
      "name": "Q1_file.csv",
      "date": "Jan 11, 2024  9:01AM"
    },
    {
      "id": 2,
      "name": "Q2_file.csv",
      "date": "Apr 14, 2024  9:04AM"
    },
    {
      "id": 3,
      "name": "Q3_file.csv",
      "date": "Jul 09, 2024  10:04AM"
    }
  ]
}



```

Returns the names and IDs of the sources of the email sends.

## Bounce report

```sh
curl -XPOST -H "Authorization: Bearer myaccesstoken" "https://api.wootric.com/v2/email_stats/bounce_report"


null
```

Generates and emails a bounce report to the current user if the access token belongs to one, or the owner of the account if the access token was generated with `grant_type=client_credentials`.

Param | Type | Description
----- | ---- | ------------
date_range | Hash | See **date_range** parameters below
source | String | Source of the bounce report (email_api, webhook_trigger or ID of the email send)


### date_range

Param | Type | Description
----- | ---- | ------------
start_date | String | Start date string with format YYYY-MM-DD (e.g. 2024-08-04)
end_date | String | End date string with format YYYY-MM-DD (e.g. 2024-08-04)

