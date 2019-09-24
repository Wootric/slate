# Custom Messages

Wootric allows you to customize messaging within the survey.
This is done with the **customMessages** object.

**Note:** This method is for advanced/custom installs only. Custom messages can be
set within the [Wootric settings
page](https://app.wootric.com/user_settings/edit#!/survey-follow).

When the customMessages object is not specified, the default messages will
be presented instead. By default, we present the following messages:

* The default Wootric question:
**"How likely are you to recommend Wootric to a friend or co-worker?"**
* The default follow-up question:
**"Thank you! Care to tell us why?"**
* The default placeholder text:
**"Help us by explaining your score."**

## Full example
```javascript

<!-- begin Wootric code -->
<script>
  window.wootricSettings = {
    email: 'nps@example.com', // TODO: The current user's email address.
    created_at: 1234567890, // TODO: The current user's sign­up date as a Unix timestamp.
    product_name: 'Wootric', // TODO: The name of the product or service.
    account_token: 'NPS­xxxxxxxx'
  };
  window.customMessages = {
      followup_question: "Custom message for all scores",
      followup_questions_list: {
          detractor_question: "Custom message for detractors",
          passive_question: "Custom message for passives",
          promoter_question: "Custom message for promoters"
      },
      placeholder_text: "Custom placeholder for all scores",
      placeholder_texts_list: {
        detractor_text: "Custom placeholder text for detractors",
        passive_text: "Custom placeholder text for passives",
        promoter_text: "Custom placeholder text for promoters"
      }
  };
</script>
<!--­­ end Wootric code --­­>
```

This example shows how the full ready Wootric snippet looks like with
the custom messages specified.

For instance, if the **followup_question** and **followup_questions_list** properties
are set at the same time, the messages from the **followup_questions_list** property
will be shown.


## followup_question
> This will be shown after choosing the score regardless of its value.

```javascript
window.customMessages = {
      followup_question: "Custom message for all scores",
  };
```

Defines the main follow-up question for all scores.
Therefore, you will see the same question, regardless of which score you have chosen.

If this property is not specified, the default follow-up question will be
shown instead.


## followup_questions_list
An object that contains custom messages for detractors,
passives and promoters.

There are the following properties that you may specify:

* detractor_question
* passive_question
* promoter_question

If you set e.g. one property of the three available, you will see the message
for the property that you have specified. For the rest of the properties,
the default message will be presented according to the score that the user has selected.

```javascript

window.customMessages = {
    followup_questions_list: {
        detractor_question: "Custom message for detractors",
        passive_question: "Custom message for passives",
        promoter_question: "Custom message for promoters"
    }
};

```

## detractor_question
Contains the message that will be presented to a detractor i.e.
when a user selects the score from the range of 0-6.

```javascript
window.customMessages = {
    followup_questions_list: {
        detractor_question: "Custom message for detractors",
    }
};
```

## passive_question
Contains the message that will be presented to a passive i.e.
when a user selects the score from the range of 7-8.

```javascript
window.customMessages = {
    followup_questions_list: {
      passive_question: "Custom message for passives"
    }
};
```

## promoter_question
Contains the message that will be presented to a promoter i.e.
when a user selects the score from the range of 910.

```javascript
window.customMessages = {
    followup_questions_list: {
      promoter_question: "Custom message for promoters"
    }
};
```

## placeholder_text
Contains a placeholder text that is presented to the user
after selecting the score.

If this property is not specified, the default placeholder will be shown instead.

```javascript
window.customMessages = {
  placeholder_text: "Custom placeholder for all scores"
};
```

## placeholder_texts_list
```javascript
window.customMessages = {
  placeholder_texts_list: {
    detractor_text: "Custom placeholder text for detractors",
    passive_text: "Custom placeholder text for passives",
    promoter_text: "Custom placeholder text for promoters"
  }
};
```
An object that holds custom placeholder texts for detractors, passives and promoters.

Currently we offer the following properties for you to specify:

* detractor_text
* passive_text
* promoter_text

If you set e.g. one placeholder property of the three available, you will see the message
for the property that you have specified. For the rest of the properties,
the default placeholder text will be presented according to the score that the user has selected.


## detractor_text
Contains a placeholder text presented to a detractor when the score
value from the range of 0-6 has been selected.

```javascript
window.customMessages = {
  placeholder_texts_list: {
    detractor_text: "Custom placeholder text for detractors"
  }
};
```

## passive_text
Contains a placeholder text presented to a passive when the score
value from the range of 7-8 has been selected.

```javascript
window.customMessages = {
  placeholder_texts_list: {
    passive_text: "Custom placeholder text for passives"
  }
};
```

## promoter_text
Contains a placeholder text presented to a promoter when the score
value from the range of 9-10 has been selected.

```javascript
window.customMessages = {
  placeholder_texts_list: {
    promoter_question: "Custom message for promoters"
  }
};
```

## ask_permission_to_share_feedback
A variable to ask your users if they wish to be contacted about their feedback.  This option creates a checkbox on the open-ended feedback section of the survey,  which by default is selected.  The user’s selection (opt in/out) creates a filter in your Wootric Dashboard to indicate and sort by their status.
It’s also possible to customize the wording of the label by using the permission_labels flag. The default wording is:  ‘I give permission to contact me about sharing my feedback’ in English.  Each language you wish to customize should have its own key and value.  Otherwise, the survey will revert to the default English text.

We will create a filter to identify the users who opted in as shown in the picture.

```javascript
window.wootricSettings = {
  account_token: 'NPS-YOURTOKEN',
  email: 'your@email.com'
  ask_permission_to_share_feedback: true
  permission_labels: {
    EN: 'I give permission to contact me about sharing my feedback',
    JA: '私は私のフィードバックを共有することについて私に連絡する許可を与える'
  }
}
```

<img src="https://wootric-marketing.s3.amazonaws.com/authorize.png" width="400">

