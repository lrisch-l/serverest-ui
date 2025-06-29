const { defineConfig } = require("cypress");
const fs = require("fs");
const path = require("path");

module.exports = defineConfig({
  video: true,
  videosFolder: "cypress/videos",
  e2e: {
    baseUrl: "https://front.serverest.dev",
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: "cypress/support/e2e.js",
    setupNodeEvents(on, config) {
      on("task", {
        nextEmailCount() {
          const file = path.resolve("cypress/emailCounter.json");
          const data = fs.existsSync(file)
            ? JSON.parse(fs.readFileSync(file))
            : { count: 0 };

          data.count++;
          fs.writeFileSync(file, JSON.stringify(data, null, 2));
          return data.count;
        },
      });

      return config;
    },
  },
});
