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

You can use our API to access your end users, responses, declines and page views.

JSON will be returned in all responses from the API including errors. We currently have code examples using curl, you can view code examples in the dark area to the right.

# Authentication

Access token can be retrieved using either grant_type of "password" with your account email and password, or grant_type of "client_credentials" with your application client_id and client_secret.

Wootric expects for the access token key to be included in all API requests that looks like the following for grant_type of "password":

`https://api.wootric.com/v1/end_users.json?access_token=myaccesstoken`

If you are using grant_type of "client_credentials" you need to send the access token as a request header:

`Authorization: Bearer <myaccesstoken>`

Access token expires 2 hours after creation. New Access tokens can be obtained using refresh tokens which is detailed in the CURL example to the right.

<aside class="notice">
You must replace `myaccesstoken` with your personal Access Token.
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

> To retrieve an access token using credentials, use this code:

```shell
curl -X POST https://api.wootric.com/oauth/token \
-F grant_type=client_credentials \
-F client_id=<yourclientid> \
-F client_secret=<yourclientsecret>
```

> The above command returns JSON structured like this:

```json
{
  "access_token":"<youraccesstoken>",
  "token_type":"bearer",
  "expires_in":7200,
  "scope":"public"  
}
```
