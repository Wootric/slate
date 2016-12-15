#Survey Types (BETA)
```js
//Example 1
var wootricSettings = {
    account_token: 'NPS-XXXXXXX',
    survey_type: 'ces'
}
// => How easy was it for you to complete this task or action?

//Example 2
var wootricSettings = {
    account_token: 'NPS-XXXXXXX',
    survey_type: 'ces',
    product_name: 'tag your responses on the Wootric tags tab',
}

// => How easy was it for you to tag your responses on the Wootric tags tab?

//Example 3
var wootricSettings = {
    account_token: 'NPS-XXXXXXX',
    survey_type: 'csat',
    product_name: 'the Wootric tags tab'
}

// => How satisfied are you with the Wootric tags tab?
```

Wootric allows you to operate your web survey using 3 different type of metrics:

- NPS (Net Promoter Score)
- CES (Customer Effort Score)
- CSAT (Customer Satisfaction Score)

In order to get any of these working you should pass the `survey_type` key with the desired survey_type value inside the wootricSettings hash.

If no value is specified the `NPS` will be used as default.

Product name can be customized for CSAT and CES too.

Additional notes:

- Promoter/Passive/Detractor features are disabled (custom thanks, custom placeholders, etc) for CES and CSAT modes
- Currently only supported in English and Spanish language
- Questions about this feature? Reach out at support@wootric.com
