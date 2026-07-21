const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  

  e2e: {
    baseUrl: 'https://analista-teste.seatecnologia.com.br/',
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
  },
});
