const { defineConfig } = require("cypress");

module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',
  
  e2e: {
    setupNodeEvents(on, config) {
       require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
  env:{
    URL: "https://naveenautomationlabs.com/opencart/index.php?route=account/register"
  }
});
