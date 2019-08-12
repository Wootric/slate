# SDK Reference

##setEndUserEmail
```java
wootric.setEndUserEmail(<END_USER_EMAIL>);
```
While end user email is not required it is HIGHLY recommended to set it if possible.

##setEndUserExternalId
```java
wootric.setEndUserExternalId(<END_USER_EXTERNAL_ID>);
```
Set an external ID for the end user. This value is optional.

##setSurveyImmediately
```java
wootric.setSurveyImmediately(<BOOL>);
```
If setSurveyImmediately is set to `true` and user wasn't surveyed yet - eligibility check will return `true` and survey will be displayed.

<aside class="warning">
This should not be used in production.
</aside>

##setEndUserCreatedAt
```java
wootric.setEndUserCreatedAt(<UNIX Timestamp>);
```
When creating a new end user for survey, it will set the external creation date (so for example, date, when end user was created in your Android application).
This value is also used in eligibility check, to determine if end user should be surveyed.

##setFirstSurveyDelay
```java
wootric.setFirstSurveyDelay(<NUMBER_OF_DAYS>);
```
If not set, defaults to value from admin panel. Used to check if end user was created/last seen earlier than <NUMBER_OF_DAYS> ago and therefore if survey is required.

##setProperties
```java
wootric.setProperties(properties);
```
End user properties can be provided as a `HashMap<String, String>` object.

##setShowOptOut
```java
wootric.setShowOptOut(<BOOL>);
```
If setShowOptOut is set to `true` then opt out link will be seen.

##shouldSkipFollowupScreenForPromoters
```java
wootric.shouldSkipFollowupScreenForPromoters(<BOOL>);
```
With this option enabled, promoters (score 9-10) will be taken directly to third (social share) screen, skipping the second (feedback) one.

##skipFeebackScreen
```java
wootric.skipFeebackScreen(<BOOL>);
```
With this option enabled, the open feedback screen will be skipped and go
directly to the third screen (thank you message).
