describe('Naviguer sur un site', () => {
    it('le site est ouvert', () => {

        // Aller sur une URL
        cy.visit('https://example.cypress.io')

        // Rechercher un élément dont le texte est... puis cliquer dessus
        cy.contains('type').click()

        // Récupérer l'URL courante et vérifier qu'elle contient...
        cy.url().should('contain','commands/actions')

        // Rechercher un élément par sa classe puis taper du texte dedans
        cy.get('.action-email').type('fake@email.com')

        //  Rechercher un élément par son id et vérifier sa valeur
        cy.get('[id="email1"]').should('have.value', 'fake@email.com')
    })
})