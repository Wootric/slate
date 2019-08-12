# Survey Callbacks

The `WootricSurveyCallback` can be used to be informed of when the SDK will or
already perform certain actions. To use the Listener, first a class needs
to conform to the protocol and assign that class to the WootricSDK.

Imagine you have an Activity/FragmentActivity `MainActivity.java`. You can
specify that this class implements the `WootricSurveyCallback` and it will be
the one where the methods specified by the protocol are implemented.

```java

// Implements WootricSurveyCallback
public class MainActivity extends FragmentActivity implements WootricSurveyCallback {


// Set the SDK's Callback class
wootric.setSurveyCallback(this);

// Implement protocol methods
@Override
public void onSurveyWillShow(){
    
}

@Override
public void onSurveyDidShow(){

}

@Override
public void onSurveyWillHide(){

}

@Override
public void onSurveyDidHide(HashMap values){

}
```

## onSurveyWillShow

Called by the WootricSDK when the survey is about to appear.

## onSurveyDidShow

Called by the WootricSDK when the survey has already appeared.

## onSurveyWillHide

Called by the WootricSDK when the survey is about to be dismissed.

## onSurveyDidHide

Called by the WootricSDK when the survey has disappeared. This method
receives a `values` HashMap with the score and the text provided by the
end user. If the end user dismissed the survey, it returns a score of -1.

