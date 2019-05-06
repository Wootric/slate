# Survey Delegate

The `WTRSurveyDelegate` can be used to be informed of when the SDK will or
already perform certain actions. To use the delegate, first a class needs
to conform to the protocol and assign that class to the WootricSDK.

Imagine you have a view controller `SampleViewController.m`. You can
specific that this class inherits to `WTRSurveyDelegate` and it will be
the one where the methods specified by the protocol are implemented.

```objective_c

// Assign WTRSurveyDelegate to class
@interface SampleViewController () <WTRSurveyDelegate>

@end

// Set the SDK's delegate
[Wootric setDelegate:self];

// Implement protocol methods
- (void)willPresentSurvey {

}

- (void)didPresentSurvey {

}

- (void)willHideSurvey {

}

- (void)didHideSurvey:(NSDictionary *)data {

}
```
```swift

// Assign WTRSurveyDelegate to class
class SampleViewController: UIViewController, WTRSurveyDelegate {

}

// Set the SDK's delegate
Wootric.setDelegate(self)

// Implement protocol methods
func willPresentSurvey() {

}

func didPresentSurvey() {

}

func willHideSurvey() {

}

func didHideSurvey(_ data: [AnyHashable : Any]!) {

}
```
```swift_three

// Assign WTRSurveyDelegate to class
class SampleViewController: UIViewController, WTRSurveyDelegate {

}

// Set the SDK's delegate
Wootric.setDelegate(self)

// Implement protocol methods
func willPresentSurvey() {

}

func didPresentSurvey() {

}

func willHideSurvey() {

}

func didHideSurvey(_ data: [AnyHashable : Any]!) {

}
```

## willPresentSurvey

Called by the WootricSDK when the survey is about to appear.

## didPresentSurvey

Called by the WootricSDK when the survey has already appeared.

## willHideSurvey

Called by the WootricSDK when the survey is about to be dismissed.

## didHideSurvey

Called by the WootricSDK when the survey has disappeared. This method
receives a `data` dictionary with the type of survey (response or
decline). If the survey was a response, it also returns the score and the
feedback provided by the end user.

