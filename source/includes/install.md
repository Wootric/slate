## Installing the code snippet yourself.

Copy and paste the code right before the closing <\body> tag of every page where you would like
the Wootric survey to appear.

Don’t forget!! Customize the TODO fields for your application, adding additional custom fields
if required. This involves basic server­side code to fill in certain values dynamically.

Fields that require your input at a minimum:

* **email:** The current user’s email address. This field ensures that you can identify and respond to
your users within our application. (Format is string within single quotes)

* **created_at:** The current user's sign­up date as a Unix timestamp. Wootric uses the created_at
reference date to manage the sampling of your user base. (Format is 10 digit Unix timestamp).

* **product_name:** The name of the product or service. The product/company/service name that
you want to appear in the NPS survey question. (Format is string within single quotes). For
example, if you set the value of the product_name to “Wootric”, we will ask, “How likely are you
to recommend Wootric to a friend or colleague?” By default we ask “How likely are you to
recommend this product or service to a friend or colleague?”

> Here is an example section of the code snippet with basic TODO fields set:

```javascript
<!--­­ begin Wootric code ­­-->
<script type="text/javascript">
window.wootricSettings = {
  email: 'nps@example.com', // TODO: The current user's email address.
  created_at: 1234567890, // TODO: The current user's sign­up date as a Unix timestamp.
  product_name: 'Wootric', // TODO: The name of the product or service.
  account_token: 'NPS­xxxxxxxx' };
</script>
....//The rest of the widget...
<!--­­ end Wootric code --­­>
```

> **If you do not have values for a field be sure to remove the field or comment them out.**

```javascript
<!--­­ begin Wootric code ­­-->
<script type="text/javascript">
window.wootricSettings = { account_token: 'NPS­xxxxxxx' };
</script>
....//The rest of the widget...
<!--­­ end Wootric code --­­>
```

## Step 2. That’s it! View your Responses Live

Once your Wootric snippet is installed, eligible users will immediately start being surveyed.
Depending on the traffic of your site, you could start to see responses within a few minutes.
Responses will come in to your Wootric dash in real time.


### **No data yet?**
We provide a link within your empty dashboard to a sample dash with dummy
data.
### **I’d like to do some testing first. How do I see ensure the survey shows up on demand?**

You can easily install Wootric in your development environment for testing. The snippet is
already set up to show the survey immediately for testing purposes only.
> When you are ready for production, make sure to comment out the line wootric_survey_immediately = true.

```javascript
<!­­-- begin Wootric code ­­-->
<script type="text/javascript">
wootric_survey_immediately=true;//Fire immediately for testing
window.wootricSettings = {
  email:'nps@example.com', // TODO: The current user's email address.
  product_name: 'Wootric', // TODO: The name of the product or service.
  account_token: 'NPS­xxxxxxxx' };
</script>
....//The rest of the widget...
<!--­­ end Wootric code ­­-->
```

### Additional notes on Wootric snippet placement:

#### For sites with logged­in users:
If your site has registered users, we recommend that you
paste the tag on only the pages that your logged in users will access to allow unique user
identification.

#### For ecommerce sites:
If your site has a checkout flow, we recommend that you paste the tag
on pages that won’t interrupt checkout. The most commonly used location is the transaction
completion page.
> Make sure to leave the line **wootric_survey_immediately = true;** in the
code snippet to force the survey to load on every visit to the "checked­out" page.

```javascript
<!--­­ begin Wootric code --­­>
<script type="text/javascript">
wootric_survey_immediately=true;//Fire immediately for transactional NPS
window.wootricSettings = {
  email:'nps@example.com', // TODO: The current user's email address.
  product_name: 'Wootric', // TODO: The name of the product or service.
  account_token: 'NPS­xxxxxxxx' };
</script>
....//The rest of the widget...
<!--­­ end Wootric code ­­-->
```

#### Google Tag Manager:
You may use Google Tag Manager to install and manage the Wootric
snippet.
