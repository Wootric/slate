# Installing Javascript SDK

## Step 1. ­Add the code
```javascript

<!-- Pull the Wootric Snippet -->
<script type="text/javascript" src="https://cdn.wootric.com/wootric-sdk.js"></script>
<!-- begin Wootric code -->
<script type="text/javascript">
  window.wootricSettings = {
    email:'nps@example.com',// TODO: Required to uniquely identify a user. Email is recommended but this can be any unique identifier.
    created_at: 1234567890, // TODO: The current logged in user's sign-up date as a Unix timestamp.
    account_token: 'NPS-xxxxxxx'
  };

  // Request a survey
  window.wootric('run');
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
> Comment out the lines wootric_survey_immediately = true and wootric_no_surveyed_cookie = true when you are ready for production. Alternatively, leave the line in the code for testing purposes or to survey the customer upon every visit to a specific page.

```javascript
<!-- Pull the Wootric Snippet -->
<script type="text/javascript" src="https://cdn.wootric.com/wootric-sdk.js"></script>

<!­­-- begin Wootric code ­­-->
<script type="text/javascript">
  // TEST ONLY FLAGS - REMOVE BEFORE GOING LIVE
  wootric_survey_immediately=true; //Overwrites sampling settings and forces the server to return true to all survey requests.
  wootric_no_surveyed_cookie = true; //Disables the cookie writing after a survey is taken effectively disabling any client side mechanisms to prevent multiple surveys from being rendered.
  // END OF TEST ONLY FLAGS

  window.wootricSettings = {
    email:'nps@example.com', // TODO: Required to uniquely identify a user. Email is recommended but this can be any unique identifier.
    product_name: 'Wootric', // TODO: The name of the product or service.
    account_token: 'NPS­xxxxxxxx' };

  //Request a survey
  window.wootric('run');
</script>
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
<script type="text/javascript" src="https://cdn.wootric.com/wootric-sdk.js" async onload="window.wootric('run')"></script>
```

We support the HTML5 async attribute to load our snippet.
The `wootricSettings` object is initialized as depicted above.
Take a close look at the onload attribute, it will guarantee that your service is called when the script has loaded.

## Google Tag Manager:
You may use Google Tag Manager to install and manage the Wootric snippet.

- Add a new tag of type `custom HTML`
- Paste the Step 1 snippet inside the HTML container
- Tweak tag firing priority if required
- Set tag firing options to trigger once per page
