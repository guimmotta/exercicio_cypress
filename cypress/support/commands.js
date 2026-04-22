// Comando customizado para adicionar um contato
Cypress.Commands.add('adicionarContato', (nome, email, telefone) => {
  cy.get('input[placeholder="Nome"]').type(nome)
  cy.get('input[placeholder="E-mail"]').type(email)
  cy.get('input[placeholder="Telefone"]').type(telefone)
  cy.get('button.adicionar').click()
})
