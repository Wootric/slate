#Email Survey CSV

```sh
// Basic Example

curl "https://api.wootric.com/v1/email_survey_csv" \
  -d "access_token=XXXXXXXXXXXXXXXX" \
  -d "csv=FILE.csv"
  -d "survey_immediately=true" \
  -d "survey_settings[custom_messages][followup_text]=Thank you!" \
  -d "subject=Would you mind sharing your thoughts about our service?" \
  -d "intro=We want you to be our customer for life. That's why your opinion matters."
```

CSV file 

email,segment1,segment2
email@email.com,segment1_value,segment2_value
email2@email.com,2segment1_value,2segment2_value
email3@email.com,3segment1_value,3segment2_value
email4@email.com,4segment1_value,4segment2_value

- Maximum of 5000 rows per request.
- We will automatically create an end user if they don't exist. ???

Param | Type | Description
----- | ---- | ------------
csv   | File | CSV file with end user data
subject | String | Override default subject line (standard NPS/CES/CSAT question used by default). Can handle placeholder values surrounded by {{my_value}}
intro | String | Intro message for your email. Displayed between logo and question. Default: none. Can handle placeholder values surrounded by {{my_value}}
context | Hash Array | Array of hashes containing the values to be replaced in subject and/or intro
senders_name | String | Override senders name
reply_to_email | String | Override reply-to email
delay | Integer | Days we will wait before sending the survey. Delay is optional and it must be between 1 and 31 days.
delivery_time | String | UTC time of the day to deliver emails (format: hh:mm) in 24 hs format.
custom_sender_email | String | Custom sender email.
send_to_email_field | String | Column containing the email address of the receiver.
unique_identifier_field | String | Field used to set the email of the end user (require send_to_email_field).
survey_immediately | Boolean | Override eligibility check
survey_settings | Hash | See **survey_settings** parameters below


Email Survey showing Subject and Intro:
![Compact Survey](email_survey.png)

```sh
# Example with custom intro and subject

curl "https://api.wootric.com/v1/email_survey_csv" \
  -d "access_token=XXXXXXXXXXXXXXXX" \
  -d "csv=FILE.csv" \
  -d "survey_immediately=true" \
  -d "survey_settings[logo_url]=https://company_logo_url.com" \
  -d "survey_settings[custom_messages][followup_text]=Thank you!" \
  -d "subject=Would you mind sharing your thoughts about our {{service}}?" \
  -d "intro=Tell us why you like {{color}} so much."
```

CSV

email,segment1,segment2,\_\_\_context:service,\_\_\_context:color
email@email.com,segment1_value,segment2_value,internet,red
email2@email.com,2segment1_value,2segment2_value,laundry,blue

```sh
# Example with custom product_name and audience_text

curl "https://api.wootric.com/v1/email_survey_csv" \
  -d "access_token=XXXXXXXXXXXXXXXX" \
  -d "csv=FILE.csv" \
  -d "survey_immediately=true" \
  -d "survey_settings[audience_text]={{region}} division" \
  -d "survey_settings[product_name]=Our Product {{color}}"
```

CSV

email,segment1,segment2,\_\_\_context:region,\_\_\_context:color
email@email.com,segment1_value,segment2_value,southern,red
email2@email.com,2segment1_value,2segment2_value,northern,blue

```sh
# Example with multi-language
# Keep in mind that you will need to provide a valid survey_template_id
# that include all the languages required on the CSV

curl "https://api.wootric.com/v1/email_survey_csv" \
  -d "access_token=XXXXXXXXXXXXXXXX" \
  -d "csv=FILE.csv" \
  -d "survey_immediately=true" \
  -d "survey_settings[survey_template_id]=888"
```

CSV

email,segment1,segment2,\_\_\_language
email@email.com,segment1_value,segment2_value,en
email2@email.com,2segment1_value,2segment2_value,es
email2@email.com,2segment1_value,2segment2_value,en


```sh
# Example with senders name and reply-to email

curl "https://api.wootric.com/v1/email_survey_csv" \
  -d "access_token=XXXXXXXXXXXXXXXX" \
  -d "csv=FILE.csv" \
  -d "survey_immediately=true" \
  -d "senders_name=Sender Name" \
  -d "reply_to_email=replyto@email.com"
```
CSV

email,segment1,segment2
email@email.com,segment1_value,segment2_value
email2@email.com,2segment1_value,2segment2_value
email3@email.com,3segment1_value,3segment2_value
email4@email.com,4segment1_value,4segment2_value

```sh
# Example of an 8 day delay

curl "https://api.wootric.com/v1/email_survey_csv" \
  -d "access_token=XXXXXXXXXXXXXXXX" \
  -d "csv=FILE.csv" \
  -d "survey_immediately=true" \
  -d "delay=8"
```

```sh
# Example of sampling override.

curl "https://api.wootric.com/v1/email_survey_csv" \
  -d "access_token=XXXXXXXXXXXXXXXX" \
  -d "csv=FILE.csv" \
  -d "survey_settings[sampling][first_survey_delay]=10" \
  -d "survey_settings[sampling][registered_percent]=50"
```

<br />

### survey_settings parameters
Param | Type | Description
----- | ---- | ------------
language | String
logo_url | String
audience_text | String | Can handle placeholder values surrounded by {{my_value}}
product_name | String | Can handle placeholder values surrounded by {{my_value}}
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
