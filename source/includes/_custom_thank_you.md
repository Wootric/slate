#Custom Thank You Settings

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
  facebook_page: 'https://www.facebook.com/myPage'
...
};

var Wootric = {
  thankYouMessages: {
    thank_you_setup: 'Thank you for all scores!',
    thank_you_setup_list: {
      detractor_thank_you_setup: 'Detractor thank you',
      passive_thank_you_setup: 'Passive thank you',
      promoter_thank_you_setup: 'Promoter thank you'
    }
  },
  thankYouLinks: {
    thank_you_link_text: 'Thank you text for all scores!',
    thank_you_link_url: 'Thank you url for all scores!',
    thank_you_link_text_list: {
      detractor_thank_you_link_text: 'Detractor thank you text',
      passive_thank_you_link_text: 'Passive thank you text',
      promoter_thank_you_link_text: 'Promoter thank you text',
    },
    thank_you_link_url_list: {
      detractor_thank_you_link_url: 'Detractor thank you url',
      passive_thank_you_link_url: 'Passive thank you url',
      promoter_thank_you_link_url: 'Promoter thank you url'
    }
  }
};
</script>
....//The rest of the widget...
<!--­­ end Wootric code --­­>
```

Wootric allows you also to display a customized button and 'thank you' message on a third page of the survey. This feature can be configured to work for all scores.

The ```Wootric.thankYouMessages``` object can contain ```thank_you_setup``` which is default value for every score if ```thank_you_setup_list``` is not provided, or a default value for keys missing in ```thank_you_setup_list```

The ```Wootric.thankYouLinks``` object can contain ```thank_you_link_text``` and ```thank_you_link_url``` which are default text/url for every score if ```thank_you_link_text_list```/```thank_you_link_url_list``` are not provided or are missing appropriate keys.
