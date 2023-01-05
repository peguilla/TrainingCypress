describe("Charger des configurations différentes", () => {

    context(
        "Pour Chrome uniquement",
        {
            browser: 'chrome',
            viewportWidth: 800,
            viewportHeight: 600
        },
        () => {
            it("Initialise la taille de la fenêtre à 800x600", () => {
                expect(cy.config('viewportWidth')).to.equal(800);
                expect(cy.config('viewportHeight')).to.equal(600);
            });
        }
    );
    
    context(
        "Autre que pour Chrome",
        {
            browser: '!chrome',
            viewportWidth: 1024,
            viewportHeight: 480
        },
        () => {
            it("Initialise la taille de la fenêtre à 1024x480", () => {
                expect(cy.config('viewportWidth')).to.equal(1024);
                expect(cy.config('viewportHeight')).to.equal(480);
            });
        }
    );
});
