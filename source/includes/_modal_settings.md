# Modal Settings

There are three settings available for customizing the wootric modal: ```modal_theme```, ```modal_footprint``` and ```modal_position```. If no settings are provided the modal will default to "light normal bottom", same if you skipped some of them - default value will be used for the missing ones.

## Modal theme settings
```javascript
<!­­ begin Wootric code ­­>
<script type="text/javascript">
window.wootricSettings = {
  email:'nps@example.com', // TODO: The current user's email address.
  created_at: 1234567890, // TODO: The current user's sign­up date as a Unix timestamp.
  product_name: 'Wootric', // TODO: The name of the product or service.
  account_token: 'NPS­xxxxxxxx',
  modal_theme: 'dark',
  properties:{
    role:'manager',// TODO: The current user's role.
    pricing_plan:'Enterprise'// TODO: The current user's pricing plan.
  }
};
</script>
....//The rest of the widget...
<!--­­ end Wootric code --­­>
```

Modal comes with two themes: ```light``` (default) and ```dark```. To set the theme, provide ```modal_theme``` key-value in ```wootricSettings``` object.

Light:
![Compact Survey](spacious_light.png)



Dark:
![Compact Survey](spacious_dark.png)

## Modal footprint settings
```javascript
<!­­ begin Wootric code ­­>
<script type="text/javascript">
window.wootricSettings = {
  email:'nps@example.com', // TODO: The current user's email address.
  created_at: 1234567890, // TODO: The current user's sign­up date as a Unix timestamp.
  product_name: 'Wootric', // TODO: The name of the product or service.
  account_token: 'NPS­xxxxxxxx',
  modal_footprint: 'compact',
  properties:{
    role:'manager',// TODO: The current user's role.
    pricing_plan:'Enterprise'// TODO: The current user's pricing plan.
  }
};
</script>
....//The rest of the widget...
<!--­­ end Wootric code --­­>
```
You can set modal footprint to be ```compact``` for tighter spaces, ```spacious``` for huge spaces or ```normal``` which is default value. To set the footprint, provide ```modal_footprint``` key-value in ```wootricSettings``` object.

Compact:
![Compact Survey](compact_light.png)


Normal:
![Compact Survey](normal_light.png)


Spacious:
![Compact Survey](spacious_light.png)

## Modal position settings
```javascript
<!­­ begin Wootric code ­­>
<script type="text/javascript">
window.wootricSettings = {
  email:'nps@example.com', // TODO: The current user's email address.
  created_at: 1234567890, // TODO: The current user's sign­up date as a Unix timestamp.
  product_name: 'Wootric', // TODO: The name of the product or service.
  account_token: 'NPS­xxxxxxxx',
  modal_position: 'top',
  properties:{
    role:'manager',// TODO: The current user's role.
    pricing_plan:'Enterprise'// TODO: The current user's pricing plan.
  }
};
</script>
....//The rest of the widget...
<!--­­ end Wootric code --­­>
```
Modal position can be either ```top``` or ```bottom``` (default).  To set the position, provide ```modal_position``` key-value in ```wootricSettings``` object.
