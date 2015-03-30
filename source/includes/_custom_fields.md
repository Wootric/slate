# Advanced Feature: Adding Custom Fields

Wootric now allows you to send custom attributes about your customers. This will give you the
power to segment your users into groups meaningful for your business and report Net Promoter
Score analytics for each of those groups.
For example, if you are an HR management tool, you may want to examine your NPS scores
and feedback by employee type (i.e., manager, individual contributor). This may give you richer
insight into your drivers of satisfaction, and whether these differ by user type.

## Setting up Custom Attributes
You add custom attributes within the Wootric JS code snippet as additional key/value pairs.
**Make sure to double check that your custom attribute keys always have a JSON­ valid
value**; this means quotes around strings and sending null as a value when there isn’t a value for
that user.

It's also important to note that right now Wootric only supports strings as values.
Support for Integers, Date, and Boolean formats are coming soon.
Keys cannot contain characters such as '$', '.' or the NULL character.
Values cannot be nested hashes or arrays.

> Here's an example of custom attributes set within the Wootric snippet (in red below)


```javascript
<!­­ begin Wootric code ­­>
<script type="text/javascript">
window.wootricSettings = {
  email:'nps@example.com', // TODO: The current user's email address.
  created_at: 1234567890, // TODO: The current user's sign­up date as a Unix timestamp.
  product_name: 'Wootric', // TODO: The name of the product or service.
  account_token: 'NPS­xxxxxxxx',
  properties:{
    role:'manager',// TODO: The current user's role.
    pricing_plan:'Enterprise'// TODO: The current user's pricing plan.
  }
};
</script>
....//The rest of the widget...
<!--­­ end Wootric code --­­>
```

## What Custom Attributes can I send to Wootric?
Send any custom attributes you like to Wootric, as long as they are in string format. We find that
the most meaningful attributes for Net Promoter Score segmentation include things like user
type, price plan, engagement, and geography.

## Is there a limit on the number of custom attributes I can send to Wootric?
At this time, we limit you to 5 attributes, with an additional limit of 5 values for each attribute.

## What does this look like within Wootric?
The addition of custom attributes brings new functionality to your Wootric dashboard. Attributes
show up on the left hand side of the dash, and can be selected to filter scores, trend graphs, and
responses.
