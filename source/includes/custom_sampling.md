# Advanced Feature: Custom Sampling Settings

Wootric allows you to change some of the default sampling settings to suit your needs.

## wootric_first_survey

This allows you to set the number of days after a new user signs up that
you wish to wait before he sees his first survey. By default this is set to 31 days from
created_at. Please make sure that you are sending us the users created_at date. (Format is an
integer number of days).

```javascript
<!--­­ begin Wootric code ­­-->
<script type="text/javascript">
wootric_first_survey=45;//User becomes eligible 45 days from created_at.
window.wootricSettings = {
  email:'nps@example.com', // TODO: The current user's email address.
  created_at: 1234567890, // TODO: The current user's sign­up date as a Unix timestamp.
  product_name: 'Wootric', // TODO: The name of the product or service
  account_token: 'NPS­xxxxxxxx' };
</script>
....//The rest of the widget...
<!--­­ end Wootric code --­­>
```

## wootric_time_delay

This setting delays the Wootric modal from appearing on a page by a
certain length of time from when the page loads, in seconds. The default is no delay. (Format is
an integer number of seconds).

```javascript
<!--­­ begin Wootric code ­­-->
<script type="text/javascript">
wootric_time_delay=5;//Delay modal on page by integer number of seconds.
window.wootricSettings = {
  email:'nps@example.com', // TODO: The current user's email address.
  created_at: 1234567890, // TODO: The current user's sign­up date as a Unix timestamp.
  product_name: 'Wootric', // TODO: The name of the product or service
  account_token: 'NPS­xxxxxxxx' };
</script>
....//The rest of the widget...
<!--­­ end Wootric code --­­>
```

## wootric_survey_immediately
Set this to true to override our proprietary sampling
methodology and fire the survey immediately for that user on that page. (Format is a boolean
value).

```javascript
<!--­­ begin Wootric code ­­-->
<script type="text/javascript">
wootric_survey_immediately=true;//Override sampling and fire immediately
window.wootricSettings = {
  email:'nps@example.com', // TODO: The current user's email address.
  created_at: 1234567890, // TODO: The current user's sign­up date as a Unix timestamp.
  product_name: 'Wootric', // TODO: The name of the product or service
  account_token: 'NPS­xxxxxxxx' };
</script>
....//The rest of the widget...
<!--­­ end Wootric code --­­>
```

## wootric_registered_percent
This allows you to set the percentage of your registered user
traffic that you wish to sample in a 3 month period. By default, this is set to 33% or a registered
user who visits your site has a 1 in 3 chance of being served the survey in a 3 month period.
Make sure that you are sending us an email address for the registered user. (Format is an
integer percentage).

```javascript
<!--­­ begin Wootric code ­­-->
<script type="text/javascript">
wootric_registered_percent=33;//Percentage of registered users to sample
window.wootricSettings = {
  email:'nps@example.com', // TODO: The current user's email address.
  created_at: 1234567890, // TODO: The current user's sign­up date as a Unix timestamp.
  product_name: 'Wootric', // TODO: The name of the product or service
  account_token: 'NPS­xxxxxxxx' };
</script>
....//The rest of the widget...
<!--­­ end Wootric code --­­>
```

## wootric_visitor_percent
This allows you to set the percentage of your visitor traffic (non
registered users) that you wish to sample in a 3 month period. By default, this is set to 1% or a
visitor to your site has a 1 in 100 chance of being served the survey in a 3 month period. This
setting is only for unknown users. (Format is an integer percentage).

```javascript
<!--­­ begin Wootric code ­­-->
<script type="text/javascript">
wootric_visitor_percent=10;//Percentage of visitors to sample
window.wootricSettings = {
  product_name: 'Wootric', // TODO: The name of the product or service
  account_token: 'NPS­xxxxxxxx' };
</script>
....//The rest of the widget...
<!--­­ end Wootric code --­­>
```
