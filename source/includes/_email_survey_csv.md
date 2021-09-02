#Email Survey CSV

This endpoint will let you send email surveys in bulk using a CSV file. The CSV file should contain at least an `email` column, the rest of the columns are either special columns (detailed below) or custom properties that will be added to the email surveys.

```sh
// Basic Example using a CSV file (FILE.csv)

curl "https://api.wootric.com/v1/email_survey_csv" \
  -d "access_token=XXXXXXXXXXXXXXXX" \
  -d "csv=FILE.csv"
  -d "survey_immediately=true" \
  -d "survey_settings[custom_messages][followup_text]=Thank you!" \
  -d "subject=Would you mind sharing your thoughts about our service?" \
  -d "intro=We want you to be our customer for life. That's why your opinion matters."
```

CSV file

email,segment1,segment2<br>
email@email.com,segment1_value,segment2_value<br>
email2@email.com,2segment1_value,2segment2_value<br>
email3@email.com,3segment1_value,3segment2_value<br>
email4@email.com,4segment1_value,4segment2_value<br>

Example:

email,First Name, Last Name, Company Name<br>
bob@inmoment.com,Bob,Smith,InMoment<br>
jane@inmoment.com,Jane,Jones,InMoment<br>
enrique@gmail.com,Enrique,Rodriguez,ER Inc.<br>

- Maximum of 5000 rows per request.
- We will automatically create end users if they don't exist.

## CSV Columns

- The first column of the CSV needs to be the email address and the column should be named `email`
- All the other columns will be treated as string properties unless they have a special column name

### Special columns names

- Context variables

&nbsp;&nbsp; `___context:var`

These "context" variables, if present, will be available as variables to use in variable interpolation.
For example if you pass the `subject` parameter as "Hello {{first_name}}!" and you add a context variable column to your CSV file (`___context:first_name`),
then each email survey (each row in the file) will use the value of the `___context:first_name` as `first_name` and that value will be interpolated to resolve the email subject. Resulting in email subjects like "Hello John!", "Hello Anne", etc.

- Language

&nbsp;&nbsp; `___language`

This corresponds to the language code that should be used for each row in the file.

1. For multi-language accounts only
2. If you use this column in your file you also need to pass the survey template that should be used as a parameter `survey_settings[survey_template_id]`, see the [survey temaplates API](#survey-templates) to see the list of survey temaplates and available languages that have been configured in your account.
3. All values for this column in the whole CSV file should match exactly with one of the configured language codes for the survey template that you are using.

- Integers, the column name should end with "_amount"

&nbsp;&nbsp; `price_amount`

- Dates, the column name should end with "_date"

&nbsp;&nbsp; `start_date`

<br>

Param | Type | Description
----- | ---- | ------------
csv   | File | CSV file with end user data **OR** a Base64 encoded String with CSV data ("Base 64 Encoding with URL and Filename Safe Alphabet" in [RFC 4648](https://datatracker.ietf.org/doc/html/rfc4648))
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

email,segment1,segment2,\_\_\_context:service,\_\_\_context:color<br>
email@email.com,segment1_value,segment2_value,internet,red<br>
email2@email.com,2segment1_value,2segment2_value,laundry,blue<br>

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

email,segment1,segment2,\_\_\_context:region,\_\_\_context:color<br>
email@email.com,segment1_value,segment2_value,southern,red<br>
email2@email.com,2segment1_value,2segment2_value,northern,blue<br>

```sh
# Example with multi-language
# Keep in mind that you will need to provide a valid survey_template_id that has settings
# for each one of the languages used in the CSV file (in the "___language" column)

curl "https://api.wootric.com/v1/email_survey_csv" \
  -d "access_token=XXXXXXXXXXXXXXXX" \
  -d "csv=FILE.csv" \
  -d "survey_immediately=true" \
  -d "survey_settings[survey_template_id]=888"
```

CSV

email,segment1,segment2,\_\_\_language<br>
email@email.com,segment1_value,segment2_value,en<br>
email2@email.com,2segment1_value,2segment2_value,es<br>
email3@email.com,3segment1_value,3segment2_value,en<br>


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

email,segment1,segment2<br>
email@email.com,segment1_value,segment2_value<br>
email2@email.com,2segment1_value,2segment2_value<br>
email3@email.com,3segment1_value,3segment2_value<br>
email4@email.com,4segment1_value,4segment2_value<br>

```sh
# Example of an 8 days delay

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

CSV

email,Region,Country,Project Name<br>
user1@gmail.com,EMEA,USA,Project One<br>
user2@gmail.com,LATAM,Argentina,Assessment Project<br>

Corresponding BASE64_STRING:

"ZW1haWwsUmVnaW9uLENvdW50cnksUHJvamVjdCBOYW1lCnVzZXIxQGdt<br>
YWlsLmNvbSxFTUVBLFVTQSxQcm9qZWN0IE9uZQp1c2VyMkBnbWFpbC5jb<br>
20sTEFUQU0sQXJnZW50aW5hLEFzc2Vzc21lbnQgUHJvamVjdA=="

```sh
# Example using a Base64 encoded string

curl "https://api.wootric.com/v1/email_survey_csv" \
  -d "access_token=XXXXXXXXXXXXXXXX" \
  -d "csv=$BASE64_STRING" \
  -d "survey_immediately=true"

```

<br>

### survey_settings parameters
Param | Type | Description
----- | ---- | ------------
logo_url | String
survey_template_id | Integer
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
