const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    screenshotOnRunFailure: true,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },

    baseUrl: 'http://automationexercise.com',
    fixturesFolder: 'cypress/fixtures',
    defaultCommandTimeout: 10000,
    retries: 1,
  },
});