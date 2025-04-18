const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://automationpratice.com.br/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
