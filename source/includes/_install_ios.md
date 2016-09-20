# Installing iOS SDK

## Using Cocoapods

```
// Install Cocoapods 
$ gem install cocoapods

//Inside your Podfile
target 'YourProject' do
  pod 'WootricSDK'
end

// Install pods
$ pod install
```

**1. Install CocoaPods**

If you don't have Cocoapods already, you can install it by typing 
`$ gem install cocoapods` in your terminal

**2. Podfile**

Create a `Podfile` and add `pod 'WootricSDK'`. This will download and install the latest version of the SDK. If you want to you can specify which version of the SDK by doing something like this `pod 'WootricSDK', '0.5.6'`. For more information about creating this file, please refer to Cocoapod's [Podfile Guide](https://guides.cocoapods.org/using/the-podfile.html).


**3. Install WootricSDK**

On your terminal, and inside your project's directory, run `$ pod install`. Cocoapods will download all dependencies specified in your `Podfile`. From now on, you should use the `.xcworkspace` file instead of the `.xcodeproject` file.

##Carthage

**1. Install Carthage**

If you haven't already, install the latest version of Carthage.

**2. Cartfile**

Add `github "Wootric/WootricSDK-iOS"` to your Cartfile, and follow the Carthage installation instructions.

**3. Update SDK**

 In the future, to update to the latest version of the SDK, run `carthage update --platform ios`.

##Dynamic Framework

Note: This is only compatible with iOS 8 and above.

**1. Download SDK**

