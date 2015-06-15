# Installing with Segment

While many customers choose to get started with Wootric by directly installing our Javascript Snippet, there are certain cases where it might make sense to install us using Segment.

1.  Development resources are limited and you'd like a "no-coding required" way to get Wootric NPS integrated into your site.

2.  You use a number of different services supported by Segment.com and you send the same data to them that you would send to us (things like email address of a user, or user created_at date)

[Visit Segment](https://segment.com/docs/) to get started.

Refer to [Wootric integration docs](https://segment.com/docs/integrations/wootric/) for help with setting it up.

Note: When using Segment to integrate Wootric, options available within "identify" call are: "email", "createdAt", "properties" and "language".
If you plan to use non-standard survey sampling (i.e. event based triggering) this will need to be set directly in the Javascript and are not supported in Segment.
