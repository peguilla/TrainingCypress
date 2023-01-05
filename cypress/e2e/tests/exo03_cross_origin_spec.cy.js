describe("tests de cross-origin", () => {

    it("KO sans cy.origin", () => {
        // Traitement de l'exception qui devrait être générée par le changement de domaine
        // C'est ce qu'on attend.
        Cypress.on('fail', (error, runnable) => {
            expect(error.message).to.include('The command was expected to run against origin')
        })

        cy.visit("https://example.cypress.io");
        cy.visit("https://www.npmjs.com/package/cypress");

        // l'appel ci-dessous devrait générer une exception qui sera traitée par Cypress.on('fail',...)
        // car Cypress n'est pas au courant que le domaine a changé: https://www.npmjs.com
        cy.get("#homePage-link").then(() => {
            // le test est KO si pas d'exception générée
            expect(false).to.equal(true)
        })
    });

    it("OK avec cy.origin", () => {
        cy.visit("https://example.cypress.io");
        cy.visit("https://www.npmjs.com/package/cypress");

        // Grâce à l'appel à cy.origin, on peut passer d'un domaine à un autre sans erreur
        cy.origin("https://www.npmjs.com", () => {
            cy.get("#homePage-link").should("have.text", "github.com/cypress-io/cypress");
        });
    });

})