Head to our [GitHub releases page](https://github.com/Wootric/WootricSDK-iOS/releases) and download and unzip WootricSDK.framework

**2. Add the framework to your project**

Drag WootricSDK.framework to the "Embedded Binaries" section of your Xcode project's "General" settings. Make sure to select "Copy items if needed"

![Xcode](https://cloud.githubusercontent.com/assets/1431421/16505349/238edd62-3ee2-11e6-8f91-9d3c978a10cf.png)

# Presenting the survey

## Step 1. Initialize Wootric
``` objective_c
#import <WootricSDK/WootricSDK.h>

// Inside your method
[Wootric configureWithClientID:<YOUR_CLIENT_ID> clientSecret:<YOUR_CLIENT_SECRET> accountToken:<YOUR_ACCOUNT_TOKEN>];

// TODO: The current logged in user's email address.
[Wootric setEndUserEmail:@"nps@example.com"];
// TODO: The current logged in user's sign-up date as a Unix timestamp.
[Wootric setEndUserCreatedAt:@1234567890];

// Use only for testing
[Wootric forceSurvey:YES];

[Wootric showSurveyInViewController:<YOUR_VIEW_CONTROLLER>];
```
``` swift
// Inside your method
Wootric.configureWithClientID(<YOUR_CLIENT_ID>, clientSecret: <YOUR_CLIENT_SECRET>, accountToken: <YOUR_ACCOUNT_TOKEN>)

// TODO: The current logged in user's email address.
Wootric.setEndUserEmail("nps@example.com")
// TODO: The current logged in user's sign-up date as a Unix timestamp.
Wootric.setEndUserCreatedAt(1234567890)

// Use only for testing
Wootric.forceSurvey(true)

Wootric.showSurveyInViewController(<YOUR_VIEW_CONTROLLER>)
```
``` swift_three
// Inside your method
Wootric.configure(withClientID: <YOUR_CLIENT_ID>, clientSecret:<YOUR_CLIENT_SECRET>,, accountToken:<YOUR_ACCOUNT_TOKEN>)

// TODO: The current logged in user's email address.
Wootric.setEndUserEmail("nps@example.com")
// TODO: The current logged in user's sign-up date as a Unix timestamp.
Wootric.setEndUserCreatedAt(1234567890)

// Use only for testing
Wootric.forceSurvey(true)

Wootric.showSurvey(in: <YOUR_VIEW_CONTROLLER>)
```
First import the SDK into your ViewController of choosing. Then configure the SDK with your client ID, secret and account token.

Sign in at [wootric.com](https://www.wootric.com/) if you haven't already. If you just signed up on the Wootric homepage, you will be taken directly to an installation page. If you’re a returning visitor, click on the “Settings" button near the top right of the page. Navigate to the [Wootric Installation Guide](https://app.wootric.com/install) and you will see a unique **account_token** for you to use.

The **client_id** and **client_secret** can be found on your account's settings [API section](https://app.wootric.com/account_settings/edit#!/api).

To display the survey just use `showSurveyInViewController`. If the user is eligible (this check is built in the method) the SDK will show the survey.

<aside class="notice">
If you are using Swift, don't forget to import WootricSDK in your `Bridging-Header.h`
</aside>


##Step 2. Customize the Survey

> Comment out the line `[Wootric forceSurvey:YES]` or `Wootric.forceSurvey(true)` when you are ready for production. Alternatively, leave the line in the code for testing purposes or to survey the customer upon every visit to a view.

```objective_c
#import <WootricSDK/WootricSDK.h>

[Wootric configureWithClientID:@"your_client_id" clientSecret:@"your_client_secret" accountToken:@"NPS­-xxxxxxxx"];
[Wootric setEndUserEmail:@"nps@example.com"];
[Wootric setEndUserCreatedAt:@1234567890];

// Use only for testing
[Wootric forceSurvey:YES];

// Customization
[Wootric setCustomProductName:@"Wootric"];
[Wootric setCustomFinalThankYou:@"Merci!"];
[Wootric setCustomLanguage:@"fr"];

[Wootric showSurveyInViewController:self];
```
```swift
Wootric.configureWithClientID("your_client_id", clientSecret: "your_client_secret", accountToken: "NPS­-xxxxxxxx")
Wootric.setEndUserEmail("nps@example.com")
Wootric.setEndUserCreatedAt(1234567890)

// Use only for testing
Wootric.forceSurvey(true)

// Customization
Wootric.setCustomProductName("Wootric")
Wootric.setCustomFinalThankYou("Merci!")
Wootric.setCustomLanguage("fr")

Wootric.showSurveyInViewController(self)
```
```swift_three
Wootric.configure(withClientID:"your_client_id", clientSecret: "your_client_secret", accountToken: "NPS­-xxxxxxxx")
Wootric.setEndUserEmail("nps@example.com")
Wootric.setEndUserCreatedAt(1234567890)

// Use only for testing
Wootric.forceSurvey(true)

// Customization
Wootric.setCustomProductName("Wootric")
Wootric.setCustomFinalThankYou("Merci!")
Wootric.setCustomLanguage("fr")

Wootric.showSurvey(in: self)
```


This is an important step! [Customize](https://app.wootric.com/user_settings/edit#!/survey-nps) your survey with the name of your product or company. As needed, make changes to our trusted [survey](https://app.wootric.com/user_settings/edit#!/survey-nps) and [sampling](https://app.wootric.com/user_settings/edit#!/sampling) defaults. This values can modified from your app.

<p align="center" >
  <img src="https://cloud.githubusercontent.com/assets/1431421/17188297/0c761584-5402-11e6-9339-8af8f63125a5.png" alt="Wootric" title="Customization">
  <img src="https://cloud.githubusercontent.com/assets/1431421/17188298/0c8dec22-5402-11e6-8925-020e777c36ba.png" alt="Wootric" title="Customization">
</p>

## Step 3. View your Responses Live!
That's it! Once the WootricSDK is installed, eligible users will immediately start being surveyed.
Depending on the traffic of your app, you could start to see responses within a few minutes.
Responses will come in to your Wootric dash in real time.

<aside class="notice">
For a working implementation of the iOS WootricSDK, try the demo app on our [Github repo](https://github.com/Wootric/WootricSDK-iOS).
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