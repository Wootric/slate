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
  - end_user_settings
  - errors

search: true
---

# Introduction

Welcome to the Wootric API documentation!

You can use our API to access and update your end users, responses, declines, and page views.

All responses from the API (including errors) are in JSON. All code examples are in cURL.

# Authentication
> To retrieve an access token using OAuth, use the following code:

```shell
curl -i https://api.wootric.com/oauth/token \
     -F grant_type=password \
     -F username=<youremailaddress> \
     -F password=<yourpassword>
```

> The above command returns the following JSON:

```json
{
  "access_token":"<youraccesstoken>",
  "token_type":"bearer",
  "expires_in":7200,
  "refresh_token":"<yourrefreshtoken>",
  "scope":"public"
}
```

> To retrieve a new access token after it has expired, use this code:

```shell
curl -i https://api.wootric.com/oauth/token \
     -F grant_type=refresh_token \
     -F refresh_token="<yourrefreshtoken>"
```

> The above command returns the following JSON:

```json
{
  "access_token":"<yournewaccesstoken>",
  "token_type":"bearer",
  "expires_in":7200,
  "refresh_token":"<yournewrefreshtoken>",
  "scope":"public"
}
```

> To retrieve an access token using credentials, use this code:

```shell
curl -X POST https://api.wootric.com/oauth/token \
     -F grant_type=client_credentials \
     -F client_id=<yourclientid> \
     -F client_secret=<yourclientsecret>
```

> The above command returns the following JSON:

```json
{
  "access_token":"<youraccesstoken>",
  "token_type":"bearer",
  "expires_in":7200,
  "scope":"public"  
}
```

Access tokens can be retrieved using either grant_type of `password` with your account `email` and ``password`, or grant_type of `client_credentials` with your application `client_id` and `client_secret`.

Wootric expects the  token to be included in all API requests regardless of grant_type of `password` or `client_credentials`. We recommend to send your token as HTTP `Authorization Header`, for example

`curl -H "Authorization: Bearer <youraccesstoken>" https://api.wootric.com/v1/end_users`

Token can be sent as query paramters as well but we **do not recommend** it for security purposes. For example

`https://api.wootric.com/v1/end_users?access_token=myaccesstoken`

Access tokens expire 2 hours after creation. New access_token can be obtained using refresh tokens as detailed in the cURL example to the right.

<aside class="notice">
You must replace `myaccesstoken` with your personal Access Token.
</aside>

<aside class="notice">
Never send your credentials (password or client_secret) as query paramter to URL even when using POST request. Query parameters get logged in plain text as your API requests hop through different servers on the way to Wootric servers and hence it can be **exploited**.
</aside>
