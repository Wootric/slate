#Custom Language Setting

```javascript
<!--­­ begin Wootric code ­­-->
<script type="text/javascript">
wootric_first_survey=45;
window.wootricSettings = {
  email:'nps@example.com',
  created_at: 1234567890,
  product_name: 'Wootric',
  account_token: 'NPS­xxxxxxxx',
  language: 'XX' };
</script>
....//The rest of the widget...
<!--­­ end Wootric code --­­>
```

Wootric allows you to set a custom language for the survey modal.
To set a custom language add ```language``` parameter to ```wootricSettings``` and pass appropriate country code.

Please be advised, that custom messages and/or placeholder, takes precedence over language settings.

Currently supported languages (with country codes):

Language | Code
-------- | ----
Spanish | ES
Portuguese | PT
Polish | PL
French | FR
German | DE
Italian | IT
Turkish | TR
Dutch | NL
Chinese (Simplified) | CN_S
Chinese (Traditional) | CN_T
Japanese | JP
