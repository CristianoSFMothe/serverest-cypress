# Serverest Cypress

 Teste e2e com Cypress no Serverest aplicação web e na API

 ![página inicial do site Serverest](image.png)

Este repositório contém testes automatizados desenvolvidos utilizando o Cypress para estudar a aplicação web do <a href="https://front.serverest.dev/login" target="blank">Serverest</a>

## Pré-requisistos

* Node.js instalado: <a href="https://nodejs.org/en" target="blank">Instalar NodeJs</a> instalado
* IDE utilizada neste projeto: <a href="https://code.visualstudio.com/" target="blank">Visual Stuido Code (VSCode)</a> 

### Inicialização

Para iniciar um novo projeto com Node.js:

```bash	
npm init

# ou

npm init -y
```

> Ao utilizar npm init -y, as perguntas serão respondidas com os valores padrão.
> Este é o primeiro passo para iniciar qualquer projeto JavaScript.

Para instalar o Cypress, utilize o seguinte comando npm:

```bash
npm install cypress
```

> Este comando instalará o Cypress como uma dependência do projeto.

Para inicializar o Cypress, utilize o seguinte comando:

```bash	
npx cypress open
```
> Este comando abrirá o Cypress Test Runner, onde você poderá executar e gerenciar seus testes.

Para executar o Cypress em modo headless, utilize o seguinte comando:

```bash
npx cypress run
```
> Este comando executará o Cypress em modo headless, o que significa que não abrirá a interface gráfica do Test Runner, e os resultados dos testes serão exibidos no terminal

Running:  register.cy.js                                                                  (1 of 1)


  Create an accountt
    √ Given that registers an account as administered (8465ms)


  1 passing (9s)


  (Results)

```bash
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        1                                                                                │
  │ Passing:      1                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        false                                                                            │
  │ Duration:     8 seconds                                                                        │
  │ Spec Ran:     register.cy.js                                                                   │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
```

====================================================================================================

  (Run Finished)

```bash	

       Spec                                              Tests  Passing  Failing  Pending  Skipped
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔  register.cy.js                           00:08        1        1        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✔  All specs passed!                        00:08        1        1        -        -        -
````
