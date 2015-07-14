#Social Media Share Settings

```javascript
<!--­­ begin Wootric code ­­-->
<script type="text/javascript">
wootric_first_survey=45;
window.wootricSettings = {
  email:'nps@example.com',
  created_at: 1234567890,
  product_name: 'Wootric',
  account_token: 'NPS­xxxxxxxx',
  twitter_account: 'twitteraccount',
  facebook_page: 'https://www.facebook.com/myPage',
  social_message: 'social message',
  social_link_text: 'Click me!',
  social_link_url: 'http://example.com'};
</script>
....//The rest of the widget...
<!--­­ end Wootric code --­­>
```

Wootric allows you to display a social share screen for your promoters (9-10).
In order to do that, you need to configure ```wootricSettings``` passing your product's ```twitter_account``` and/or ```facebook_page```. In addition, Twitter option will only display if promoter provided a feedback text.

If configured properly, Wootric will display a third page, right after promoter submits feedback, asking "Would you be willing to share your positive comments?" and allowing the end user to "like" your Facebook page or share a comment through the Twitter.

You may also provide ```social_message```, ```social_link_text``` and ```social_link_url```. If social message is provided it will replace "Would you be willing to share your positive comments?" text. Providing social link text and url (both are required for this option to work) will display additional link on a third page as a ```social_link_text``` leading to ```social_link_url```. With both text and url provided you don't have to configure ```twitter_account``` and/or ```facebook_page``` for the "social share page" to show up.
