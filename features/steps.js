const {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {
  let number = 0;
  Given(/^this sample scenario$/, function() {

  });

  When(/^the scenario is run$/, function() {

  });

  Then(/^the scenario should pass successfully with (.+)$/, function(fanfare) {
    console.log(`Cucumber is set up properly! ${fanfare}`);
  });
});



/*Cucumber.defineSupportCode(function(context) {
  var setWorldConstructor = context.setWorldConstructor;
  var Given = context.Given
  var When = context.When
  var Then = context.Then

  ///// Your World /////
  //
  // Call 'setWorldConstructor' with to your custom world (optional)
  //

  var CustomWorld = function() {};

  CustomWorld.prototype.variable = 0;

  CustomWorld.prototype.setTo = function(number) {
    this.variable = parseInt(number);
  };

  CustomWorld.prototype.incrementBy = function(number) {
    this.variable += parseInt(number);
  };

  setWorldConstructor(CustomWorld);

  ///// Your step definitions /////
  //
  // use 'Given', 'When' and 'Then' to declare step definitions
  //


})*/