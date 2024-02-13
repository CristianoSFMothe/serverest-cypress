<div align="center">
<img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/CristianoSFMothe/serverest-cypress">
<img alt="GitHub followers" src="https://img.shields.io/github/followers/CristianoSFMothe">
<img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/CristianoSFMothe/serverest-cypress">
<img alt="GitHub language count" src="https://img.shields.io/github/languages/count/CristianoSFMothe/serverest-cypress">

</div>



# ServeRest - Testes de Funcionalidade - Cypress

Este repositório contém testes de funcionalidades realizados no projeto ServeRest Dev Web. O objetivo desses testes é garantir o correto funcionamento das principais características do sistema. Abaixo estão listadas as funcionalidades testadas, assim como aquelas que estão planejadas para teste futuro:

 ![página inicial do site ServeRest ](https://github.com/CristianoSFMothe/serverest-cypress/assets/68359459/07717313-618b-4f54-9c1f-7cc057f37456)


Este repositório contém testes automatizados desenvolvidos utilizando o Cypress para estudar a aplicação web do <a href="https://front.serverest.dev/login" target="blank">ServeRest </a>

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

============================================================================================

  (Run Finished)

```bash	

       Spec                                              Tests  Passing  Failing  Pending  Skipped
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔  register.cy.js                           00:08        1        1        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✔  All specs passed!                        00:08        1        1        -        -        -
```

Para instalar o Cypress Plugin API

```bash	
 npm i cypress-plugin-api -D
 ```

# Funcionalidades Testadas

## Login

* [x] Verificar se o sistema permite que os usuários façam login com sucesso utilizando credenciais válidas.

## Cadastro de Usuário
* [x] Testar o processo de criação de novas contas de usuário no sistema, tanto com privilégios de 
administrador quanto de usuários comuns.

## Logout
* [ ] Realizar o fluxo de logout do sistema.


Para o usuário administrador, foram testadas as seguintes funcionalidades:

* [x] Cadastrar um novo usuário
* [ ] Listar Usuários
* [ ] Editar Usuário
* [ ] Excluir Usuário
* [ ] Cadastrar Produtos
* [ ] Listar Produtos
* [ ] Editar Produto
* [ ] Excluir Produto

> Todos os testes acima foram conduzidos através da Interface Gráfica do Usuário (GUI).

# Funcionalidades para Testes Futuros

* User Session com o Cypress

# Melhorias Futuras
* Criação de todos os testes utilizando a API por meio da GUI.

## Sobre o Cypress
Os testes foram realizados utilizando o Cypress, uma ferramenta de teste de frontend rápida, fácil de usar e confiável, construída para o ecossistema moderno da web. O Cypress permite escrever, executar e depurar testes de maneira eficiente, oferecendo uma experiência de teste de ponta a ponta.

# Contribuindo

Para contribuir com este projeto, siga os passos abaixo:

1. Faça um fork deste repositório clicando no botão "Fork" no canto superior direito da página.
2. Clone o fork para o seu ambiente de desenvolvimento local:

```bash
git clone https://github.com/CristianoSFMothe/serverest-cypress
```

3. Crie uma branch para suas alterações:

```bash
git checkout -b minha-contribuicao
```

4. Faça suas alterações e adicione-as utilizando o git:

```bash
git add .
git commit -m "Descrição das alterações"
```

5. Envie suas alterações para o seu repositório remoto:

```bash
git push origin minha-contribuicao
```

Crie um pull request clicando no botão `"Pull Request"` na página do seu fork.

Sinta-se à vontade para contribuir, reportar problemas ou sugerir melhorias. Se você tiver alguma dúvida sobre como executar os testes ou quaisquer outras questões relacionadas ao projeto, não hesite em entrar em contato.
