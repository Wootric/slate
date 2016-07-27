#Segment Integration

Wootric provides an integration for [Segment](https://segment.com/). The library can be found on [our Github](https://github.com/Wootric/segment-wootric-ios). 

##Install with Cocoapods

Segment-Wootric is available through [CocoaPods](http://cocoapods.org). To install
it, simply add the following line to your `Podfile`:

```ruby
pod "Segment-Wootric"
```

##Usage
```objective_c
#import <Segment-Wootric/SegmentWootric.h>

SEGAnalyticsConfiguration *config = [SEGAnalyticsConfiguration configurationWithWriteKey:@"YOUR_WRITE_KEY"];
WTRWootricIntegrationFactory *wootricFactory = [WTRWootricIntegrationFactory instance];
[config use:wootricFactory];
[SEGAnalytics setupWithConfiguration:config];

[WTRWootricIntegration showSurveyInViewController:<VIEW_CONTROLLER>];
```
```swift
let config = SEGAnalyticsConfiguration.init(writeKey: "YOUR_WRITE_KEY")
    
let wootricFactory = WTRWootricIntegrationFactory.instance() as! WTRWootricIntegrationFactory
config.use(wootricFactory)
SEGAnalytics.setupWithConfiguration(config)

WTRWootricIntegration.showSurveyInViewController(self)
```
First of all you need to provide values for account token, clientID and client secret in Segment's dashboard for Wootric integration, then import Segment-Wootric.

Then init the Analytics with Wootric integration. Wootric integration responds to ```identify``` call, to read more about it, visit [Segment identify method documentation](https://segment.com/docs/libraries/ios/#identify).
In identify call ```traits``` dictionary is set as ```endUserProperties``` in WootricSDK,  except keys ```email``` and ```createdAt``` which are set as ```endUserEmail``` and ```endUserCreatedAt``` respectively.

For custom configuration you can use ```SEGWootric``` class instance, to get it, call:
`[WTRWootricIntegration wootric]`
For all available methods (being instace methods for SEGWootric instead of class methods) please refer to WootricSDK [docs](https://github.com/Wootric/WootricSDK-iOS).

Finally to show the survey with `showSurveyInViewController`.

<aside class="notice">
If you are using Swift, don't forget to import 
`#import <Segment-Wootric/SegmentWootric.h>` in your `Bridging-Header.h`
</aside>

#mParticle Integration

Wootric provides an integration for [mParticle](http://mparticle.com/). 

Instructions on how to setup the mParticle Apple SDK can be found on [mParticle's Github](https://github.com/mParticle/mparticle-apple-sdk/).