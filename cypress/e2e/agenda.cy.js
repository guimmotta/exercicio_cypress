describe('Agenda de Contatos', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  // ───────────────────────────────────────────
  // INCLUSÃO
  // ───────────────────────────────────────────
  describe('Inclusão de contato', () => {

    it('Deve adicionar um novo contato com sucesso', () => {
      cy.get('input[placeholder="Nome"]').type('João Teste')
      cy.get('input[placeholder="E-mail"]').type('joao@teste.com')
      cy.get('input[placeholder="Telefone"]').type('11999998888')

      cy.get('button.adicionar').click()

      cy.get('.contato').last().within(() => {
        cy.get('ul li').eq(0).should('contain', 'João Teste')
        cy.get('ul li').eq(1).should('contain', '11999998888')
        cy.get('ul li').eq(2).should('contain', 'joao@teste.com')
      })
    })

    it('Deve limpar os campos após adicionar o contato', () => {
      cy.adicionarContato('Maria Silva', 'maria@teste.com', '11988887777')

      cy.get('input[placeholder="Nome"]').should('have.value', '')
      cy.get('input[placeholder="E-mail"]').should('have.value', '')
      cy.get('input[placeholder="Telefone"]').should('have.value', '')
    })

    it('Deve incrementar o contador de contatos após adição', () => {
      cy.get('.contato').then(contatosAntes => {
        const totalAntes = contatosAntes.length

        cy.adicionarContato('Carlos Novo', 'carlos@teste.com', '11977776666')

        cy.get('.contato').should('have.length', totalAntes + 1)
      })
    })

  })

  // ───────────────────────────────────────────
  // ALTERAÇÃO
  // ───────────────────────────────────────────
  describe('Alteração de contato', () => {

    it('Deve abrir o formulário de edição ao clicar em Editar', () => {
      cy.get('.contato').first().find('button.edit').click()

      cy.get('input[placeholder="Nome"]').should('not.have.value', '')
    })

    it('Deve alterar os dados de um contato existente', () => {
      cy.get('.contato').first().find('button.edit').click()

      cy.get('input[placeholder="Nome"]').clear().type('Nome Editado')
      cy.get('input[placeholder="E-mail"]').clear().type('editado@teste.com')
      cy.get('input[placeholder="Telefone"]').clear().type('11911112222')

      // Usa seletor genérico de submit pois o botão pode mudar de classe no modo edição
      cy.get('form button[type="submit"]').click()

      cy.get('.contato').first().within(() => {
        cy.get('ul li').eq(0).should('contain', 'Nome Editado')
        cy.get('ul li').eq(2).should('contain', 'editado@teste.com')
      })
    })

  })

  // ───────────────────────────────────────────
  // REMOÇÃO
  // ───────────────────────────────────────────
  describe('Remoção de contato', () => {

    it('Deve remover um contato ao clicar em Deletar', () => {
      cy.get('.contato').first().find('ul li').eq(0).invoke('text').then(nomeContato => {
        cy.get('.contato').then(contatosAntes => {
          const totalAntes = contatosAntes.length

          cy.get('.contato').first().find('button.delete').click()

          cy.get('.contato').should('have.length', totalAntes - 1)

          cy.get('.contato').each(contato => {
            cy.wrap(contato).find('ul li').eq(0).should('not.contain', nomeContato)
          })
        })
      })
    })

it('Deve atualizar o contador no cabeçalho após remoção', () => {
  // Conta os contatos visíveis na tela como fonte de verdade
  cy.get('.contato').then(contatosAntes => {
    const totalAntes = contatosAntes.length

    cy.get('.contato').first().find('button.delete').click()

    // Verifica que a lista diminuiu em 1
    cy.get('.contato').should('have.length', totalAntes - 1)

    // Verifica que o header reflete o novo número
    cy.get('header h2').should('contain', totalAntes - 1)
  })
})

  })

})
