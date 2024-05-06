const { defineConfig } = require("cypress");
const { registerArgosTask } = require("@argos-ci/cypress/task");

module.exports = defineConfig({
  defaultCommandTimeout: 30000,
  responseTimeout: 60000,
  chromeWebSecurity: false,
  redirectionLimit: 100,
  userAgent: 'testing_agent_visual',
  env: {
    AUTH_USER: 'staging',
    AUTH_PASS: 'staging_pwd',
  },
  // setupNodeEvents can also be defined in "component"
  e2e: {
    baseUrl: 'https://www.livoneo.de',
    async setupNodeEvents(on, config) {
      registerArgosTask(on, config, {
        // Enable upload to Argos only when it runs on CI.
        uploadToArgos: !!process.env.CI,
        mode: 'monitoring',
        // Set your Argos token (required only if you don't use GitHub Actions).
        token: "1470c4a6f6642d8b04461a5ec39aca6cb98b861f",
      });

      // include any other plugin code...
    },
  },
});