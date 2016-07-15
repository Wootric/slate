# Custom language, audience text and product name configuration:
---

```objective_c
[Wootric setCustomLanguage:<LANGUAGE_CODE>];
[Wootric setCustomAudience:<CUSTOM_AUDIENCE>];
[Wootric setCustomProductName:<CUSTOM_PRODUCT_NAME>];
```
```swift
Wootric.setCustomLanguage(<LANGUAGE_CODE>)
Wootric.setCustomAudience(<CUSTOM_AUDIENCE>)
Wootric.setCustomProductName(<CUSTOM_PRODUCT_NAME>)
```
Please refer to our [docs](http://docs.wootric.com/install/#custom-language-setting) for available languages.

Custom audience and/or product name modifies the default NPS question e.g. default question in English looks like this:
"How likely are you to recommend this product or service to a friend or co-worker?"
if custom product name is set it will substitute "this product or service" text, while custom audience will substitute "friend or co-worker". It also takes precedence over values set in admin panel.