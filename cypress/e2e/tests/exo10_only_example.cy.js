describe("Suite #1 avec tests exclusifs", () => {
    context("Avec un test exclusif dans mon contexte", () => {
        it.only("Je suis exécuté avec it.only", () => {
            expect(true).to.equal(true);
        });

        it("Je ne suis pas exécuté sans it.only", () => {
            expect(false).to.equal(true);
        });
    });

    context("Avec un test exclusif dans un autre contexte", () => {
        it("Je ne suis pas exécuté sans it.only", () => {
            expect(false).to.equal(true);
        });

        it.skip("Je ne suis pas exécuté avec it.skip", () => {
            expect(false).to.equal(true);
        });

        it.only("Je suis exécuté avec it.only", () => {
            expect(true).to.equal(true);
        });
    })
});

describe("Suite #2 avec tests exclusifs", () => {

    context("Avec un test exclusif dans une autre suite", () => {
        it("Je ne suis pas exécuté sans it.only", () => {
            expect(false).to.equal(true);
        });

        it.skip("Je ne suis pas exécuté avec it.skip", () => {
            expect(false).to.equal(true);
        });

        it.only("Je suis exécuté avec it.only", () => {
            expect(true).to.equal(true);
        });
    })
});