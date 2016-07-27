# Custom messages
```java
WootricCustomMessage customMessage = new WootricCustomMessage();
customMessage.setFollowupQuestion("custom followup");
customMessage.setDetractorFollowupQuestion("custom detractor");
customMessage.setPassiveFollowupQuestion("custom passive");
customMessage.setPromoterFollowupQuestion("custom promoter");
customMessage.setPlaceholderText("custom placeholder");
customMessage.setDetractorPlaceholderText("custom detractor placeholder");
customMessage.setPassivePlaceholderText("custom passive placeholder");
customMessage.setPromoterPlaceholderText("custom promoter placeholder");

wootric.setCustomMessage(customMessage);
```

Wootric provides designated class for providing custom messages -`WootricCustomMessages`

# Custom thank you

```java
WootricCustomThankYou customThankYou = new WootricCustomThankYou();
customThankYou.setText("Thank you!!");
customThankYou.setDetractorText("Detractor thank you");
customThankYou.setPassiveText("Passive thank you");
customThankYou.setPromoterText("Promoter thank you");
customThankYou.setLinkText("Thank you link text");
customThankYou.setDetractorLinkText("Detractor link text");
customThankYou.setPassiveLinkText("Passive link text");
customThankYou.setPromoterLinkText("Promoter link text");
customThankYou.setLinkUri(Uri.parse("http://wootric.com/thank_you"));
customThankYou.setDetractorLinkUri(Uri.parse("http://wootric.com/detractor_thank_you"));
customThankYou.setPassiveLinkUri(Uri.parse("http://wootric.com/passive_thank_you"));
customThankYou.setPromoterLinkUri(Uri.parse("http://wootric.com/promoter_thank_you"));
customThankYou.setScoreInUrl(true);
customThankYou.setCommentInUrl(true);
wootric.setCustomThankYou(customThankYou);
```

Wootric provides designated class for providing custom thank you -`WootricCustomThankYou`


# Color customization (smartphones only)
```java
// Changes background color and text buttons color for the survey
wootric.setSurveyColor(R.color.survey_color);

// Changes score selector color and comment highlight color
wootric.setScoreColor(R.color.score_color);

// Changes Thank You button color on the final view
wootric.setThankYouButtonBackgroundColor(R.color.thank_you_color);

// Changes Facebook and Twitter buttons colors
wootric.setSocialSharingColor(R.color.social_color);
```
Colors can be customized for the smartphone's version.


