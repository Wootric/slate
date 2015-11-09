# Installing with Segment

While many customers choose to get started with Wootric by directly installing our Javascript Snippet, there are certain cases where it might make sense to install us using Segment.

1.  Development resources are limited and you'd like a "no-coding required" way to get Wootric NPS integrated into your site.

2.  You use a number of different services supported by Segment.com and you send the same data to them that you would send to us (things like email address of a user, or user created_at date).

[Visit Segment](https://segment.com/docs/) to get started.

Refer to [Wootric integration docs](https://segment.com/docs/integrations/wootric/) for help with setting it up.

```javascript
// If you don't want to identify user by the custom user id...
analytics.identify({ email: "USER_EMAIL", createdAt: UNIX_TIMESTAMP_OR_ISO-8610_DATE_STRING });

// ...or with custom id
analytics.identify("user_id", { email: "USER_EMAIL", createdAt: UNIX_TIMESTAMP_OR_ISO-8610_DATE_STRING });

// With additional properties
analytics.identify("user_id", { email: "USER_EMAIL", createdAt: UNIX_TIMESTAMP_OR_ISO-8610_DATE_STRING, custom_property: "custom_property", another_custom_property: "another_custom_property" });
```
**IMPORTANT**<br />
**Wootric integration is available as a "web browser" integration only i.e. you need to use [Analytics.js library](https://segment.com/docs/libraries/analytics.js/) to integrate our product using Segment.**

Note: When using Segment to integrate Wootric, options available within ```identify``` call are: ```email```, ```createdAt```, ```properties``` and ```language```.
If you plan to use non-standard survey sampling (i.e. event based triggering), it will need to be set directly in the Javascript and is not supported in Segment.
