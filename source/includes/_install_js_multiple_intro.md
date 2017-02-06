# Run Multiple Surveys

```javascript
if (show_nps_survey) {
  window.wootricSettings = {
    email:'nps@example.com', // TODO: The current logged in user's email address.
    created_at: 1234567890, // TODO: The current logged in user's sign-up date as a Unix timestamp.
    account_token: 'NPS-xxxxxxx'
  };
} else if (show_ces_survey) {
  window.wootricSettings = {
    email:'nps@example.com', // TODO: The current logged in user's email address.
    created_at: 1234567890, // TODO: The current logged in user's sign-up date as a Unix timestamp.
    account_token: 'NPS-yyyyyyy'
  };
}
```

Wootric allows you to run multiple types of surveys within the same app: 
NPS, CES and CSAT. There will never be more than one survey shown, and each 
survey can be customized with its own settings.

**Note:** This method is for advanced/custom installations only. If you need 
help with your installation contact [support](mailto: support@wootric.com).

To run multiple surveys, you'll need to write code to decide when to display 
each survey. Check that you only load one survey per page, and that you call 
`WootricSurvey.run()` once. Calling `WootricSurvey.run()` multiple times with 
different settings will break your installation.
