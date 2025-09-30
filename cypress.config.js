const { defineConfig } = require("cypress");
const fs = require("fs");
const path = require("path");

module.exports = defineConfig({
  video: true, // Enable video recording during test runs
  videosFolder: "cypress/videos", // Directory to store recorded videos

  reporter: "cypress-mochawesome-reporter", // Enhanced reporter with embedded screenshots
  reporterOptions: {
    reportDir: "cypress/reports", // Directory to save reports
    reportPageTitle: "Serverest UI Test Report", // Custom title for the report
    embeddedScreenshots: true, // Embed screenshots directly into the report
    inlineAssets: true, // Include styles and scripts inline for standalone HTML
    charts: true // Show charts for test stats
  },

  e2e: {
    baseUrl: "https://front.serverest.dev", // Base URL for all tests
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}", // Pattern to locate test files
    supportFile: "cypress/support/e2e.js", // Path to support file

    setupNodeEvents(on, config) {
      // Register reporter plugin to capture screenshots and logs
      require("cypress-mochawesome-reporter/plugin")(on);

      // Custom task to increment email counter stored in a JSON file
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

      // Return the updated configuration
      return config;
    },
  },
});