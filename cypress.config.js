const { defineConfig } = require("cypress");

const addAccessibilityTasks  = require('wick-a11y/accessibility-tasks');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      addAccessibilityTasks(on);
      return config;
    },
    baseUrl: 'https://event-parcel.vercel.app/',
    watchForFileChanges: false,
    testIsolation: false,
    experimentalRunAllSpecs: true,
  },

  accessibilityFolder: 'cypress/report/accessibility',
});
