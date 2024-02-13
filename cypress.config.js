const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://front.serverest.dev/login",
    setupNodeEvents(on, config) {
    },
    env: {
      requestMode: true,
      snapshotOnly: true,
      defaultCommandTimeout: 5000,
      hideCredentials: true,
    },
    experimentalRunAllSpecs: true,
    experimentralSessionAndOrigin: true,
  },
  video: false,
  viewportHeight: 880,
  viewportWidth: 1280,
});
