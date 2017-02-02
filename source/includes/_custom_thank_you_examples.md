#Custom Thank You Examples

```javascript
<!-- Example 1 -->
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
###Example 1

We have defined both ```thank_you_link_text``` and ```thank_you_link_url```. We have also defined ```promoter_thank_you_link_text``` and ```detractor_thank_you_link_url``` in respectively ```thank_you_link_text_list``` and ```thank_you_link_url_list```. This means that we are going to display button with text 'Promoter thank you text' which opens a 'http://example.com' url for a promoter. Passive is going to see button with text 'Thank you text for all scores!' and url 'http://example.com', while detractor's button url would be 'http://detractor.com' with the same text as passive.

```javascript
<!-- Example 2 -->
var Wootric = {
  thankYouMessages: {
    thank_you_setup: 'Request for action for all scores',
    thank_you_setup_list: {
      promoter_thank_you_setup: 'Promoter request for action'
    }
  },
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
<br><br><br><br>
###Example 2

In this case, in addition to defining a custom button, we have defined ```thank_you_setup``` and ```promoter_thank_you_setup``` in ```thank_you_setup_list```. Therefore on a third page, above the custom button, we will display 'Request for action for all scores' text for passives and detractors, and 'Promoter request for action' for promoters.

```javascript
<!-- Example 3 -->
var Wootric = {
  // thankYouMessages not defined
  thankYouLinks: {
    thank_you_link_text: 'Thank you text for all scores!',
    thank_you_link_text_list: {
      detractor_thank_you_link_text: 'Detractor thank you text',
      passive_thank_you_link_text: 'Passive thank you text',
      promoter_thank_you_link_text: 'Promoter thank you text'
    },
    thank_you_link_url_list: {
      detractor_thank_you_link_url: 'Detractor thank you url'
    }
  }
};
```
<br><br><br><br><br><br><br><br><br><br><br>
###Example 3

With this kind of setting we are missing the default ```thank_you_link_url``` and have only detractor url defined. Thus, the survey will remain open to detractors to display the custom button and, if social media is defined, it will remain open to promoters. For passives, there is nothing to display (neither a custom button or social media buttons), so the survey will close automatically.

```javascript
<!-- Example 4 -->
var Wootric = {
  thankYouMessages: {
    thank_you_main: 'Thank you for your feedback!',
    thank_you_main_list: {
      promoter_thank_you_main: 'Promoter thank you'
    }
  }
};
```
<br><br><br><br><br><br>
###Example 4

In this example, the third page will display only a thank you message and then disappear. If social media settings are defined, the third page will remain and end users will have time to share on social media. The ```thank_you_main``` ("Thank you for your feedback!") message will appear at the top of the survey in bold green font for both the passives and detractors, while the custom ```promoter_thank_you_main``` ("Promoter thank you") message will appear for promoters.
