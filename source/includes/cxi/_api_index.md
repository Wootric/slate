---
title: CXI API Reference

language_tabs:
  - shell

toc_footers:
  - © 2021 Wootric&nbsp; | &nbsp;Docs powered by <a href='http://github.com/tripit/slate'>Slate</a>

search: true
---

# Introduction

Welcome to the CXI API documentation!

You can use our API to access, create and update your imports and responses.

All HTTP responses from the API (including errors) are in JSON. All code examples are in cURL.

# Authentication

In order to use the CXI API you need to get an access token for your CXI account from the main Wootric Application, see [here](api#authentication) for more details

Access tokens can be retrieved using either grant_type of `password` with your account `email` and `password`, or grant_type of `client_credentials` with your application `client_id` and `client_secret`.

> To retrieve an access token using OAuth as following:

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

> The same but using credentials:

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

CXI expects the access token to be included in all API requests regardless of grant_type of `password` or `client_credentials`. We recommend to send your token as HTTP `Authorization Header`, for example

`curl -X GET -H "Authorization: Bearer <youraccesstoken>" https://cxi-api.wootric.com/v1/imports`

Access tokens expire 2 hours after creation. New access_token can be obtained using refresh tokens as detailed in the [Wootric Authentication section](api#authentication).

<aside class="notice">
You must replace `myaccesstoken` with your personal Access Token.
</aside>

<aside class="notice">
Never send your credentials (password or client_secret) as query parameter to URL even when using POST request. Query parameters get logged in plain text as your API requests hop through different servers on the way to Wootric servers and hence it can be **exploited**.
</aside>
