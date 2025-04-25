/// <reference types="cypress" />

describe("Criar dispositivos", () => {
  it("Cria um novo dispositivo com sucesso", () => {
    cy.request({
      method: "POST",
      url: "https://api.restful-api.dev/objects",
      body: {
        name: "Super PC Gamer",
        data: {
          year: 2025,
          price: 6666.66,
          "CPU model": "AMD Ryzen 5 5600GT with Radeon Graphics",
          "Hard disk size": "500 GB",
          cor: "branco",
        },
      },
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.name).to.equal("Super PC Gamer");
      expect(response.body.data.year).to.equal(2025);
    });
  });
});
