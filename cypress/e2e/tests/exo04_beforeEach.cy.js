beforeEach(() => {
    cy.log("Je suis exécuté avant chaque test de chaque bloc")
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
    
    beforeEach(() => {
        cy.log("Je suis exécuté avant chaque test du bloc #2")
    });

    it("Vrai est vrai", () => {
        expect(true).to.equal(true)
    });

    it("Faux est faux", () => {
        expect(false).to.equal(false)
    });

});
