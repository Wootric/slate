# End User Settings

## End User Settings Object

A end user settings object has the following fields:

Attribute | Type | Description
--------- | ------- | -----------
id | integer | The ID of end user settings
end_user_id | integer | The ID of end user
created_at | datetime | Datetime representation of when the end user settings were created
updated_at | datetime | Datetime representation of when the end user settings was last updated
email_nps | boolean | Specifies whether end user should receive NPS survey through an email

## Get Specific End User Settings

```shell
curl "https://api.wootric.com/v1/end_users/1/settings?access_token=myaccesstoken"

or

curl -H "Authorization: Bearer myaccesstoken" "https://api.wootric.com/v1/end_users/1/settings"
```

> The above command returns the following JSON:

```json
  {
    "id":1,
    "end_user_id":2,
    "created_at":"2015-04-20 04:46:51-08:00",
    "updated_at":"2015-04-20 04:46:51-08:00",
    "email_nps":true
  }
```

This endpoint retrieves a specific end users settings.

### HTTP Request

`GET https://api.wootric.com/v1/end_users/<end_user_id>/settings`

### URL Parameters

Parameter | Description
--------- | -----------
end_user_id | The ID of the end user

## Update End User Settings

```shell
curl -X PUT "https://api.wootric.com/v1/end_users/1/settings?access_token=myaccesstoken" -d "email_nps=false"

or

curl -X PUT -H "Authorization: Bearer myaccesstoken" "https://api.wootric.com/v1/end_users/1/settings" -d "email_nps=false"
```

> The above command returns the following JSON:

```json
  {
    "end_user_id":1,
    "id":2,
    "email_nps":false,
    "created_at":"2015-04-20T04:55:58.741-08:00",
    "updated_at":"2015-04-20T04:55:58.755-08:00"
  }
```

This endpoint updates the end users settings with specified params.

### HTTP Request

`PUT https://api.wootric.com/v1/end_users/<end_user_id>/settings`

### URL Parameters

Parameter | Description
--------- | -----------
end_user_id | The ID of the end user to update
email_nps (optional) | whether or not end user should receive NPS survey through an email
