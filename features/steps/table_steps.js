const {defineSupportCode} = require('cucumber');
const assert = require('assert');

defineSupportCode(function({Given, When, Then}) {
  Given(/^a table step$/, function(table) {
    const expected = [
      ['Cucumber', 'Cucumis sativus'],
      ['Burr Gherkin', 'Cucumis anguria']
    ]
    assert.deepEqual(table.raw(), expected);
  });

  When(/^I run cucumber.js$/, function(callback) {
    callback(null, 'pending');

  });

  When(/^it passes$/, function(callback) {
    callback(null, 'pending');
  });

});