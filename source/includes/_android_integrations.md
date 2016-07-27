# Segment Integration

Wootric provides an integration for [Segment](https://segment.com/). The library can be found on [our Github](https://github.com/Wootric/segment-android-integration-wootric). 

This library is distributed as Android library project so it can be included by referencing it as a library project.

##Install with Maven
```xml
<dependency>
    <groupId>com.wootric</groupId>
    <artifactId>analytics-integration-wootric</artifactId>
    <version>0.1.4</version>
</dependency>
```
If you use Maven, you can include this library as a dependency.

##Install with Gradle
```groovy
compile 'com.wootric:analytics-integration-wootric:0.1.4'

dependencies {
  repositories {
    mavenCentral()
    maven { url 'https://oss.sonatype.org/content/repositories/snapshots/' }
  }

  compile 'com.segment.analytics.android:analytics:4.1.4-SNAPSHOT'
}
```

It is assumed that Segment's android analytics is available. The latest version can be added as dependency this way.

##Intialize Analytics
```java
import com.segment.analytics.Analytics;
import com.wootric.analytics.android.integrations.wootric.WootricIntegration;

public class MainApplication extends Application {

    Analytics analytics;

    @Override
    public void onCreate() {
        super.onCreate();

        analytics = new Analytics.Builder(this, "write_key")
                .use(WootricIntegration.FACTORY)
                .build();
    }

    public Analytics getAnalytics() {
        return analytics;
    }
}
```

Analytics object should be initialized in the Application class, specifying that the WootricIntegration should be user.

##Wootric object
```java

import com.segment.analytics.Analytics;
import com.wootric.analytics.android.integrations.wootric.WootricIntegration;
import com.wootric.androidsdk.Wootric;

public class MainActivity extends Activity {
    @Override
    protected void onResume() {
        super.onResume();

        Analytics analytics = ((MainApplication) getApplication()).getAnalytics();
        analytics.onIntegrationReady(WootricIntegration.FACTORY.key(), new Analytics.Callback<Wootric>() {
            @Override
            public void onReady(Wootric wootric) {
                // Set all aptional configuration here like:
                // wootric.setSurveyImmediately(true);
                // wootric.setLanguageCode("PL");
                wootric.survey();
            }
        });
    }
}
```

In your Activity of choosing the Wootric object can be used to set all optional configurations and call `survey()` method.

# mParticle Integration

Wootric provides an integration for [mParticle](http://mparticle.com/). 

Instructions on how to setup the mParticle Android SDK can be found on [mParticle's Github](https://github.com/mParticle/mparticle-android-sdk).