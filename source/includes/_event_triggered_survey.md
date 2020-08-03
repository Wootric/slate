#Event Triggered Survey

```javascript
wootricSettings = {
  account_token: 'NPS-YOURTOKEN',
  email: 'user@example.com',
  created_at: 1528416000,
  properties: {
    favorite_color: 'blue'
  }
};

// You assign the event name when a given action happens
wootricSettings.event_name = 'on_purchase'

// You call Wootric whenever you want to check if the event you set might be eligible for a survey
wootric('run');
```

When you install Wootric via our Segment integration events are automatically passed to us and you can trigger surveys based on them.

This article will help you to set up your Wootric Targeted Sampling Surveys using a native Wootric installation.

Prerequisites:

- Your account must be using [Wootric’s Targeted Sampling](http://help.wootric.com/en/articles/3472284-how-do-i-setup-targeted-sampling-for-in-app-surveys)
For JavaScript installations: SDK version 1.1.0 or newer. You can check your version by running `WootricSurvey.version()` in the browser’s console whenever your Wootric snipped is embedded.

For more details, please check [following article](http://help.wootric.com/en/articles/4136958-how-to-pass-events-in-your-native-wootric-sdk-installs).
