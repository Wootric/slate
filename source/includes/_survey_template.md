#Survey Templates

```sh
# Example with custom product_name and audience_text

curl -H "Authorization: Bearer myaccesstoken" "https://api.wootric.com/v1/survey_templates?access_token=account_access_token"
```


```json
// Response

{
  "default_survey_template_id": XXXX,
  "survey_templates": [
    {
      "id": XXXX,
      "name": "Your default NPS survey",
      "default_language": "en",
      "languages": [
        {"code":"en","name":"English"},
        {"code":"es","name":"Spanish"}
      ],
      "non_configured_language_count":1,
      "custom_samplings":[]
    },
    {
      "id": XXXX,
      "name":"Alternate Survey",
      "default_language":"es",
      "languages": [
        {"code":"es","name":"Spanish"},
        {"code":"en","name":"English"}
      ],
      "non_configured_language_count": 2,
      "custom_samplings":[]
    }
  ]
}
```
