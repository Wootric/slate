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
  add_score_param_to_url: true,
  add_comment_param_to_url: true,
  thankYouMessages: {
    thank_you_setup: 'Request for action for all scores',
    thank_you_setup_list: {
      detractor_thank_you_setup: 'Detractor request for action',
      passive_thank_you_setup: 'Passive request for action',
      promoter_thank_you_setup: 'Promoter request for action'
    },
    thank_you_main: 'Thank you for all scores!',
    thank_you_main_list: {
      detractor_thank_you_main: 'Detractor thank you',
      passive_thank_you_main: 'Passive thank you',
      promoter_thank_you_main: 'Promoter thank you'
    }
  },
  thankYouLinks: {
    thank_you_link_text: 'Thank you text for all scores!',
    thank_you_link_url: 'Thank you url for all scores!',
    thank_you_link_text_list: {
      detractor_thank_you_link_text: 'Detractor thank you text',
      passive_thank_you_link_text: 'Passive thank you text',
      promoter_thank_you_link_text: 'Promoter thank you text'
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

Wootric allows you also to display a customized button with a request for action and a 'thank you' message on a third page of the survey. This feature can be configured to work for all scores.

The ```thank_you_setup``` field is used as a request for action. It will
appear only if a custom button has been configured and can be used to prompt an
action from the end user. The ```thank_you_main``` fields appear at the top of
the third screen of the survey in bold, green font.

The ```Wootric.thankYouMessages``` object can contain ```thank_you_setup``` and ```thank_you_main``` which are the default values for every score if ```thank_you_setup_list``` / ```thank_you_main_list``` are not provided, or a default value for keys missing in ```thank_you_setup_list``` / ```thank_you_main_list```

The ```Wootric.thankYouLinks``` object can contain ```thank_you_link_text``` and ```thank_you_link_url``` which are default text/url for every score if ```thank_you_link_text_list```/```thank_you_link_url_list``` are not provided or are missing appropriate keys.

If you are using your own URL and would like to hide score, comment and/or email as parameters, you can set ```add_score_param_to_url```, ```add_comment_param_to_url``` and/or ```add_email_param_to_url```keys to ```false```. They will be included in the URL by default.

Parameters names are ```wootric_score``` for score and ```wootric_comment``` for comment.

If you have set for example ```"http://promoterurl.com/endpoint"``` as your url, setting both of the keys to true will result in the url being ```http://promoterurl.com/endpoint?wootric_score=SCORE&wootric_comment=COMMENT```.
