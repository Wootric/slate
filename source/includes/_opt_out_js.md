# Opt out from Surveys

```js
window.wootricSettings = {
  email:'nps@example.com',// TODO: Required to uniquely identify a user. Email is recommended but this can be any unique identifier.
  created_at: 1234567890, // TODO: The current logged in user's sign-up date as a Unix timestamp.
  account_token: 'NPS-xxxxxxx',
  show_opt_out: true
};
```

You can offer users a way to opt-out from surveys from within the modal. To do so, you must enable the ```show_opt_out``` flag.
Set it to true inside the wootricSettings hash and your users will be able to turn their surveys off.

![opt_out](opt_out.png)
