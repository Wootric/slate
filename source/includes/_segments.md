# Segments

## Segment Object

A Segment object has the following fields:

Attribute | Type | Description
--------- | ------- | -----------
name | string | Name of the segment
data_type | string | One of `string`, `date` or `integer` representing the segment data type
created_at | datetime | Datetime representation of when the segment was created

## Get All Segments

```shell
curl "https://api.wootric.com/v1/segments?access_token=myaccesstoken"

or

curl -H "Authorization: Bearer myaccesstoken" "https://api.wootric.com/v1/segments"
```

> The above command returns the following JSON:

```json
[
  {
    "name": "persona",
    "data_type": "string",
    "created_at": "2017-02-01 12:12:50 -0800"
  },
  {
    "name": "pricing_plan",
    "data_type": "string",
    "created_at": "2017-02-01 12:12:50 -0800"
  },
  {
    "name": "product_plan",
    "data_type": "string",
    "created_at": "2017-02-01 12:12:50 -0800"
  },
  {
    "name": "purchase_date",
    "data_type": "date",
    "created_at": "2017-02-01 12:12:50 -0800"
  },
  {
    "name": "revenue_amount",
    "data_type": "integer",
    "created_at": "2017-02-01 12:12:50 -0800"
  }
]
```

This endpoint retrieves all segments for an account.

### HTTP Request

`GET https://api.wootric.com/v1/segments`
