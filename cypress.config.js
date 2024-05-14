const { defineConfig } = require("cypress");
const { registerArgosTask } = require("@argos-ci/cypress/task");

module.exports = defineConfig({
  defaultCommandTimeout: 30000,
  requestTimeout: 15000,
  responseTimeout: 60000,
  chromeWebSecurity: false,
  redirectionLimit: 100,
  userAgent: 'testing_agent_visual',
  env: {
    AUTH_USER: process.env.STAGE_USER,
    AUTH_PASS: process.env.STAGE_PASSW,
  },
  // setupNodeEvents can also be defined in "component"
  e2e: {
    baseUrl: process.env.BASE_URL,
    async setupNodeEvents(on, config) {
      registerArgosTask(on, config, {
        // Enable upload to Argos only when it runs on CI.
        uploadToArgos: !!process.env.CI,
        mode: 'monitoring',
        // Set your Argos token (required only if you don't use GitHub Actions).
        token: process.env.ARGOS_TOKEN
      });

      // include any other plugin code...
    },
  },
});