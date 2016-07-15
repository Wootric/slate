# Per view configuration

While Wootric is using values you have set in admin panel, it is possible to override these values directly in code.

##setCustomNPSQuestion
```objective_c
[Wootric setCustomNPSQuestion:<NPS_QUESTION>];
```
```swift
Wootric.setCustomNPSQuestion(<NPS_QUESTION>)
```
Changes NPS Question from admin panel to provided value (English default is "How likely are you to recommend this product or service to a friend or co-worker?").

##setCustomFinalThankYou
```objective_c
[Wootric setCustomFinalThankYou:<FINAL_THANK_YOU>];
```
```swift
Wootric.setCustomFinalThankYou(<FINAL_THANK_YOU>)
```
Changes final thank you from admin panel to provided value (English default is "Thank you for your response, and your feedback!).

##setCustomValueForResurveyThrottle:visitorPercentage:registeredPercentage:dailyResponseCap:
```objective_c
// You can pass nil value for any of the parameters - it will use defaults for eligibility check if you do so.
[Wootric setCustomValueForResurveyThrottle:<NUMBER_OF_DAYS> visitorPercentage:<0-100> registeredPercentage:<0-100> dailyResponseCap:<0-...>];
```
```swift
// You can pass nil value for any of the parameters - it will use defaults for eligibility check if you do so.
Wootric.setCustomValueForResurveyThrottle(<NUMBER_OF_DAYS>, visitorPercentage:<0-100>, registeredPercentage:<0-100>, dailyResponseCap:<0-...>)
```
This method will alter the values of resurvey throttle, tested visitor, registered users percentage and daily response cap used for eligibility check.

##setCustomFollowupQuestionForPromoter:passive:detractor:
```objective_c
[Wootric setCustomFollowupQuestionForPromoter:<CUSTOM_QUESTION> passive:<CUSTOM_QUESTION> detractor:<CUSTOM_QUESTION>];
```
```swift
Wootric.setCustomFollowupQuestionForPromoter(<CUSTOM_QUESTION>, passive:<CUSTOM_QUESTION>, detractor:<CUSTOM_QUESTION>)
```
This method allows you to set custom question for each type of end user (detractor, passive or promoter). Passing ```nil``` for any of the parameters will result in using defaults set in Wootric's admin panel for that type of end user.

##setCustomFollowupPlaceholderForPromoter:passive:detractor:
```objective_c
[Wootric setCustomFollowupPlaceholderForPromoter:<CUSTOM_PLACEHOLDER> passive:<CUSTOM_PLACEHOLDER> detractor:<CUSTOM_PLACEHOLDER>];
```
```swift
Wootric.setCustomFollowupPlaceholderForPromoter(<CUSTOM_PLACEHOLDER>, passive:<CUSTOM_PLACEHOLDER>, detractor:<CUSTOM_PLACEHOLDER>)
```
Same as with custom question, it allows you to set custom placeholder text in feedback text view for each type of end user. Be advised that this setting takes precedence over values set in Wootric's from admin panel.