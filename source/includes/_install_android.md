# Installing Android SDK

## Using Maven
```xml
<dependency>
    <groupId>com.wootric</groupId>
    <artifactId>wootric-sdk-android</artifactId>
    <version>2.4.7</version>
</dependency>
```

If you use Maven, you can include this library as a dependency.

## Using Gradle
```xml
compile 'com.wootric:wootric-sdk-android:2.4.7'
```

 Add the following to your app’s `build.gradle` file, inside the dependencies section.

# Presenting the survey
WootricSDK task is to present a fully functional survey view with just a few lines of code.

## Step 1. Add permissions
```xml
<uses-permission android:name="android.permission.INTERNET" />
```
Add the internet permissions to the `AndroidManifest.xml` file.


## Step 2. Add ProGuard rules
```ProGuard
-keepattributes *Annotation*, Signature

##== Wootric ==
-keep class com.wootric.** { *; }

##== Retrofit ==
-keep class retrofit.** { *; }
-keepclassmembernames interface * {
    @retrofit.http.* <methods>;
}
```

Add the following to your ProGuard rules file.

## Step 3. Initialize Wootric
```java
import com.wootric.androidsdk.Wootric;

// Inside your method
Wootric wootric = Wootric.init(this, <YOUR_CLIENT_ID>, <YOUR_CLIENT_SECRET>, <YOUR_ACCOUNT_TOKEN>);

// TODO: Required to uniquely identify a user. It can be any unique value other than email.
wootric.setEndUserEmail("nps@example.com");
// TODO: The current logged in user's sign-up date as a Unix timestamp.
wootric.setEndUserCreatedAt(1234567890);

// Use only for testing
wootric.setSurveyImmediately(true);

wootric.survey();
```
First import the SDK into your Activity of choosing. Then configure the SDK with your client ID, secret and account token.

Sign in at [wootric.com](https://www.wootric.com/) if you haven't already. If you just signed up on the Wootric homepage, you will be taken directly to an installation page. If you’re a returning visitor, click on the “Settings" button near the top right of the page. Navigate to the [Wootric Installation Guide](https://app.wootric.com/install) and you will see a unique **account_token** for you to use.

The **client_id** and **client_secret** can also be found on your Settings page, on the [API section](https://app.wootric.com/account_settings/edit#!/api).

To display the survey just use `wootric.survey();`. If the user is eligible (this check is built in the method) the SDK will show the survey.


## Step 4. Customize the Survey

> Comment out the line `wootric.setSurveyImmediately(true)` when you are ready for production. Alternatively, leave the line in the code for testing purposes or to survey the customer upon every visit to a view.

```java
import com.wootric.androidsdk.Wootric;
import com.wootric.androidsdk.objects.WootricCustomThankYou;

Wootric wootric = Wootric.init(this, "your_client_id", "your_client_secret", "NPS­-xxxxxxxx");
wootric.setEndUserEmail("nps@example.com");
wootric.setEndUserCreatedAt(1234567890);

// Use only for testing
wootric.setSurveyImmediately(true);

// Customization
WootricCustomThankYou customThankYou = new WootricCustomThankYou();
customThankYou.setText("Merci!");

wootric.setProductName("Wootric");
wootric.setCustomThankYou(customThankYou);
wootric.setLanguageCode("fr");

wootric.survey();
```

This is an important step! [Customize](https://app.wootric.com/user_settings/edit#!/survey-nps) your survey with the name of your product or company. As needed, make changes to our trusted [survey](https://app.wootric.com/user_settings/edit#!/survey-nps) and [sampling](https://app.wootric.com/user_settings/edit#!/sampling) defaults. This values can modified from your app.

<p align="center" >
  <img src="https://cloud.githubusercontent.com/assets/1431421/17188297/0c761584-5402-11e6-9339-8af8f63125a5.png" alt="Wootric" title="Customization">
  <img src="https://cloud.githubusercontent.com/assets/1431421/17188298/0c8dec22-5402-11e6-8925-020e777c36ba.png" alt="Wootric" title="Customization">
</p>

##Step 5. View your Responses Live!
That's it! Once the WootricSDK is installed, eligible users will immediately start being surveyed.
Depending on the traffic of your app, you could start to see responses within a few minutes.
Responses will come in to your Wootric dash in real time.

<aside class="notice">
For a working implementation of the Android WootricSDK, try the demo app on our [Github repo](https://github.com/Wootric/WootricSDK-Android).
</aside>


### **No data yet?**
Checkout the [Demo](https://demo.wootric.com/) dashboard with dummy data.

<p align="center" >
  <img src="https://cloud.githubusercontent.com/assets/1431421/17186433/d64cd56c-53fa-11e6-8add-2a141ff4f886.png" alt="Wootric" title="Demo">
</p>

### **I’d like to do some testing first. How do I ensure that the survey shows up on demand?**

You can easily install Wootric in your development environment for testing. The SDK is
already set up to show the survey immediately for testing purposes only.

### Additional notes on WootricSDK placement:

#### For apps with registered users:
If your app has registered users, we recommend that you
show the survey only on views that your logged in users will access to allow unique user
identification.

#### For ecommerce apps:
If your app has a checkout flow, we recommend that you show the survey
on views that won’t interrupt checkout. The most commonly used location is the transaction
completion page.
