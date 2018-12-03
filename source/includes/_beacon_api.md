# Wootric Survey Object API

```js
var wootricSettings = {
    account_token: 'NPS-XXXXXXX'
}

//run
WootricSurvey.run(wootricSettings); OR wootric('run')

//stop
WootricSurvey.stop();

//Version
WootricSurvey.version();

// => "8f2a6414b81db4a57ead648379fb48ddfee5c3d1"
```

The Wootric Survey object exposes the following methods:

- **run(settings)** <br>
Shows a survey honoring the passed settings

- **stop()** <br>
Hides a survey if it's displayed without generating a decline.<br>
If the delay time is still running stop will abort that survey from happening.

- **version() : string** <br>
Returns WootricSurvey's object current version
