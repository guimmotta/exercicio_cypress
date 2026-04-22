# Testes E2E - Agenda de Contatos

Projeto de testes E2E com Cypress para a aplicação [Agenda de Contatos](https://ebac-agenda-contatos-tan.vercel.app/).

## Instalação

```bash
npm install
```

## Executar os testes

Interface gráfica:
```bash
npm run cypress:open
```

Terminal (headless):
```bash
npm run cypress:run
```

## Testes cobertos

- **Inclusão**: adicionar contato, limpar campos, incrementar contador
- **Alteração**: abrir edição, salvar dados editados
- **Remoção**: deletar contato, atualizar contador no header
