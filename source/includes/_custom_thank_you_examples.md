#Custom Thank You Examples

```javascript
<!-- Example 1 -->
window.thankYouMessages = {
  thank_you_setup: 'Thank you for all scores!',
  thank_you_setup_list: {
    promoter_thank_you_setup: 'Promoter thank you'
  }
};
```

###Example 1

We have defined ```thank_you_setup``` and ```promoter_thank_you_setup``` in ```thank_you_setup_list```. Therefore on a third page we will display 'Thank you for all scores!' text for passives and detractors, and 'Promoter thank you' for promoters.

 ```javascript
<!-- Example 2 -->
var Wootric = {
  thankYouLinks: {
    thank_you_link_text: 'Thank you text for all scores!',
    thank_you_link_url: 'http://example.com',
    thank_you_link_text_list: {
      promoter_thank_you_link_text: 'Promoter thank you text'
    },
    thank_you_link_url_list: {
      detractor_thank_you_link_url: 'http://detractor.com'
    }
  }
};
```
###Example 2

We have defined both ```thank_you_link_text``` and ```thank_you_link_url```. We have also defined ```promoter_thank_you_link_text``` and ```detractor_thank_you_link_url``` in respectively ```thank_you_link_text_list``` and ```thank_you_link_url_list```. This means that we are going to display button with text 'Promoter thank you text' which opens a 'http://example.com' url for a promoter. Passive is going to see button with text 'Thank you text for all scores!' and url 'http://example.com', while detractor's button url would be 'http://detractor.com' with the same text as passive.

```javascript
<!-- Example 3 -->
var Wootric = {
  // thankYouMessages not defined
  thankYouLinks: {
    thank_you_link_text: 'Thank you text for all scores!',
    thank_you_link_text_list: {
      detractor_thank_you_link_text: 'Detractor thank you text',
      passive_thank_you_link_text: 'Passive thank you text',
      promoter_thank_you_link_text: 'Promoter thank you text',
    },
    thank_you_link_url_list: {
      detractor_thank_you_link_url: 'Detractor thank you url',
    }
  }
};
```
###Example 3

With this kind of setting we are missing the default ```thank_you_link_url``` and have only detractor url defined. With no ```Wootric.thankYouMessages``` object defined, we will display third page only for detractors if social media share (Facebook and Twitter) is also not defined (because there is no message to display and we can show complete button only for detractors).
