/// <reference types="cypress" />
describe("Cypress Playground", () => {
  beforeEach(() => {
    const now = new Date(Date.UTC(2025, 1, 18));
    cy.clock(now);
    cy.visit("/index.html");
  });

  it("verifica que a aplicação web está acessível", () => {
    cy.title().should("be.equal", "Cypress Playground - Talking About Testing");
    cy.contains("h1", "🌲 Cypress Playground 🛝").should("be.visible");
  });

  it("verifica que o banner promocional está visível na página", () => {
    cy.get("#promotional-banner")
      .should("be.visible")
      .should(
        "contain",
        "📣 Get to know the Cypress, from Zero to the Cloud course!"
      );
  });

  it('ao clicar no botão "Subscribe" uma mensagem de sucesso será apresentada', () => {
    cy.contains("button", "Subscribe").should("be.visible").click();

    cy.contains(
      "#success",
      "You've been successfully subscribed to our newsletter."
    ).should("be.visible");
  });

  it('digita um nome no campo "Sign here" e verifica que ele aparece no "preview" da assinatura', () => {
    cy.get("#signature-textarea").should("be.visible").type("Xablau");

    cy.contains("#signature", "Xablau").should("be.visible");
  });

  it('digita um nome no campo "Sign here", marca o checkbox para visualizar o preview da assinatura e depois desmarca', () => {
    cy.get("#signature-textarea-with-checkbox")
      .should("be.visible")
      .type("Xablau");

    cy.get("#signature-checkbox").check();

    cy.contains("#signature-triggered-by-check", "Xablau").should("be.visible");

    cy.get("#signature-checkbox").uncheck();

    cy.contains("#signature-triggered-by-check", "Xablau").should("not.exist");
  });

  it('verifica se o texto sai conforme a marcação dos radio buttons "On" e "Off"', () => {
    cy.contains("#on-off", "ON").should("be.visible");
    cy.contains("#on-off", "OFF").should("not.exist");

    cy.get('input[type="radio"][value="off"]').check();

    cy.contains("#on-off", "OFF").should("be.visible");
    cy.contains("#on-off", "ON").should("not.exist");

    cy.get('input[type="radio"][value="on"]').check();

    cy.contains("#on-off", "ON").should("be.visible");
    cy.contains("#on-off", "OFF").should("not.exist");
  });

  it("seleciona um dos tipos disponíveis e exibe texto informando qual foi o tipo selecionado", () => {
    cy.contains("p", "You haven't selected a type yet.").should("be.visible");

    cy.get("#selection-type").as("availableTypes");
    cy.get("#select-selection").as("paragraphWithSelectionType");

    cy.get("@availableTypes").select(1);

    cy.get("@paragraphWithSelectionType").should("contain", "BASIC");

    cy.get("@availableTypes").select("standard");

    cy.get("@paragraphWithSelectionType").should(
      "have.text",
      "You've selected: STANDARD"
    );

    cy.get("@availableTypes").select("VIP");

    cy.contains("p", "You've selected: VIP").should("be.visible");
  });

  it("verifica que realizou uma múltipla seleção", () => {
    cy.contains("p", "You haven't selected any fruit yet.").should(
      "be.visible"
    );

    cy.get('select[name="fruit"][multiple]').select([
      "apple",
      "cherry",
      "elderberry",
    ]);

    cy.contains("p", "You've selected the following fruits:").should(
      "be.visible"
    );
  });

  it("realiza o upload de um arquivo e verifica se seu nome aparece corretamente no parágrafo", () => {
    cy.get("#file").should("be.empty");

    cy.get('input[type="file"]').selectFile("./cypress/fixtures/example.json");

    cy.contains("p", "example.json").should("be.visible");
  });

  it('intercepta a requisição acionada pelo botão "Get TODO" e certifica que uma lista será exibida', () => {
    cy.intercept("GET", "https://jsonplaceholder.typicode.com/todos/1").as(
      "getTodo"
    );

    cy.contains("button", "Get TODO").click();

    cy.wait("@getTodo").its("response.statusCode").should("be.equal", 200);

    cy.contains("li", "TODO ID: 1").should("be.visible");
    cy.contains("li", "Title: delectus aut autem").should("be.visible");
    cy.contains("li", "Completed: false").should("be.visible");
    cy.contains("li", "User ID: 1").should("be.visible");
  });

  it('intercepta a requisição acionada pelo botão "Get TODO", usando uma fixture como resposta da requisição e certifica que uma lista será exibida', () => {
    const todo = require("../fixtures/todo");

    cy.intercept("GET", "https://jsonplaceholder.typicode.com/todos/1", {
      fixture: "todo",
    }).as("getTodo");

    cy.contains("button", "Get TODO").click();

    cy.wait("@getTodo").its("response.statusCode").should("be.equal", 200);
    cy.contains("li", `TODO ID: ${todo.id}`).should("be.visible");
    cy.contains("li", `Title: ${todo.title}`).should("be.visible");
    cy.contains("li", `Completed: ${todo.completed}`).should("be.visible");
    cy.contains("li", `User ID: ${todo.userId}`).should("be.visible");
  });

  it('intercepta a requisição acionada pelo botão "Get TODO" e simula uma falha na API', () => {
    cy.intercept("GET", "https://jsonplaceholder.typicode.com/todos/1", {
      statusCode: 500,
    }).as("serverFailure");

    cy.contains("button", "Get TODO").click();

    cy.wait("@serverFailure")
      .its("response.statusCode")
      .should("be.equal", 500);

    cy.contains(
      ".error",
      "Oops, something went wrong. Refresh the page and try again."
    ).should("be.visible");
  });

  it('intercepta a requisição acionada pelo botão "Get TODO" e simula uma falha na rede', () => {
    cy.intercept("GET", "https://jsonplaceholder.typicode.com/todos/1", {
      forceNetworkError: true,
    }).as("networkError");

    cy.contains("button", "Get TODO").click();

    cy.wait("@networkError");

    cy.contains(
      ".error",
      "Oops, something went wrong. Check your internet connection, refresh the page, and try again."
    ).should("be.visible");
  });

  it("realiza uma requisição HTTP e verifica se o status code é 200", () => {
    cy.request("GET", "https://jsonplaceholder.typicode.com/todos/1")
      .its("status")
      .should("be.equal", 200);
  });

  Cypress._.times(10, () => {
    it("seleciona valor aleatório para um input range", () => {
      const randomNumber = Math.floor(Math.random() * 10) + 1;
      cy.get('input[type="range"][id="level"]')
        .invoke("val", `${randomNumber}`)
        .trigger("change");

      cy.contains("p", `You're on level: ${randomNumber}`).should("be.visible");
    });
  });

  Cypress._.times(10, (index) => {
    it(`seleciona o valor ${index + 1} de 10 do input range`, () => {
      cy.get('input[type="range"][id="level"]')
        .invoke("val", `${index + 1}`)
        .trigger("change");

      cy.contains("p", `You're on level: ${index + 1}`).should("be.visible");
    });
  });

  it("fornece uma data e certifica que a data correta esteja visível", () => {
    const exampleDate = "2025-03-10";

    cy.get('input[type="date"]')
      .should("be.visible")
      .type(`${exampleDate}`)
      .blur();

    cy.contains("p", `The date you've selected is: ${exampleDate}`).should(
      "be.visible"
    );
  });

  // Esse caso de teste por enquanto ficará comentado até eu descobrir como fazer para funcionar o uso da variável no Github Actions
  // it('fornece uma senha a partir de uma variável protegida', () => {
  //   cy.get('#password-input input[type="password"]').as('inputPassword')

  //   cy.get('@inputPassword')
  //   .should('be.visible')
  //   .type(CYPRESS_USER_PASSWORD, { log: false })

  //   cy.get('#show-password-checkbox')
  //   .check()

  //   cy.get('#password-input input[type="text"]').as('inputText')

  //   cy.get('@inputPassword')
  //     .should('not.exist')
  //   cy.get('@inputText')
  //     .should('be.visible')
  //     .should('have.value', CYPRESS_USER_PASSWORD)

  //   cy.get('#show-password-checkbox')
  //     .uncheck()

  //   cy.get('@inputPassword')
  //     .should('be.visible')
  //   cy.get('@inputText')
  //     .should('not.exist')
  // })

  it("verifica a quantidade de itens de uma lista", () => {
    const animalsList = ["Camel", "Cat", "Caterpilla", "Cow", "Dog"];

    cy.get("#animals li").should("have.length", 5);

    Cypress._.times(5, (index) => {
      cy.contains(
        `#animals li:nth-child(${index + 1})`,
        `${animalsList[index]}`
      ).should("be.visible");
    });
  });

  it("congela o relógio do navegador e verifica a data exibida", () => {
    cy.get("#date-section-paragraph > strong").should(
      "have.text",
      "2025-02-18"
    );
  });

  it("verifica a mensagem de sucesso após submeter o código copiado", () => {
    cy.get("#timestamp").then((element) => {
      cy.log(element[0].innerText);
      const code = element[0].innerHTML;

      cy.get("#code").type(code);
      cy.contains("button", "Submit").click();

      cy.contains(
        ".success",
        "Congrats! You've entered the correct code."
      ).should("be.visible");
      cy.contains(
        ".error",
        "The provided code isn't correct. Please, try again."
      ).should("not.be.visible");
    });
  });

  it("verifica a mensagem de erro após submeter o código incorreto", () => {
    cy.get("#code").type(666666);

    cy.contains("button", "Submit").click();

    cy.contains(
      ".error",
      "The provided code isn't correct. Please, try again."
    ).should("be.visible");
  });

  it("faz o download de um arquivo texto, faz a leitura e verifica seu contéudo", () => {
    cy.contains("a", "Download a text file").click();

    cy.readFile("cypress/downloads/example.txt").should(
      "be.equal",
      "Hello, World!"
    );
  });
});
