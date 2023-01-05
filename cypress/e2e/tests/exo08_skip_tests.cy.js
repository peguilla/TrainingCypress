describe("Ignorer un test", () => {

    it.skip("avec it.skip", () => {
        expect(true).to.equal(true);
    });

    xit("avec xit", () => {
        expect(true).to.equal(true);
    });

    it("quand un test n'est pas implémenté")
})