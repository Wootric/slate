# Custom Attributes

Wootric now allows you to send custom attributes about your customers. This will give you the
power to segment your users into groups meaningful for your business and report Net Promoter
Score analytics for each of those groups.
For example, if you are an HR management tool, you may want to examine your NPS scores
and feedback by employee type (i.e., manager, individual contributor). This may give you richer
insight into your drivers of satisfaction, and whether these differ by user type.

## Setting up Custom Attributes
> Here's an example of custom attributes set within the Wootric snippet:

```javascript
<!­­ begin Wootric code ­­>
<script type="text/javascript">
window.wootricSettings = {
  email:'nps@example.com', // TODO: Required to uniquely identify a user. Email is recommended but this can be any unique identifier.
  created_at: 1234567890, // TODO: The current user's sign­up date as a Unix timestamp.
  product_name: 'Wootric', // TODO: The name of the product or service.
  account_token: 'NPS­xxxxxxxx',
  properties:{
    role:'manager',// TODO: The current user's role.
    pricing_plan:'Enterprise'// TODO: The current user's pricing plan.
    total_purchase_amount: 12 // Integer representing the user's total purchases with the key suffixed with "_amount"
    last_order_date: 1350466020 // Integer representing the date (Unix timestamp format) of the user's last order with the key suffixed with "_date"
  }
};
</script>
....//The rest of the widget...
<!--­­ end Wootric code --­­>
```
You add custom attributes within the Wootric JS code snippet as additional key/value pairs.
**Make sure to double check that your custom attribute keys always have a JSON­ valid
value**; this means quotes around strings and sending null as a value when there isn’t a value for
that user.

Wootric currently supports Integers, Strings, and Unix formatted dates as values.

Integers must be suffixed with _amount and dates must be in Unix timestamp format and suffixed with _date. Examples are shown in the code to the right.

Keys cannot contain characters such as '$', '.' or the NULL character.
Values cannot be nested hashes or arrays.



## What Custom Attributes can I send to Wootric?
Send any custom attributes you like to Wootric, as long as they are in a string, integer, or date format. We find that
the most meaningful attributes for Net Promoter Score segmentation include things like user
type, price plan, engagement, and geography.

## Is there a limit on the number of Custom Attributes I can send to Wootric?
At this time, we limit you to 5 attributes, with an additional limit of 5 values for each attribute.

## What does this look like within Wootric?
The addition of custom attributes brings new functionality to your Wootric dashboard. Attributes
show up on the left hand side of the dash, and can be selected to filter scores, trend graphs, and
responses.
