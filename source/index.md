---
title: API Reference

language_tabs:
  - shell

toc_footers:
  - <a href='https://www.wootric.com/'>Sign Up</a>
  - <a href='http://github.com/tripit/slate'>Documentation Powered by Slate</a>

includes:
  - end_users
  - responses
  - declines
  - page_views
  - errors

search: true
---

# Introduction

Welcome to the Wootric API documentation!

You can use our API to access your end users, responses, declines and page views.

JSON will be returned in all responses from the API including errors. We currently have code examples using curl, you can view code examples in the dark area to the right.

# Authentication

Wootric expects for the access token key to be included in all API requests that looks like the following:

`https://api.wootric.com/v1/end_users.json?access_token=myaccesstoken`

Access token can be retrieved using either grant_type of "password" with your account email and password, or grant_type of "client_credentials" with your application client_id and client_secret.

Access token expires 2 hours after creation. New Access tokens can be obtained using refresh tokens which is detailed in the CURL example to the right.

<aside class="notice">
You must replace <code>meowmeowmeow</code> with your personal API key.
</aside>

> To retrieve an access token using oauth, use this code:

```shell
curl -i https://api.wootric.com/oauth/token \
-F grant_type=password \
-F username=<youremailaddress>\
-F password=<yourpassword>
```

> The above command returns JSON structured like this:

```json
[
  {
    "id": 1,
    "name": "Fluffums",
    "breed": "calico",
    "fluffiness": 6,
    "cuteness": 7
  },
  {
    "id": 2,
    "name": "Isis",
    "breed": "unknown",
    "fluffiness": 5,
    "cuteness": 10
  }
]
```

This endpoint retrieves all kittens.

### HTTP Request

`GET http://example.com/api/kittens`

### Query Parameters

Parameter | Default | Description
--------- | ------- | -----------
include_cats | false | If set to true, the result will also include cats.
available | true | If set to false, the result will include kittens that have already been adopted.

<aside class="success">
Remember — a happy kitten is an authenticated kitten!
</aside>

## Get a Specific Kitten

```ruby
require 'kittn'

api = Kittn::APIClient.authorize!('meowmeowmeow')
api.kittens.get(2)
```

```python
import kittn

api = kittn.authorize('meowmeowmeow')
api.kittens.get(2)
```
> To retrieve a new access token after it has expired, use this code:

```shell
curl "http://example.com/api/kittens/2"
  -H "Authorization: meowmeowmeow"
```

> The above command returns JSON structured like this:

```json
{
  "access_token":"<yournewaccesstoken>",
  "token_type":"bearer",
  "expires_in":7200,
  "refresh_token":"<yournewrefreshtoken>",
  "scope":"public"
}
```

This endpoint retrieves a specific kitten.

<aside class="warning">If you're not using an administrator API key, note that some kittens will return 403 Forbidden if they are hidden for admins only.</aside>

### HTTP Request

`GET http://example.com/kittens/<ID>`

### URL Parameters

Parameter | Description
--------- | -----------
ID | The ID of the kitten to retrieve

