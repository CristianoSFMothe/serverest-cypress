const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://front.serverest.dev/login",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      defaultCommandTimeout: 5000,
      hideCredentials: true,
    },
    experimentalRunAllSpecs: true,
  },
  video: false,
  viewportHeight: 880,
  viewportWidth: 1280,
});
