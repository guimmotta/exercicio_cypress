# exercicio_cypress

End-to-end (E2E) testing project using **Cypress** for the [Agenda de Contatos](https://ebac-agenda-contatos-tan.vercel.app/) application.

## 📋 About

This project covers the full user flow of a contact management app, testing the three main features: adding, editing, and deleting contacts.

## 🧪 What is tested

- **Create** — adds a new contact and verifies it appears in the list
- **Create** — checks that form fields are cleared after submission
- **Create** — verifies the contact counter increments
- **Update** — opens the edit form and saves updated data
- **Delete** — removes a contact and verifies it no longer exists
- **Delete** — checks the header counter decrements after removal

## 🛠️ Technologies

- Cypress 13
- Node.js
- JavaScript

## ▶️ Running the tests

```bash
npm install

# Headless (terminal)
npm run cypress:run

# Interactive UI
npm run cypress:open
```

## 📁 Key files

- `cypress/e2e/agenda.cy.js` — all E2E test specs
- `cypress/support/commands.js` — custom command `adicionarContato()`
- `cypress.config.js` — base URL configuration
