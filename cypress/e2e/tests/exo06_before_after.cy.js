before(() => {
    cy.log("Je suis exécuté une seule fois avant tous les tests")
});

after(() => {
    cy.log("Je suis exécuté une seule fois après tous les tests")
});

describe("Bloc de tests #1", () => {

    it("Vrai est vrai", () => {
        expect(true).to.equal(true)
    });

    it("Faux est faux", () => {
        expect(false).to.equal(false)
    });

});

describe("Bloc de tests #2", () => {
    
    before(() => {
        cy.log("Je suis exécuté une seule fois avant les tests du bloc #2")
    });

    after(() => {
        cy.log("Je suis exécuté une seule fois après les tests du bloc #2")
    });

    it("Vrai est vrai", () => {
        expect(true).to.equal(true)
    });

    it("Faux est faux", () => {
        expect(false).to.equal(false)
    });

});
