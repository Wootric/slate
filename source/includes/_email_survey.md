#Email Survey

```sh
curl "https://api.wootric.com/v1/email_survey" \
  -d "access_token=myaccesstoken" \
  -d "emails[]=john@example.com" \
  -d "emails[]=jane@example.com" \
  -d "survey_immediately=true" \
  -d "survey_settings[custom_messages][followup_text]=Thank you!" \
  -d "subject=Would you mind sharing your thoughts about our service?" \
  -d "intro=We want you to be our customer for life. That's why your opinion matters."
```

- Maximum of 100 emails per request.
- We will automatically create an end user if they don't exist.

Param | Type | Description
----- | ---- | ------------
emails | String Array | End user emails to survey
survey_immediately | Boolean | Override eligibility check
end_user | Hash | End user properties name as `String`
survey_settings | Hash | See **survey_settings** parameters below
subject | String | Override default subject line (standard NPS/CES/CSAT question used by default)
intro | String | Intro message for your email. Displayed between logo and question. Default: none.

Email Survey showing Subject and Intro:
![Compact Survey](email_survey.png)

```sh
# Example with end_user properties

curl "https://api.wootric.com/v1/email_survey" \
  -d "access_token=XXXXXXXXXXXXXXXX" \
  -d "emails[]=john@example.com" \
  -d "survey_immediately=true" \
  -d "survey_settings[custom_messages][followup_text]=Thank you!" \
  -d "end_user[properties][campaign_name]=Campaign Name&end_user[properties][campaign_type]=Campaign Type"
```

### survey_settings parameters
Param | Type | Description
----- | ---- | ------------
language | String
audience_text | String
product_name | String
custom_messages | Hash | See **custom_messages** parameters below

### custom_messages parameters
Param | Type
----- | ----
followup_text | String
detractor_followup_text | String
passive_followup_text | String
promoter_followup_text | String
prompt_text | String
detractor_prompt_text | String
passive_prompt_text | String
promoter_prompt_text | String
