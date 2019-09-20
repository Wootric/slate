# Single Page App (SPA)
[Click here for complete examples of different frameworks such as Angular, React, Vue and Ember.](https://github.com/Wootric/spa-examples)

## The simplest integration
```javascript
<!-- Pull the Wootric Snippet -->
<script type="text/javascript" src="https://cdn.wootric.com/wootric-sdk.js"></script>
<!-- begin Wootric code -->
<script type="text/javascript">
  // TEST ONLY FLAGS - REMOVE BEFORE GOING LIVE
  wootric_survey_immediately=true; //Overwrites sampling settings and forces the server to return true to all survey requests.
  wootric_no_surveyed_cookie = true; //Disables the cookie writing after a survey is taken effectively disabling any client side mechanisms to prevent multiple surveys from being rendered.
  // END OF TEST ONLY FLAGS
  window.wootricSettings = {
    email:'customer@example.com', //TODO: Required to uniquely identify a user. Email is recommended but this can be any unique identifier.
    created_at: 1234567890, //TODO:replace it with date when your customer signed up           
    account_token: 'NPS-XXXX' //TODO:replace it with your account token       
  };
  window.wootric('run');
</script>
<!-- end Wootric code -->
```
* Put this code snippet on your index.html
* Update the TODOs
* When you re-load the page, you should see Wootric survey show up.
* You are done.

## AngularJS Example (using Factory)

```javascript
// 1. Load Wootric JS SDK
<script type="text/javascript" src="https://cdn.wootric.com/wootric-sdk.js"></script>

// 2. Create Factory
app.factory('wootricFactory', function() {
  window.wootricSettings = {
    email: 'customer@example.com',// TODO: Required to uniquely identify a user. Email is recommended but this can be any unique identifier.
    created_at: 1234567890, // TODO: The current logged in user's sign-up date as a 10 digit Unix timestamp.
    account_token: 'NPS-xxxxxxxx' // This is your unique account token.
  };
  return {
    run: function() {
      window.wootric_survey_immediately = true; // Shows survey immediately for testing purposes.  TODO: Comment out for production.
      window.wootric_no_surveyed_cookie = true; // Bypass cookie based throttle for testing purposes.  TODO: Comment out for production.     
      window.wootric("run");
    }
  }
});

// 3. Using the factory in your controller
app.controller('myController', [
  'wootricFactory',
  function(wootricFactory){
    wootricFactory.run();
  }
]);

// 4. Optional: More control on survey display 
User.getData().then(function (wootricFactory) {
    wootricFactory.run();
});
```
1. Load Wootric JS SDK: add below script tag to the file where you load all other 3rd party script.
2. Create Factory: add below code snippet to create wootricFactory so it can be fired in a single-page application with wootricFactory.run().
3. Using the factory in your controller.
4. Optional: More control on survey display -- say you want to delay the "triggering" of Wootric until after user data is available.

[Click here for angularjs code example](https://github.com/Wootric/spa-examples/tree/master/angularjs)


## Angular Example (using Directive)

```javascript
// 1. Create Directive
import { Directive, AfterViewInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appWootric]'
})
export class WootricDirective implements AfterViewInit {

  constructor(private elementRef: ElementRef) {
    window['wootric_no_surveyed_cookie'] = true; // Shows survey immediately for testing purposes.  TODO: Comment out for production.
    window['wootric_survey_immediately'] = true; // Bypass cookie based throttle for testing purposes.  TODO: Comment out for production.
    window['wootricSettings'] = {
      email: 'nps@example.com', // TODO: Required to uniquely identify a user. Email is recommended but this can be any unique identifier.
      created_at: 1234567890, // TODO: The current logged in user's sign-up date as a 10 digit Unix timestamp.
      account_token: 'NPS-xxxxxxxx' // This is your unique account token.
    };
  }

  ngAfterViewInit() {
    var script = document.createElement('script');

    script.type = 'text/javascript';
    script.src = 'https://cdn.wootric.com/wootric-sdk.js';
    script.async = true;
    script.onload = function() {
      window['WootricSurvey'].run();
    };

    this.elementRef.nativeElement.appendChild(script);
  }
}

// 2. Use Directive
<div style="text-align:center" appWootric>
  <h1>
    Welcome to Wootric!
  </h1>
</div>
```
1. Create Directive
2. Use Directive

[Click here for Angular code example](https://github.com/Wootric/spa-examples/tree/master/angular)


## React Example (using Component)

```javascript
// 1. Create Component
import React from 'react';

class Wootric extends React.Component {
  componentDidMount() {
    let setupScript = document.createElement('script');
    setupScript.type = 'text/javascript';
    setupScript.async = true;
    setupScript.innerHTML = `
      wootric_no_surveyed_cookie = true;
      wootric_survey_immediately = true;
      window.wootricSettings = {
        email: 'customer@example.com',
        created_at: 1234567890,
        account_token: 'NPS-xxxxxxxx'
      };
    `;
    document.body.appendChild(setupScript);

    // Beacon
    let beacon = document.createElement('script');
    beacon.type = 'text/javascript';
    beacon.async = true;

    beacon.src = 'https://cdn.wootric.com/wootric-sdk.js';
    beacon.onload = function() {
      window.wootric('run');
    };
    document.body.appendChild(beacon);
  }

  render() {
    return (
      <div/>
    );
  }
}

export default Wootric;

// 2. Use Component
import React from 'react';
import Wootric from './Wootric';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          Welcome to Wootric
        </a>
      </header>
      <Wootric/>
    </div>
  );
}

export default App;
```
1. Create Component
2. Use Component

[Click here for React code example](https://github.com/Wootric/spa-examples/tree/master/react-example)


## More Examples

More code examples can be found [here](https://github.com/Wootric/spa-examples).

That's it! Once your Wootric snippet is installed, eligible users will immediately start being surveyed.
Depending on the traffic of your site, you could start to see responses within a few minutes.
Responses will come in to your Wootric dash in real time.
