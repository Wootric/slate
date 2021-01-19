# Tags

## Tag Object

A Tag object has the following fields:

Attribute | Type | Description
--------- | ------- | -----------
id | integer | The ID of tag
name | string | Tag's name
display_name | string | Tag's display name
description | string | Tag's description
mode | string | Tag's mode, one of `manual`, `smart` or `text_match`
enabled | boolean | A boolean indicating whether the tag is enabled or not
text_match_terms | string[] | An Array of strings indicating the terms that'd be used to match this tag. Only applies to text-match tags.
filter_rules | Hash | a Hash of conditions (or filters) that should be satisfied before applying this tag to a response. Only applies to text-match tags.
sentiment_breakdown | Hash | Sentiment percentage breakdown for this tag, `positive`, `negative`, `neutral` and `null` are the possible keys.
children | Tag[] | Array of Tags that are children of this parent tag

## Get tags

This endpoint gets all tags in your account

```shell
curl -s -H "Authorization: Bearer myaccesstoken" -X GET "https://cxi-api.wootric.com/v1/tags" | jq
```

> The above command returns a JSON response similar to this:

```json
[
  {
    "id": 46,
    "name": "PERFORMANCE",
    "display_name": "PERFORMANCE",
    "description": null,
    "mode": "smart",
    "enabled": true,
    "scope_by_parent": null,
    "text_match_terms": [],
    "filter_rules": {},
    "response_count": 39,
    "usage": 48.148148148148145,
    "sentiment_breakdown": {
      "positive": 46.15,
      "neutral": 17.95,
      "negative": 35.9,
      "null": 0
    },
    "children": []
  },
  {
    "id": 49,
    "name": "UX_UI",
    "display_name": "UX_UI",
    "description": null,
    "mode": "smart",
    "enabled": true,
    "scope_by_parent": null,
    "text_match_terms": [],
    "filter_rules": {},
    "response_count": 38,
    "usage": 46.913580246913575,
    "sentiment_breakdown": {
      "positive": 36.84,
      "neutral": 18.42,
      "negative": 44.74,
      "null": 0
    },
    "children": []
  },
  ...
]
```

### HTTP Request

`GET https://cxi-api.wootric.com/v1/tags`

### URL Parameters

Parameter | Type | Default | Description
--------- | ---- | ------- | -----------
page (optional)| integer | 1 | Number of returned page, max 30
per_page (optional) | integer | 25 | Number of records returned on each page, max 50
flat | boolean | false | Return children tags inside a `children` array in the parent tag object (hierarchy), or return children tags on their own (flat)
sort | string | response_count descending | How to sort results, possible values: `name_asc`, `name_desc` and `responses_asc`. The default is to sort results by response count in descending mode.
search | string | nil | Used to search (full text search) for matching tag names
no_stats | boolean | false | Whether to include usage data statistics or not
exclude_disabled | boolean | false | If true then only enabled tags will be returned

## Create a Tag

This endpoint creates a tag in your account, only manual and text-match tags can be created.

```shell
curl -s -H "Authorization: Bearer myaccesstoken" -X POST "https://cxi-api.wootric.com/v1/tags" \
  -F tag[name]=my-tag \
  -F tag[description]="the descrition" \
  -F tag[mode]=text_match \
  -F tag[text_match_terms][]="term1" \
  -F tag[text_match_terms][]="term2" \
  -F tag[text_match_terms][]="term3" \
  | jq
```

> The above command returns a JSON response similar to this:

```json
{
  "id": 78,
  "name": "MY-TAG",
  "display_name": "MY-TAG",
  "description": "the descrition",
  "mode": "text_match",
  "enabled": true,
  "scope_by_parent": false,
  "text_match_terms": [
    "term1",
    "term2",
    "term3"
  ],
  "filter_rules": {}
}
```

### HTTP Request

`POST https://cxi-api.wootric.com/v1/tags`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -------
tag[name] | string | The tag's name
tag[description] | string | Tag's description
tag[mode] | string | Tag's mode, one of `manual` or `text_match`
tag[parent_id] | integer | The ID of a Tag that will be used as parent for this tag
tag[text_match_terms] | string[] | An Array of strings indicating the terms that'd be used to match this tag. Only applies to text-match tags. Max: 100
tag[filter_rules] | Hash | a Hash of conditions (or filters) that should be satisfied before applying this tag to a response. Only applies to text-match tags.

## Update a Tag

This endpoint updates a tag in your account

```shell
curl -s -H "Authorization: Bearer myaccesstoken" -X PUT "https://cxi-api.wootric.com/v1/tags/78" \
  -F tag[name]=my-updated-tag \
  -F tag[description]="the updated descrition" \
  -F tag[text_match_terms][]="term3" \
  -F tag[text_match_terms][]="term4" \
  | jq
```

> The above command returns a JSON response similar to this:

```json
{
  "id": 78,
  "name": "MY-UPDATED-TAG",
  "display_name": "MY-UPDATED-TAG",
  "description": "the updated descrition",
  "mode": "text_match",
  "enabled": true,
  "scope_by_parent": false,
  "text_match_terms": [
    "term3",
    "term4"
  ],
  "filter_rules": {}
}
```

### HTTP Request

`PUT https://cxi-api.wootric.com/v1/tags/<ID>`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -------
tag[name] | string | The tag's name
tag[description] | string | Tag's description
tag[mode] | string | Tag's mode, one of `manual` or `text_match`
tag[parent_id] | integer | The ID of a Tag that will be used as parent for this tag
tag[text_match_terms] | string[] | An Array of strings indicating the terms that'd be used to match this tag. Only applies to text-match tags. Max: 100
tag[filter_rules] | Hash | a Hash of conditions (or filters) that should be satisfied before applying this tag to a response. Only applies to text-match tags.

## Delete a Tag

This endpoint deletes a tag in your account

```shell
curl -s -H "Authorization: Bearer myaccesstoken" -X DELETE "https://cxi-api.wootric.com/v1/tags/78" | jq
```

> The above command returns an empty response with status 200.

### HTTP Request

`DELETE https://cxi-api.wootric.com/v1/tags/<ID>`
