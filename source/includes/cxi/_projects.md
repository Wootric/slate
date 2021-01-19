# Projects

## Project Object

A Project object has the following fields:

Attribute | Type | Description
--------- | ------- | -----------
id | integer | The ID of project
name | string | Project's name
response_count | integer | Number of Responses in this Project
created_at | integer | Project's creation date as a Unix Timestamp

<aside class="notice">
In the following cURL examples you must replace `myaccesstoken` with a valid [Access Token](api#authentication) obtained from the main application.
</aside>

## Get projects

This endpoint gets all projects in your account

```shell
curl -s -H "Authorization: Bearer myaccesstoken" -X GET "https://cxi-api.wootric.com/v1/projects" | jq
```

> The above command returns a JSON response similar to this:

```json
[
  {
    "id": 7,
    "name": "Enterprise",
    "response_count": 0,
    "created_at": 1610774054
  }
]
```

### HTTP Request

`GET https://cxi-api.wootric.com/v1/projects`

## Create a Project

```shell
curl -X POST -H "Authorization: Bearer myaccesstoken" "https://cxi-api.wootric.com/v1/projects" \
  -F project[name]="My new Project"
```

> The above command returns a JSON response similar to this:

```json
{
  "id": 8,
  "name": "My new Project",
  "response_count": 0,
  "created_at": 1611092961
}
```

This endpoint creates a project in your account.

### HTTP Request

`POST https://cxi-api.wootric.com/v1/projects`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
project[name] | string | Project's name

## Update a Project

```shell
curl -X PUT -H "Authorization: Bearer myaccesstoken" "https://cxi-api.wootric.com/v1/projects/8" \
  -F project[name]="Updated name for the Project"
```

> The above command returns a JSON response similar to this:

```json
{
  "id": 8,
  "name": "Updated name for the Project",
  "response_count": 0,
  "created_at": 1611092961
}
```

This endpoint updates a project in your account.

### HTTP Request

`PUT https://cxi-api.wootric.com/v1/projects/<ID>`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
id  | integer | The ID of the Project being updated
project[name] | string | Project's name
