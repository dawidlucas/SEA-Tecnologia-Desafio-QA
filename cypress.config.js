const { defineConfig } = require("cypress")
const { allureCypress } = require("allure-cypress/reporter")

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://analista-teste.seatecnologia.com.br/",
    defaultCommandTimeout: 10000,

    setupNodeEvents(on, config) {
      allureCypress(on, config)
      return config
    }
  }
})