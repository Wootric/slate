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
To set a custom language add ```language``` parameter to ```wootricSettings``` and pass appropriate language code.

Please be advised, that custom messages and/or placeholder, takes precedence over language settings.

Currently supported languages (with language codes):

Language | Code
-------- | ----
Arabic | AR
Chinese (Simplified) | CN_S
Chinese (Traditional) | CN_T
Danish | DA
Dutch | NL
English | EN
Finnish | FI
French | FR
German | DE
German -informal | DE_DE_X_INFORMAL
Hungarian | HU
Indonesian | ID
Italian | IT
Japanese | JA
Lithuanian | LT
Norwegian | NO
Polish | PL
Portuguese | PT
Romanina | RO
Russian | RU
Slovene | SL
Spanish | ES
Spanish - Mexico | ES_MX
Swedish | SV
Turkish | TR
Vietnamese | VN