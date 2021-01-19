# Onboarding

In order to use the CXI API you first need an "onboarded" account, that is, you should have completed the onboarding flow, which is required to access the rest of the API.

In the onboarding flow you are asked to choose a Product Category for you account and other details.

The API will return a `424 Failed Dependency` error when trying to perform an action (like fetching imports, tags or responses) using an account that has not completed the onboarding flow.

> Trying to use the API without completing the onboarding flow will give you an error:

```shell
curl -i -H "Authorization: Bearer myaccesstoken" -X GET "$AI_SERVER/v1/imports"
HTTP/1.1 424 Failed Dependency
...
{"message":"Please complete the onboarding flow first."}
```


## Get Onboarding status

This endpoint will give you the onboarding status of your account

```shell
curl -s -H "Authorization: Bearer myaccesstoken" -X GET "https://cxi-api.wootric.com/v1/onboarding" | jq
```

> The above command returns a JSON response similar to this for onboarded accounts

```json
{
  "onboarded": true,
  "mode": "full"
}
```

> The above command returns a JSON response similar to this for NOT onboarded accounts

```json
{
  "onboarded": false,
  "mode": "full",
  "product_category_id": null,
  "product_categories": [
    {
      "id": 1,
      "name": "General"
    },
    {
      "id": 2,
      "name": "SaaS DevOps"
    },
    {
      "id": 3,
      "name": "SaaS Anc"
    },
    {
      "id": 4,
      "name": "SaaS IDC"
    },
    {
      "id": 5,
      "name": "SaaS Education CL"
    },
    {
      "id": 6,
      "name": "SaaS GD"
    },
    {
      "id": 7,
      "name": "SaaS Social Media"
    },
    {
      "id": 15,
      "name": "Politicians Review"
    },
    {
      "id": 8,
      "name": "SaaS Social Media HS"
    },
    {
      "id": 9,
      "name": "E-Commerce"
    },
    {
      "id": 10,
      "name": "E-Commerce-WGAC"
    },
    {
      "id": 11,
      "name": "Employee Reviews"
    },
    {
      "id": 12,
      "name": "Online Food Delivery"
    },
    {
      "id": 13,
      "name": "Support Case Feedback"
    },
    {
      "id": 14,
      "name": "SaaS RC"
    }
  ],
  "tags": []
}
```

### HTTP Request

`GET https://cxi-api.wootric.com/v1/onboarding`


## Update Onboarding status

This endpoint updates the onboarding status of an account that has not been onboarded yet. Your account will not be onboarded until you update the `onboarded` attribute using this endpoint.


```shell
curl -s -H "Authorization: Bearer myaccesstoken" -X PUT "https://cxi-api.wootric.com/v1/onboarding" \
  -F product_category_id=9
  | jq
```

> The above command returns a JSON response similar to this for onboarded accounts

```json
{
  "onboarded": false,
  "mode": "full",
  "product_category_id": 9,
  "product_categories": [
    {
      "id": 1,
      "name": "General"
    },
    {
      "id": 2,
      "name": "SaaS DevOps"
    },
    {
      "id": 3,
      "name": "SaaS Anc"
    },
    {
      "id": 4,
      "name": "SaaS IDC"
    },
    {
      "id": 5,
      "name": "SaaS Education CL"
    },
    {
      "id": 6,
      "name": "SaaS GD"
    },
    {
      "id": 7,
      "name": "SaaS Social Media"
    },
    {
      "id": 15,
      "name": "Politicians Review"
    },
    {
      "id": 8,
      "name": "SaaS Social Media HS"
    },
    {
      "id": 9,
      "name": "E-Commerce"
    },
    {
      "id": 10,
      "name": "E-Commerce-WGAC"
    },
    {
      "id": 11,
      "name": "Employee Reviews"
    },
    {
      "id": 12,
      "name": "Online Food Delivery"
    },
    {
      "id": 13,
      "name": "Support Case Feedback"
    },
    {
      "id": 14,
      "name": "SaaS RC"
    }
  ],
  "tags": [
    {
      "id": 90,
      "mode": "smart",
      "name": "RETURNS",
      "response_ids": []
    },
    {
      "id": 91,
      "mode": "smart",
      "name": "SHIPPING_PACKAGING",
      "response_ids": []
    },
    ...
    {
      "id": 89,
      "mode": "smart",
      "name": "PRODUCT_QUALITY",
      "response_ids": []
    }
  ],
  "project": {
    "name": null,
    "responses": []
  }
}
```

<aside class="warning">
Note that your can use this endpoint as long as the `onboarded` attribute is `false`, once you update it to `true` you can no longer use this endpoint but you'll be able to access the rest of the API.
</aside>

### HTTP Request

`PUT https://cxi-api.wootric.com/v1/onboarding`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -------
product_category_id | integer | The ID of the chosen Product Category
onboarded | boolean | Onboarding status flag
project | Hash | (optional) Details about an optional associated Project
import | Hash | (optional) Details about an optional associated Import (see [Imports API](cxi#imports))
project[name] | string | Name of an associated Project (see [Projects API](cxi#projects))
import[name] | string | Name of an associated Import (see [Imports API](cxi#imports))
import[source] | string | Import's source (see [Imports API](cxi#imports))
import[metric_type] | string | Import's Metric Type (see [Imports API](cxi#imports))
import[language] | string | Import's language (see [Imports API](cxi#imports))


```shell
curl -s -H "Authorization: Bearer myaccesstoken" -X PUT "https://cxi-api.wootric.com/v1/onboarding" \
  -F project[name]=Enterprise \
  -F import[name]=important.csv \
  -F import[source]="Survey Monkey" \
  -F import[metric_type]=NPS \
  | jq
```

> The above command returns a JSON response similar to this for onboarded accounts

```json
{
  "onboarded": false,
  "mode": "full",
  "product_category_id": 9,
  "product_categories": [
    {
      "id": 1,
      "name": "General"
    },
    {
      "id": 9,
      "name": "E-Commerce"
    },
    ...
  ],
  "tags": [
    {
      "id": 90,
      "mode": "smart",
      "name": "RETURNS",
      "response_ids": []
    },
    ...
  ],
  "project": {
    "name": "Enterprise",
    "responses": []
  },
  "import": {
    "name": "important.csv",
    "source": "Survey Monkey",
    "metric_type": "nps",
    "sample_analyzed": true
  }
}
```

> Finally, the onboarded state is also set through the same PUT /v1/onboarding endpoint:

```shell
$ curl -s -H "Authorization: Bearer myaccesstoken" -X PUT "https://cxi-api.wootric.com/v1/onboarding" -F onboarded=true | jq
{
  "onboarded": true,
  "mode": "full"
}
```

<aside class="warning">
From now on all examples assume that your account has been onboarded and you have successfully selected a Product Category for your account and have also created your first import.
</aside>
