# Installing Javascript SDK

## Step 1. ­Add the code
```javascript
<!-- begin Wootric code -->
<script type="text/javascript">
window.wootricSettings = {
  email:'nps@example.com',// TODO: Required to uniquely identify a user. It can be any unique value other than email.
  created_at: 1234567890, // TODO: The current logged in user's sign-up date as a Unix timestamp.
  account_token: 'NPS-xxxxxxx'
};

</script>
...//The rest of the widget...
<!-- end Wootric code -->
```
Once you are signed up on the Wootric homepage, you will be taken directly to an installation
page. If you’re a returning visitor, sign in at [wootric.com](https://www.wootric.com/) and click on the “Settings" button near the top right of the page. Navigate to the [Javascript Setup Guide](https://app.wootric.com/install) and you will see a code snippet with a unique
account_token for you to install.

For HTML5 async support read [here](#async-support)

##Step 2. Customize the Survey

This is an important step! [Customize](https://app.wootric.com/user_settings/edit#!/survey-nps) your survey with the name of your product or company. As needed, make changes to our trusted [survey](https://app.wootric.com/user_settings/edit#!/survey-nps) and [sampling](https://app.wootric.com/user_settings/edit#!/sampling) defaults.

## Step 3. View your Responses Live!
> Comment out the line wootric_survey_immediately = true when you are ready for production. Alternatively, leave the line in the code for testing purposes or to survey the customer upon every visit to a specific page.

```javascript
<!­­-- begin Wootric code ­­-->
<script type="text/javascript">
wootric_survey_immediately=true;//Fire immediately for testing
window.wootricSettings = {
  email:'nps@example.com', // TODO: Required to uniquely identify a user. It can be any unique value other than email.
  product_name: 'Wootric', // TODO: The name of the product or service.
  account_token: 'NPS­xxxxxxxx' };
</script>
....//The rest of the widget...
<!--­­ end Wootric code ­­-->
```

That's it! Once your Wootric snippet is installed, eligible users will immediately start being surveyed.
Depending on the traffic of your site, you could start to see responses within a few minutes.
Responses will come in to your Wootric dash in real time.


### **No data yet?**
We provide a link within your empty dashboard to a sample dash with dummy
data.
### **I’d like to do some testing first. How do I ensure that the survey shows up on demand?**

You can easily install Wootric in your development environment for testing. The snippet is
already set up to show the survey immediately for testing purposes only.

### Additional notes on Wootric snippet placement:

#### For sites with registered users:
If your site has registered users, we recommend that you
paste the tag on only the pages that your logged in users will access to allow unique user
identification.

#### For ecommerce sites:
If your site has a checkout flow, we recommend that you paste the tag
on pages that won’t interrupt checkout. The most commonly used location is the transaction
completion page.

#### Google Tag Manager:
You may use Google Tag Manager to install and manage the Wootric
snippet.

### Async Support:
``` js
<!-- begin Wootric code -->
<script type="text/javascript">
   wootric_survey_immediately = true;
   window.wootricSettings = {
      email: 'customer@example.com',
      created_at: 1234567890,
      account_token: 'NPS-XXXXXXXX'
  };
</script>
<script type="text/javascript" src="https://disutgh7q0ncc.cloudfront.net/beacon.js" async onload="WootricSurvey.run(wootricSettings)"></script>
```

We support HTML5 async attribute to load our snippet.
The `wootricSettings` object is built in the same way as above. The only difference
rests in how we initialize the `WootricSurvey`.
Take a close look at the onload attribute, it will guarantee that your service is called when the script has loaded.
