# Custom Thank You
---

```objective_c
// Social share setup
[Wootric setFacebookPage:<FACEBOOK_PAGE_URL>];
[Wootric setTwitterHandler:<TWITTER_HANDLER>];

// Custom thank you messages setup
[Wootric setThankYouMessage:<THANK_YOU_MESSAGE>];
[Wootric setDetractorThankYouMessage:<THANK_YOU_MESSAGE>];
[Wootric setPassiveThankYouMessage:<THANK_YOU_MESSAGE>];
[Wootric setPromoterThankYouMessage:<THANK_YOU_MESSAGE>];

// Custom thank you button setup
[Wootric setThankYouLinkWithText:<THANK_YOU_TEXT> URL:<THANK_YOU_URL>];
[Wootric setDetractorThankYouLinkWithText:<THANK_YOU_TEXT> URL:<THANK_YOU_URL>];
[Wootric setPassiveThankYouLinkWithText:<THANK_YOU_TEXT> URL:<THANK_YOU_URL>];
[Wootric setPromoterThankYouLinkWithText:<THANK_YOU_TEXT> URL:<THANK_YOU_URL>];
```
```swift
// Social share setup
Wootric.setFacebookPage(<FACEBOOK_PAGE_URL>)
Wootric.setTwitterHandler(<TWITTER_HANDLER>)

// Custom thank you messages setup
Wootric.setThankYouMessage(<THANK_YOU_MESSAGE>)
Wootric.setDetractorThankYouMessage(<THANK_YOU_MESSAGE>)
Wootric.setPassiveThankYouMessage(<THANK_YOU_MESSAGE>)
Wootric.setPromoterThankYouMessage(<THANK_YOU_MESSAGE>)

// Custom thank you button setup
Wootric.setThankYouLinkWithText(<THANK_YOU_TEXT>, URL:<THANK_YOU_URL>)
Wootric.setDetractorThankYouLinkWithText(<THANK_YOU_TEXT>, URL:<THANK_YOU_URL>)
Wootric.setPassiveThankYouLinkWithText(<THANK_YOU_TEXT>, URL:<THANK_YOU_URL>)
Wootric.setPromoterThankYouLinkWithText(<THANK_YOU_TEXT>, URL:<THANK_YOU_URL>)
```

If configured, social share will display third screen for promoters (score 9-10, also twitter displays only if there is a feedback text provided), while custom thank you message and/or button will display for each type of end user that is configured (where ```setThankYouMessage:``` and ```setThankYouLinkWithText:URL:``` being default for any score).

For detailed information please refer to [js docs](http://docs.wootric.com/install/#social-media-share-settings).

# Color Customization (iPhone only)
---

```objective_c
// Change slider color
[Wootric setSliderColor:<UI_COLOR>];

// Change Send button color
[Wootric setSendButtonBackgroundColor:<UI_COLOR>];

// Change Thank You button color
[Wootric setThankYouButtonBackgroundColor:<UI_COLOR>];

// Change Social buttons color
[Wootric setSocialSharingColor:<UI_COLOR>];
```
```swift
// Change slider color
Wootric.setSliderColor(<UI_COLOR>)

// Change Send button color
Wootric.setSendButtonBackgroundColor(<UI_COLOR>)

// Change Thank You button color
Wootric.setThankYouButtonBackgroundColor(<UI_COLOR>)

// Change Social buttons color
Wootric.setSocialSharingColor(<UI_COLOR>)
```

Appereance of the survey can be modified to match your apps colors. The survey slider, Send button, Thank You button and all social sharing buttons can be modified.

# Additional information

First survey after & end user created at setting:
While it is not required, setting ```setEndUserCreatedAt``` is highly recommended for proper checking if end user needs survey and skipping uneccessary eligibility checks.