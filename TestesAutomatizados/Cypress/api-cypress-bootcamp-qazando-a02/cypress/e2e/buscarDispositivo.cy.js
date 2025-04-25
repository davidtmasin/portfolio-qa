/// <reference types="cypress" />

describe("Buscar dispositivos", () => {
  it("Buscar dispositivo específico", () => {
    cy.request({
      method: "GET",
      url: "https://api.restful-api.dev/objects/7",
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.id).to.equal("7");
      expect(response.body.name).to.equal("Apple MacBook Pro 16");
      expect(response.body.data.year).to.equal(2019);
    });
  });

  it("Buscar dispositivo inexistente", () => {
    cy.request({
      method: "GET",
      url: "https://api.restful-api.dev/objects/qwerty123",
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(404);
      expect(response.body.error).to.equal(
        "Oject with id=qwerty123 was not found."
      );
    });
  });

  it("Buscar por uma lista de dispositivos", () => {
    cy.request({
      method: "GET",
      url: `https://api.restful-api.dev/objects?id=3&id=5&id=10`,
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body[0].id).to.equal("3");
      expect(response.body[0].name).to.equal("Apple iPhone 12 Pro Max");
      expect(response.body[1].id).to.equal("5");
      expect(response.body[1].name).to.equal("Samsung Galaxy Z Fold2");
      expect(response.body[2].id).to.equal("10");
      expect(response.body[2].name).to.equal("Apple iPad Mini 5th Gen");
    });
  });

  it("Buscar todos os dispositivos disponíveis", () => {
    cy.request({
      method: "GET",
      url: "https://api.restful-api.dev/objects",
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).length(13)
    });
  });
});
