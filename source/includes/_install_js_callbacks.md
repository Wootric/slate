# Callbacks

```javascript
wootricSettings = {
  account_token: 'NPS-XXXXXXX',
  email: 'nps@example.com',
  created_at: 1528416000,
  callbacks: {
    after_eligible: function(eligible) {
      console.log('Eligibility returned:', eligible);
    },
    after_show: function() {
      console.log('The Wootric modal is visible');
    },
    after_response: function(score, text) {
      console.log('A response has been submitted with score:', score, 'and text', text);
    },
    after_decline: function() {
      console.log('A decline has been submitted');
    }
  }
};
```

The Wootric SDK allows you to use callbacks after certain events have happened. You can also get information from some of the events. The list of events that you can subscribe to goes as follow:

- after_eligible: This callback runs after the request from Wootric's eligibility server returns. It can tell you if you are eligible for a survey or not.
- after_show: This callback runs after the survey is displayed.
- after_response: This callback runs after the survey is answered. It was also run if the survey is updated. (e.g. score changes) The callback function will receive the score and text.
- after_decline: This callback runs after a decline is created.

To use callbacks, define them inside of a wootricSettings.callbacks object mapping event to callback function.
