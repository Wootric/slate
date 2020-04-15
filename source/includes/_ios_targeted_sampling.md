# Targeted Sampling

```objective_c
NSString *clientID = @"CLIENT_ID";
NSString *accountToken = @"ACCOUNT_TOKEN";

[Wootric configureWithClientID:clientID accountToken:accountToken];
[Wootric setEndUserEmail:@"nps@example.com"];
[Wootric setEndUserCreatedAt:@1234567890];
[Wootric setEndUserProperties:@{ @"Example_string": @"pro_plan", @"Example_value": @12}];

[Wootric showSurveyInViewController:self event:@"On Purchase Event"];
```
```swift
let clientID = "CLIENT_ID"
let accountToken = "ACCOUNT_TOKEN"

Wootric.configure(withClientID: clientID, accountToken: accountToken)
Wootric.endUserEmail = "nps@example.com"
Wootric.endUserCreatedAt = NSNumber(value: 1234567890)
Wootric.endUserProperties = [
  "Example_string": "pro_plan",
  "Example_value": NSNumber(value: 12)
]

Wootric.showSurvey(inViewController: self, event: "On Purchase Event")
```
```swift_three
let clientID = "CLIENT_ID"
let accountToken = "ACCOUNT_TOKEN"

Wootric.configure(withClientID: clientID, accountToken: accountToken)
Wootric.endUserEmail = "nps@example.com"
Wootric.endUserCreatedAt = NSNumber(value: 1234567890)
Wootric.endUserProperties = [
  "Example_string": "pro_plan",
  "Example_value": NSNumber(value: 12)
]

Wootric.showSurvey(inViewController: self, event: "On Purchase Event")
```

You can trigger surveys based on an end-user's property, an event that you might be tracking in your app or a combination of both. You must configure the rules that trigger these surveys inside Wootric Settings Panel.

To set the properties for the end user you can pass a dictionary to
the `setEndUserProperties` method.

To trigger a survey with an event you ned to use
`showSurveyInViewController:event:`.


For more information on how to configure Targeted Sampling, visit
[How do I setup targeted sampling for in-app surveys?](http://help.wootric.com/en/articles/3472284-how-do-i-setup-targeted-sampling-for-in-app-surveys)
