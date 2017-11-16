# Single Page App (SPA)
[Click here for complete examples of different frameworks such as Angular, Ember and React.](https://github.com/Wootric/spa-examples)

## The simplest integration
```javascript
 <!-- begin Wootric code -->
<script type="text/javascript">
  wootric_survey_immediately = true; //TODO:comment this in production
  window.wootricSettings = {
    email:'nps@example.com', //TODO: Required to uniquely identify a user. It can be any unique value other than email.
    created_at: 1234567890, //TODO:replace it with date when your customer signed up           
    account_token: 'NPS-XXXX' //TODO:replace it with your account token       
  };    
</script>
<script type="text/javascript" src="https://disutgh7q0ncc.cloudfront.net/beacon.js"></script>
<script>window.wootric("run")</script>
<!-- end Wootric code -->
```
* Put this code snippet on your index.html
* Update the TODOs
* When you re-load the page, you should see Wootric survey show up.
* You are done.

## Angular Step 1: Create Factory

```javascript
<!-- begin Wootric code -->
angular.module('wootricAngularApp')
.factory('wootricFactory', function () {
window.wootricSettings = {
    email: 'nps@example.com',// TODO: Required to uniquely identify a user. It can be any unique value other than email.
    created_at: 1234567890, // TODO: The current logged in user's sign-up date as a 10 digit Unix timestamp.
    account_token: 'NPS-xxxxxxx' // This is your unique account token.
  };
  return {
    run: function() {
      window.wootric_survey_immediately = true; // TODO: Comment out for production.      
      window.wootric("run");
    }
  }
});
app.controller('myController', [
  'wootricFactory',
  function(wootricFactory, $scope, $location){
    wootricFactory.run();
  }
]);
<!-- end Wootric code -->
```
A way to load the Wootric snippet in a factory file so it can be fired in a single-page application with wootricFactory.run();  

## Angular Step 2. Load Wootric JS SDK
```
<script type="text/javascript" src="https://disutgh7q0ncc.cloudfront.net/beacon.js"></script>
```
Add this script tag to the file where you load all other 3rd party scripts
## Angular Step 3. Using the factory in your controller

```javascript
angular.module('wootricAngularApp')
  .controller('MainCtrl', ['wootricFactory', function (wootricFactory) {
    wootricFactory.run();
  }]);
```

##Optional: More control on survey display
Say you want to delay the "triggering" of Wootric until after user data is available.

```javascript
  User.getData().then(function (wootricFactory) {
     wootricFactory.run();
  });
<!--­­ end Wootric code ­­-->
```

That's it! Once your Wootric snippet is installed, eligible users will immediately start being surveyed.
Depending on the traffic of your site, you could start to see responses within a few minutes.
Responses will come in to your Wootric dash in real time.
