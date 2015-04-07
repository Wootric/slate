# Custom Messages

Wootric allows you to specify additional custom messages.
This is done with the **customMessages** object.

**Note:**
If the customMessages object is not specified, the default messages will
be presented instead. By default, we present the following messages:

* The default Wootric question:
**"How likely are you to recommend Wootric to a friend or co-worker?"**
* The default follow-up question:
**"Thank you! Care to tell us why?"**
* The default placeholder text:
**"Help us by explaining your score."**

## Full example

This example shows how the full ready Wootric snippet looks like with
the custom messages specified.

For instance, if the **followup_question** and **followup_questions_list** properties
are set at the same time, the messages from the **followup_questions_list** property
will be shown.

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
      wootric_recommend_target: "Custom Wootric recommend target text",
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

## followup_question

Defines the main follow-up question for all scores.
Therefore, you will see the same question, regardless of which score you have chosen.

If this property is not specified, the default follow-up question will be
shown instead.

> This will be shown after choosing the score regardless of its value.

```javascript
window.customMessages = {
      followup_question: "Custom message for all scores",
  };
```

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
when a user selects the score from the range of 9-10.

```javascript
window.customMessages = {
    followup_questions_list: {
      promoter_question: "Custom message for promoters"
    }
};
```

## wootric_recommend_target
Contains a customized recommend target text that is the end part of the
question.
By default, when this property is not set, we display:
"How likely are you to recommend Wootric to a friend or co-worker?"

Example:

If wootric_recommend_target = "your friends", the question will result in:
"How likely are you to recommend Wootric to your friends?"

```javascript
window.customMessages = {
  wootric_recommend_target: "Custom Wootric recommend target text"
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
An object that holds custom placeholder texts for detractors, passives and promoters.

Currently we offer the following properties for you to specify:

* detractor_text
* passive_text
* promoter_text

If you set e.g. one placeholder property of the three available, you will see the message
for the property that you have specified. For the rest of the properties,
the default placeholder text will be presented according to the score that the user has selected.

```javascript
window.customMessages = {
  placeholder_texts_list: {
    detractor_text: "Custom placeholder text for detractors",
    passive_text: "Custom placeholder text for passives",
    promoter_text: "Custom placeholder text for promoters"
  }
};
```

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
