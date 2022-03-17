# Idenfity

```javascript
analytics.identify('userId123', {
  email: 'hello@example.com',
  createdAt: '2018-08-03T15:28:46.493Z',
  language: 'EN'
});
```

If you’re not familiar with the Segment Specs, take a look to understand what the [Identify method](https://segment.com/docs/connections/spec/identify/) does.

When you call Identify, the user’s information is passed to InMoment to check eligibility during survey
responses. Segment’s special traits recognized as InMoment’s standard user profile fields (in parentheses)
are:

Segment Parameter | InMoment Parameter | Description
--------- | ------- | -------
email | wootricSettings.email | The email of this user.
createdAt | wootricSettings.created_at | ISO 8610 timestamp. InMoment requires the timestamp to be rounded to the nearest second so we will make this conversion for you.
language | wootricSettings.language | Language for the survey