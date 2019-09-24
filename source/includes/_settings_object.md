# The Wootric Settings Object

```javascript
window.wootricSettings = {
  account_token: 'NPS-ABCD1234',
  aria: true,
  created_at: '1528416000',
  email: 'nps@example.com',
  facebook_page: 'https://www.facebook.com/test',
  language: 'EN',
  product_name: 'your product name',
  properties : { country: 'MX' },
  twitter_account: 'test',
  wootric_close_position: 'left',
  wootric_recommend_target: 'your audience',
  ask_permission_to_share_feedback: true,
  permission_labels: {
    EN: 'I give permission to contact me about sharing my feedback'
  }
};
```

This is a list of the values you can set into your wootricSettings object and its defaults.
Keep in mind that your code settings will always override whatever you set in your Wootric Account Settings page.

Variable | Default | Description
---- | ---- | -------
account_token | null | Your account token. Required.
aria | null | Enable extended accessibility features such as high contrast and extended aria support.
created_at | null | The created_at date in your app for the end_user you are attempting to survey.
email | null | The email of the end_user you are attempting to survey.
facebook_page | null | A Facebook link you can use to refer promoters to your Facebook page.
language | null | The language code of the survey.
product_name | depends on the language | Your product name. 
properties | null | The custom properties of the end_user you are attempting to survey.
twitter_account | null | A Twitter link you can use to tag your account anytime a promoter leaves a comment.
wootric_close_position | left | The position of the close button of your survey.
wootric_recommend_target | depends on the language | Your audience.
ask_permission_to_share_feedback | false | Ask your end users if they wish to be contacted after leaving written feedback.
permission_labels | null | A hash containing your labels used to ask permission to share feedback. Each language has its own key.
event_name | null | Set an event name here to be used with Wootric's Targeted Sampling.

### The code example generates the following survey:

### Question screen:
![Example](https://wootric-marketing.s3.amazonaws.com/docs-example-1.png)
### Second screen:
![Example1](https://wootric-marketing.s3.amazonaws.com/docs-example-2.png)
### Social screen:
![Example2](https://wootric-marketing.s3.amazonaws.com/docs-example-3.png)

