const { defineConfig } = require("cypress");

//For Cucumber Integration
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')
const NodeModulesPolyfillPlugin = require('@esbuild-plugins/node-modules-polyfill').NodeModulesPolyfillPlugin
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin
const addMochawesomePlugin = require('cypress-mochawesome-reporter/plugin')

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    specPattern: ["cypress/e2e/tests/**/*.feature", "cypress/e2e/tests/**/*.cy.{js,jsx,ts,tsx}"],
    async setupNodeEvents(on, config) {
      // implement node event listeners here
      await addCucumberPreprocessorPlugin(on, config); // to allow json to be produced
      // To use esBuild for the bundler when preprocessing
      on(
        "file:preprocessor",
        createBundler({
          plugins: [NodeModulesPolyfillPlugin(config), createEsbuildPlugin(config)],
        })
      );
      await addMochawesomePlugin(on);

      // Make sure to return the config object as it might have been modified by the plugin.
      return config;
    },
  },
});
