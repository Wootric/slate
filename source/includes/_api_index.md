---
title: API Reference

language_tabs:
  - shell

toc_footers:
  - © 2018 Wootric&nbsp; | &nbsp;Docs powered by <a href='http://github.com/tripit/slate'>Slate</a>

includes:
  - end_users
  - responses
  - declines
  - end_user_settings
  - nps_summary
  - errors

search: true
---

# Introduction

Welcome to the Wootric API documentation!

You can use our API to access and update your end users, responses and declines.

All responses from the API (including errors) are in JSON. All code examples are in cURL.

# Authentication
> To retrieve an access token using OAuth if you have one account on Wootric, use the following code:

```shell
curl -i https://api.wootric.com/oauth/token \
     -F grant_type=password \
     -F username=<youremailaddress> \
     -F password=<yourpassword>
```

> To retrieve an access token using OAuth if you multiple accounts on Wootric, you would need to pass your account token as query paarameter to the URL as following:

```shell
curl -i https://api.wootric.com/oauth/token?account_token=NPS-XXXX \
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

Access tokens can be retrieved using either grant_type of `password` with your account `email` and `password`, or grant_type of `client_credentials` with your application `client_id` and `client_secret`.

Wootric expects the  token to be included in all API requests regardless of grant_type of `password` or `client_credentials`. We recommend to send your token as HTTP `Authorization Header`, for example

`curl -H "Authorization: Bearer <youraccesstoken>" https://api.wootric.com/v1/end_users`

Access tokens expire 2 hours after creation. New access_token can be obtained using refresh tokens as detailed in the cURL example to the right.

<aside class="notice">
You must replace `myaccesstoken` with your personal Access Token.
</aside>

<aside class="notice">
Never send your credentials (password or client_secret) as query parameter to URL even when using POST request. Query parameters get logged in plain text as your API requests hop through different servers on the way to Wootric servers and hence it can be **exploited**.
</aside>

# Limits

```shell
$ curl -I -s -H "Authorization: Bearer <youraccesstoken>" -X GET "https://api.wootric.com/v1/end_users"
HTTP/1.1 200 OK
X-Rate-Limit-Limit: 100
X-Rate-Limit-Remaining: 97
X-Rate-Limit-Reset: 1537971859
```

We recently introduced usage limits to some of our API endpoints, which only allow for a certain number of requests within a minute. When that limit is reached, the API starts responding with HTTP status `429` and the client is only allowed to continue querying the API after a minute has passed. To find out if the endpoints you're using are affected by these limits and how many requests you're allowed to perform within a minute, check the `X-Rate-Limit-*` headers included in each API response (see below). If you can't find these headers it means that the endpoint is not limited.

Header | Description
--------- | -------
X-Rate-Limit-Limit | The maximum number of requests that the client can perform on this account within a minute.
X-Rate-Limit-Remaining | The number of remaining requests.
X-Rate-Limit-Reset | A timestamp indicating when the counter will be reset.

<aside class="notice">
If you find that the current rate limit on your account is too low for your needs, please contacts us.
</aside>
