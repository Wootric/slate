# Custom language, audience text and product name configuration:
---

```java
wootric.setLanguageCode(<LANGUAGE_CODE>);
wootric.setRecommendTarget(<CUSTOM_AUDIENCE>);
wootric.setProductName(<CUSTOM_PRODUCT_NAME>);
```
Please refer to our [docs](http://docs.wootric.com/install/#custom-language-setting) for available languages.


`setProductName` sets the product name for the end user. This will change the default question.
e.g. How likely are you to recommend productName to a friend or co-worker?
`setRecommendTarget` will substitute "friend or co-worker". It also takes precedence over values set in admin panel.