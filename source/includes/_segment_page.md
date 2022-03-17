# Page

```javascript
analytics.page();
```

If you aren’t familiar with the Segment Spec, you should first read about what the [Page method](https://segment.com/docs/connections/spec/page/) does. An example call would look like:

Segment sends Page calls to InMoment as a pageview.

When you call Page, InMoment tracks the URL, page name, and page path that you are currently on. You can use this information in the InMoment Settings to trigger surveys by using InMoment’s Targeted Sampling feature. InMoment recognizes the following Segment Page properties as the following page fields:

Segment Parameter | InMoment Parameter | Description
--------- | ------- | -------
name | wootricSettings.email | The name assigned to this page.
path | wootricSettings.page_info.path | The path portion of the URL of the page. Equivalent to the canonical path which defaults to location.pathname from the DOM API.