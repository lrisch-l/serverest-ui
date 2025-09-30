# 🧪 serverest-ui

Automated UI testing project using Cypress and Mochawesome.

![Cypress Tests](https://github.com/lrisch-l/serverest-ui/actions/workflows/test-report.yml/badge.svg)
![Made with Cypress](https://img.shields.io/badge/Cypress-automation-brightgreen?logo=cypress)
![Node.js](https://img.shields.io/badge/Node.js-v18.17.0-blue?logo=node.js)
![Status](https://img.shields.io/badge/tests-passing-brightgreen)
![Profile Views](https://komarev.com/ghpvc/?username=lrisch-l)

Automated UI testing project for the [ServeRest](https://github.com/PauloGoncalvesBH/ServeRest) frontend using [Cypress](https://www.cypress.io/) and [Mochawesome](https://github.com/adamgruber/mochawesome).  
Includes embedded screenshots, CI integration via GitHub Actions, and clean HTML reports for debugging.

## 🚀 Getting Started

```bash

npm install

```
## 📂 Structure

```

cypress/
├── e2e/frontend/      # UI test cases (serverest.cy.js)
├── screenshots/       # Screenshots captured on test failure
├── videos/            # Cypress video recordings (optional)
├── reports/           # Mochawesome HTML reports


```

## 🚀 Run tests with:

```bash

npm test

```

## 📊 Test Reports

🔹 [Main UI Report](https://github.com/lrisch-l/serverest-ui/tree/main/cypress/reports)  
🟢 Scenario 1 – Empty login fields  
🟡 Scenario 2 – Invalid login credentials  
🟠 Scenario 3 – Empty registration fields  
🔵 Scenario 4 – Successful admin registration  
🟣 Scenario 5 – List users and logout  
🟤 Scenario 6 – Register product  
⚪ Scenario 7 – Reports screen

## 📈 GitHub Stats

<p align="center"><img src="https://github-readme-stats.vercel.app/api?username=lrisch-l&show_icons=true&theme=github_dark" width="500"/></p>

## 🧰 Technologies Used

<p align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="40" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cypressio/cypressio-original.svg" width="40" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="40" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="40" />
</p>

## 🛠️ CI/CD Integration

<details><summary>🔧 Click to expand CI/CD details</summary>
This project uses GitHub Actions to run Cypress UI tests on every push and pull request to main.  
Failed tests automatically upload screenshots as artifacts for debugging.  
Reports are generated using Mochawesome and stored in /cypress/reports.  
📦 All artifacts are downloadable from the Actions tab (https://github.com/lrisch-l/serverest-ui/actions).
</details>

## 📜 UI Test Documentation

<details>
  <summary>📘 Click to view UI Scenarios</summary>

  <br>

  | Scenario     | Description                                      |
  |--------------|--------------------------------------------------|
  | Scenario 1   | Empty login fields – validates required messages |
  | Scenario 2   | Invalid login credentials – shows error feedback |
  | Scenario 3   | Empty registration – checks required validations |
  | Scenario 4   | Successful admin registration – dynamic email    |
  | Scenario 5   | List users and logout – full flow navigation     |
  | Scenario 6   | Register product – adds product with image       |
  | Scenario 7   | Reports screen – validates placeholder message   |

</details>







 


