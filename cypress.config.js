const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 60000, // in milliseconds
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    host: "https://example.com",
  },
});
