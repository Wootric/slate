# Samples

## Rate application on the Play Store
```java

import com.wootric.androidsdk.Wootric;
import com.wootric.androidsdk.objects.WootricCustomThankYou;

...

Wootric wootric = Wootric.init(this, CLIENT_ID, CLIENT_SECRET, ACCOUNT_TOKEN);

wootric.setEndUserEmail("nps@example.com");

// Uncomment for testing
// NOTE: do not use in production
// wootric.setSurveyImmediately(true);

// Will skip the Feedback view for Promoters
wootric.shouldSkipFollowupScreenForPromoters(true);

WootricCustomThankYou customThankYou = new WootricCustomThankYou();
Uri uri = Uri.parse("market://details?id=com.yourcompany.appid");
customThankYou.setPromoterLinkText("Rate our app!");
customThankYou.setPromoterLinkUri(uri);

wootric.setCustomThankYou(customThankYou);
wootric.survey();
```

You can set the last button to go to the Play Store so users can rate your app.

<p align="center" >
  <img src="https://cloud.githubusercontent.com/assets/1431421/16964379/bc8e7c06-4dc0-11e6-900a-bf6a3d4501b6.png" alt="Wootric" title="Wootric" style="height:400px;">
</p>

## Set End User Properties
```java
import com.wootric.androidsdk.Wootric;
import com.wootric.androidsdk.objects.WootricCustomThankYou;
import java.util.HashMap;

...

Wootric wootric = Wootric.init(this, CLIENT_ID, CLIENT_SECRET, ACCOUNT_TOKEN);

wootric.setEndUserEmail("nps@example.com");

// Uncomment for testing
// NOTE: do not use in production
// wootric.setSurveyImmediately(true);

// Set end user's properties
HashMap<String, String> properties = new HashMap<String, String>();
properties.put("company", "Wootric");
properties.put("type", "awesome");
properties.put("os", "Android");
// Integer representing the date (Unix timestamp format) of the user's last order with the key suffixed with "_date"
properties.put("last_order_date", "1479316287");
// Integer representing the user's total purchases with the key suffixed with "_amount"
properties.put("total_purchase_amount", "10");
wootric.setProperties(properties);

wootric.survey();
```
Setting end user properties will help you segment and filter results.

Wootric currently supports Integers, Strings, and Unix formatted dates as values.

Integers must be suffixed with _amount and dates must be in Unix timestamp format and suffixed with _date.

Keys cannot contain characters such as ‘$’, ‘.’ or the NULL character. Values cannot be nested hashes or arrays.

<p align="center" >
  <img src="https://cloud.githubusercontent.com/assets/1431421/17043713/0b202224-4f7f-11e6-86cf-3193cfda998f.png" alt="Properties" title="Wootric">
</p>
