# Outgoing Webhooks

Wootric can send an HTTP POST request to a specified URL when an event occurs. See the list of supported events below.

## List of events and their payload

```javascript
/* JSON: response created sample payload */
{
  "response": {
    "id": 1128,
    "email": "nps@example.com",
    "external_id": "123abc",
    "score": 7,
    "text": null,
    "ip_address": "127.0.0.1",
    "origin_url": "https://wootric.com/",
    "end_user_id": 30,
    "end_user_properties": {
      "pricing_plan": "Enterprise",
      "product_plan": "Web App"
    },
    "survey_id": 1146,
    "created_at": "2016-08-04T13:57:26.558-07:00",
    "updated_at": "2016-08-04T13:57:26.558-07:00",
    "excluded_from_calculations": false
  },
  "event_name": "created",
  "timestamp": "2016-08-04T13:57:31.329-07:00",
  "account_token": "NPS-xxxxxxxx",
  "survey_mode": "NPS"
}

/* JSON: decline created sample payload */
{
  "decline": {
    "id": 19,
    "email": "nps@example.com",
    "external_id": "123abc",
    "ip_address": "127.0.0.1",
    "origin_url": "https://wootric.com/",
    "end_user_id": 31,
    "end_user_properties": {
      "pricing_plan": "Pro",
      "product_plan": "Web App"
    },
    "survey_id": 1147,
    "created_at": "2016-08-04T13:58:21.122-07:00",
    "updated_at": "2016-08-04T13:58:21.122-07:00",
  },
  "event_name": "created",
  "timestamp": "2016-08-04T13:58:23.309-07:00",
  "account_token": "NPS-xxxxxxxx",
  "survey_mode": "NPS"
}
```

```ruby
# URL Encoded: response created sample payload
response[id]=1128&
response[email]=nps%40example.com&
response[external_id]=123abc&
response[score]=7&
response[text]=&
response[ip_address]=127.0.0.1&
response[origin_url]=https%3A%2F%2Fwootric.com%2F&
response[end_user_id]=30&
response[end_user_properties][pricing_plan]=Enterprise&
response[end_user_properties][product_plan]=Web%20App&
response[survey_id]=1146&
response[created_at]=2016-08-04%2013%3A57%3A26%20-0700&
response[updated_at]=2016-08-04%2013%3A57%3A26%20-0700&
response[excluded_from_calculations]=false&
event_name=created&
timestamp=2016-08-04%2013%3A57%3A31%20-0700&
account_token=NPS-xxxxxxxx&
survey_mode=NPS

# URL Encoded: decline created sample payload
decline[id]=19&
decline[email]=nps@example.com&
decline[external_id]=123abc&
decline[ip_address]=127.0.0.1&
decline[origin_url]=https%3A%2F%2Fwootric.com%2F&
decline[end_user_id]=31&
decline[end_user_properties][pricing_plan]=Pro&
decline[end_user_properties][product_plan]=Web%20App&
decline[survey_id]=1147&
decline[created_at]=2016-08-04%2013%3A58%3A21%20-0700&
decline[updated_at]=2016-08-04%2013%3A58%3A21%20-0700&
event_name=created&
timestamp=2016-08-04%2013%3A58%3A23%20-0700&
account_token=NPS-xxxxxxxx&
survey_mode=NPS
```

* **Response created:** An end user responded to a survey.
* **Response updated:** An end user changed the score or added feedback to a response.
* **Decline created:** An end user dismissed the survey popup.

## Setup

Webhooks are enabled in the **Outgoing Webhooks** page in the settings, by selecting the required events and adding the URL. The specified URL needs to be publicly accessible.

That's it! Wootric will be sending a POST request to the specified URL when the event happens!

## Security

```ruby
require 'cuba'
require 'openssl'
require 'json'

Cuba.define do
  on post do
    on root do
      body = req.body.read
      req.body.rewind
      calculated_digest = OpenSSL::HMAC.hexdigest('sha1', '09dfb1b73af998743fb011f8bfda8912', body)

      if Rack::Utils.secure_compare(req.env['HTTP_X_WOOTRIC_SIGNATURE'], "sha1=#{calculated_digest}")
        # Attempt to parse JSON. Otherwise use URL encoded.
        # This example accepts boths formats. You can select the desired format
        # when the webhook is configured.
        parsed_payload = JSON.parse(body) rescue req.params
        if parsed_payload.has_key?('response')
          case parsed_payload['event_name']
          when 'created'
            puts "Response submitted with a score of #{parsed_payload['response']['score']}."
          when 'updated'
            puts "Response updated with a score of #{parsed_payload['response']['score']} "\
              "and the following comment: #{parsed_payload['response']['text']}."
          end
        elsif parsed_payload.has_key?('decline')
          puts 'Survey declined.'
        end
      else
        puts "Ignoring request with invalid signature from ip #{req.ip}."
      end

      res.write ''
    end
  end
end
```

In order to verify that the request actually came from our servers, we include the `HTTP_X_WOOTRIC_SIGNATURE` header, which is an HMAC-SHA1 signature of the payload using the secret token for your account. You can get this token in the **Outgoing Webhooks** configuration page.
