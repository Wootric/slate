# Segments/Properties

### HTTP Request

`POST https://cxi-api.wootric.com/v1/segments`

## Response segments bulk update

Parameter | Type | Description
--------- | ---- | -------
resposes[id] | integer | Response ID
response[custom_properties] | Array | list of properties(Hash { key: property_name, value: new_value})
response[custom_properties][][key] | string | name of the segment/property
response[custom_properties][][value] | string | new value for the segment/property

#### Update bulk

This endpoint updates a list of segments from a response or from a user

```shell
curl -s -H "Authorization: Bearer ACCESSTOKEN" -X PUT "https://cxi-api.wootric.com/v1/segments/update_bulk" \
  -F "resposes[id]=RESPONSE_ID" \
  -F "resposes[custom_properties]=[{key: PROPERTY_NAME, value: NEW_VALUE},{key: PROPERTY_NAME, value: NEW_VALUE}]"
```

## User segments bulk update

Parameter | Type | Description
--------- | ---- | -------
users[user_id] | integer | User ID
users[custom_properties] | Array | list of properties(Hash { key: property_name, value: new_value})
users[custom_properties][][key] | string | name of the segment/property
users[custom_properties][][value] | string | new value for the segment/property

#### Update bulk

This endpoint updates a list of segments from a response or from a user

```shell
curl -s -H "Authorization: Bearer ACCESSTOKEN" -X PUT "https://cxi-api.wootric.com/v1/segments/update_bulk" \
  -F "users[user_id]=USER_ID" \
  -F "resposes[custom_properties]=[{key: PROPERTY_NAME, value: NEW_VALUE},{key: PROPERTY_NAME, value: NEW_VALUE}]"
```


