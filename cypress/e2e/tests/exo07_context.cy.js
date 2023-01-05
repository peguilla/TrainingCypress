describe("Tests sur les tableaux", () => {

    context("Quand un élément n'est pas présent dans le tableau", () => {

        it("Ca retourne -1", () => {
            assert.equal(-1, [1,2,3].indexOf(4));
        });

        it("Ca ne génère pas d'erreur", () => {
                expect((() => {
                    [1,2,3].indexOf(4);
                })).not.to.throw();
        });
    });
});