# Segments/Properties

### HTTP Request

`PUT https://cxi-api.wootric.com/v1/segments`

## Response segments bulk update

Parameter | Type | Description
--------- | ---- | -------
responses[][id] | integer | Response ID
responses[][custom_properties] | Array | list of properties(Hash { key: property_name, value: new_value})
responses[][custom_properties][][key] | string | name of the segment/property
responses[][custom_properties][][value] | string | new value for the segment/property

#### Update bulk

This endpoint updates a list of segment associated to a response

```shell
curl -s -H "Authorization: Bearer ACCESSTOKEN" -X PUT "https://cxi-api.wootric.com/v1/segments/update_bulk" \
  -F "responses=[id: RESPONSE_ID, custom_properties: [{key: PROPERTY_NAME, value: NEW_VALUE},{key: PROPERTY_NAME, value: NEW_VALUE}]]"
```

## User segments bulk update

Parameter | Type | Description
--------- | ---- | -------
users[][user_id] | integer | User ID
users[][custom_properties] | Array | list of properties(Hash { key: property_name, value: new_value})
users[][custom_properties][][key] | string | name of the segment/property
users[][custom_properties][][value] | string | new value for the segment/property

#### Update bulk

This endpoint updates a list of segment associated to a user

```shell
curl -s -H "Authorization: Bearer ACCESSTOKEN" -X PUT "https://cxi-api.wootric.com/v1/segments/update_bulk" \
  -F "users=[user_id: USER_ID, custom_properties: [{key: PROPERTY_NAME, value: NEW_VALUE},{key: PROPERTY_NAME, value: NEW_VALUE}]]"
```


