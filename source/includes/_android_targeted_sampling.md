# Targeted Sampling

```java
Wootric wootric = Wootric.init(this, CLIENT_ID, ACCOUNT_TOKEN);
wootric.setEndUserEmail("nps@example.com");
wootric.setEndUserCreatedAt(1234567890);

HashMap<String, String> properties = new HashMap();
properties.put("Example_string", "pro_plan");
properties.put("Example_value", "12");
wootric.setProperties(properties);
        
wootric.survey("On Purchase Event");
```

You can trigger surveys based on an end-user's property, an event that you might be tracking in your app or a combination of both. You must configure the rules that trigger these surveys inside Wootric Settings Panel.

To set the properties for the end user you can pass a HashMap to
the `setProperties` method.

To trigger a survey with an event you ned to use `survey(event:)`.


For more information on how to configure Targeted Sampling, visit
[How do I setup targeted sampling for in-app surveys?](http://help.wootric.com/en/articles/3472284-how-do-i-setup-targeted-sampling-for-in-app-surveys)
