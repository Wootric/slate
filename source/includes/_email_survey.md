#Email Survey

```sh
// Basic Example

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
subject | String | Override default subject line (standard NPS/CES/CSAT question used by default). Can handle placeholder values surrounded by {{my_value}}
intro | String | Intro message for your email. Displayed between logo and question. Default: none. Can handle placeholder values surrounded by {{my_value}}
context | Hash Array | Array of hashes containing the values to be replaced in subject and/or intro
senders_name | String | Override senders name
reply_to_email | String | Override reply-to email
delay | Integer | Days we will wait before sending the survey. Delay is optional and it must be between 1 and 31 days.


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

```sh
# Example with custom intro and subject

curl "https://api.wootric.com/v1/email_survey" \
  -d "access_token=XXXXXXXXXXXXXXXX" \
  -d "emails[]=john@example.com" \
  -d "emails[]=martin@example.com" \
  -d "survey_immediately=true" \
  -d "survey_settings[logo_url]=https://company_logo_url.com" \
  -d "survey_settings[custom_messages][followup_text]=Thank you!" \
  -d "end_user[properties][campaign_name]=Campaign Name&end_user[properties][campaign_type]=Campaign Type" \
  -d "subject=Would you mind sharing your thoughts about our {{service}}?" \
  -d "intro=Tell us why you like {{color}} so much." \
  -d "context[][service]=internet, laundry" \
  -d "context[][color]=red, blue"
```

```sh
# Example with senders name and reply-to email

curl "https://api.wootric.com/v1/email_survey" \
  -d "access_token=XXXXXXXXXXXXXXXX" \
  -d "emails[]=john@example.com" \
  -d "survey_immediately=true" \
  -d "senders_name=Sender Name" \
  -d "reply_to_email=replyto@email.com"
```

```sh
# Example of an 8 day delay

curl "https://api.wootric.com/v1/email_survey" \
  -d "access_token=XXXXXXXXXXXXXXXX" \
  -d "emails[]=john@example.com" \
  -d "survey_immediately=true" \
  -d "delay=8"
```

```sh
# Example of sampling override.

curl "https://api.wootric.com/v1/email_survey" \
  -d "access_token=XXXXXXXXXXXXXXXX" \
  -d "emails[]=john@example.com" \
  -d "survey_settings[sampling][first_survey_delay]=10" \
  -d "survey_settings[sampling][registered_percent]=50"
```

### survey_settings parameters
Param | Type | Description
----- | ---- | ------------
language | String
logo_url | String
audience_text | String
product_name | String
custom_messages | Hash | See **custom_messages** parameters below
sampling | Hash | See **sampling** parameters below

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

### sampling parameters
You may use these parameters to overwrite the settings you have in your Wootric settings panel.

Param | Type | Description
----- | ---- | ----
first_survey_delay | Integer | Number of days that have to pass since end user's created_at to show a survey
response_throttle | Integer | Number of days that have to pass after answering a survey to be eligible again
decline_throttle | Integer | Number of days that have to pass after declining a survey to be eligible again
registered_percent | Integer | Chances from 0 to 100 to serve a survey
