const {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {
  let number = 0;
  Given(/^this sample scenario$/, function(callback) {
    callback(null, 'pending');

  });

  When(/^the scenario is run$/, function() {

  });

  Then(/^the scenario should pass successfully with (.+)$/, function(fanfare) {
    console.log(`Cucumber is set up properly! ${fanfare}`);
  });
});
