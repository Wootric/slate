# SDK Reference

## setEndUserEmail
```objective_c
[Wootric setEndUserEmail:<END_USER_EMAIL>];
```
```swift
Wootric.setEndUserEmail(<END_USER_EMAIL>)
```
```swift_three
Wootric.setEndUserEmail(<END_USER_EMAIL>)
```
While end user email is not required it is HIGHLY recommended to set it if possible.

## setEndUserExternalId
```objective_c
[Wootric setEndUserExternalId:<END_USER_EXTERNAL_ID>];
```
```swift
Wootric.setEndUserExternalId(<END_USER_EXTERNAL_ID>)
```
```swift_three
Wootric.setEndUserExternalId(<END_USER_EXTERNAL_ID>)
```
Set an external ID for the end user. This value is optional.

## forceSurvey
```objective_c
[Wootric forceSurvey:<BOOL>];
```
```swift
Wootric.forceSurvey(<BOOL>)
```
```swift_three
Wootric.forceSurvey(<BOOL>)
```
If forceSurvey is set to `true`, the survey is displayed skipping eligibility check AND even if user was already surveyed. This is for test purposes only as it will display the survey every time and for every user.

##surveyImmediately
```objective_c
[Wootric surveyImmediately:<BOOL>];
```
```swift
Wootric.surveyImmediately(<BOOL>)
```
```swift_three
Wootric.surveyImmediately(<BOOL>)
```
If surveyImmediately is set to `true` and user wasn't surveyed yet - eligibility check will return `true` and survey will be displayed.

<aside class="warning">
This should not be used in production.
</aside>

##setEndUserCreatedAt
```objective_c
[Wootric setEndUserCreatedAt:<UNIX Timestamp>];
```
```swift
Wootric.setEndUserCreatedAt(<UNIX Timestamp>)
```
```swift_three
Wootric.setEndUserCreatedAt(<UNIX Timestamp>)
```
When creating a new end user for survey, it will set the external creation date (so for example, date, when end user was created in your iOS application).
This value is also used in eligibility check, to determine if end user should be surveyed.

##setFirstSurveyAfter
```objective_c
[Wootric setFirstSurveyAfter:<NUMBER_OF_DAYS>];
```
```swift
Wootric.setFirstSurveyAfter(<NUMBER_OF_DAYS>)
```
```swift_three
Wootric.setFirstSurveyAfter(<NUMBER_OF_DAYS>)
```
If not set, defaults to value from admin panel. Used to check if end user was created/last seen earlier than <NUMBER_OF_DAYS> ago and therefore if survey is required.

##setEndUserProperties
```objective_c
[Wootric setEndUserProperties:<NSDICTIONARY>];
```
```swift
Wootric.setEndUserProperties(<NSDICTIONARY>)
```
```swift_three
Wootric.setEndUserProperties(<NSDICTIONARY>)
```
End user properties can be provided as an `NSDictionary` object.

##setProductNameForEndUser
```objective_c
[Wootric setProductNameForEndUser:<PRODUCT_NAME>];
```
```swift
Wootric.setProductNameForEndUser(<PRODUCT_NAME>)
```
```swift_three
Wootric.setProductNameForEndUser(<PRODUCT_NAME>)
```
Directly adds a product name to end user's properties.

##setSurveyedDefault
```objective_c
[Wootric setSurveyedDefault:<BOOL>];
```
```swift
Wootric.setSurveyedDefault(<BOOL>)
```
```swift_three
Wootric.setSurveyedDefault(<BOOL>)
```
Right after a vote or dismiss we are setting a NSUserDefault that lasts for 90 days and indicates that end user was already surveyed on this device. We are doing this to lower the requests amount to our eligibility server.
If your survey throttle is different than 90 days and/or you don't want to set the surveyed "cookie" you can set this option to `NO`.

##passScoreAndTextToURL
```objective_c
[Wootric passScoreAndTextToURL:<BOOL>];
```
```swift
Wootric.passScoreAndTextToURL(<BOOL>)
```
```swift_three
Wootric.passScoreAndText(toURL: true)
```
If you enable this setting, score and feedback text will be added as wootric_score and wootric_text params to the "thank you" URL you have provided. (Check "Custom Thank You" section)

##skipFeedbackScreenForPromoter
```objective_c
[Wootric skipFeedbackScreenForPromoter:<BOOL>];
```
```swift
Wootric.skipFeedbackScreenForPromoter(<BOOL>)
```
```swift_three
Wootric.skipFeedbackScreen(forPromoter: true)
```
With this option enabled, promoters (score 9-10) will be taken directly to third (social share) screen, skipping the second (feedback) one.

## showOptOut
```objective_c
[Wootric forceSurvey:<BOOL>];
```
```swift
Wootric.showOptOut(true)
```
```swift_three
Wootric.showOptOut(true)
```
If showOptOut is set to YES, it will show an option for the end user to opt out of being surveyed. Default value is NO.

## setLogLevelNone
```objective_c
[Wootric setLogLevelNone];
```
```swift
Wootric.setLogLevelNone()
```
```swift_three
Wootric.setLogLevelNone()
```
Set WTRLogger level to None i.e. it won't show any log from the WootricSDK.

## setLogLevelError
```objective_c
[Wootric setLogLevelError];
```
```swift
Wootric.setLogLevelError()
```
```swift_three
Wootric.setLogLevelError()
```
Set WTRLogger level to Error i.e. it will only show error logs from the WootricSDK.

## setLogLevelVerbose
```objective_c
[Wootric setLogLevelVerbose];
```
```swift
Wootric.setLogLevelVerbose()
```
```swift_three
Wootric.setLogLevelVerbose()
```
Set WTRLogger level to Verbose i.e. it will show all logs from the WootricSDK.
