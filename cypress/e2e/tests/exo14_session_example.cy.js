describe('Login', () => {
    const username = 'Admin'
    const password = 'admin123'

    // on définit ci-dessous la racine des URL qui seront utilisées dans les tests
    // ça optimise le démarrage des tests et ça simplifie les appels à cy.visit() et cy.request()
    Cypress.config('baseUrl', 'https://opensource-demo.orangehrmlive.com')

    // Le premier test Cypress est toujours plus long à démarrer
    // c'est pourquoi j'utilise le test ci-dessous pour pouvoir
    // comparer objectivement les temps d'exécution des autres tests.
    it("Création d'une session", () => {
        cy.loginSession(username, password)
    })

    it('Login sans restaurer la session', () => {
        cy.login(username, password)
        cy.visit('/web/index.php/dashboard/index')
        cy.url().should('include', 'dashboard')
        cy.contains('span', 'Dashboard').should('be.visible')
    })

    it('Login en restaurant la session', () => {
        cy.loginSession(username, password)
        cy.visit('/web/index.php/dashboard/index')
        cy.url().should('include', 'dashboard')
        cy.contains('span', 'Dashboard').should('be.visible')
    })

    it('2ème Login sans restaurer la session', () => {
        cy.login(username, password)
        cy.visit('/web/index.php/dashboard/index')
        cy.url().should('include', 'dashboard')
        cy.contains('span', 'Dashboard').should('be.visible')
    })

    it('2ème Login en restaurant la session', () => {
        cy.loginSession(username, password)
        cy.visit('/web/index.php/dashboard/index')
        cy.url().should('include', 'dashboard')
        cy.contains('span', 'Dashboard').should('be.visible')
    })

    it('3ème Login sans restaurer la session', () => {
        cy.login(username, password)
        cy.visit('/web/index.php/dashboard/index')
        cy.url().should('include', 'dashboard')
        cy.contains('span', 'Dashboard').should('be.visible')
    })

    it('3ème Login en restaurant la session', () => {
        cy.loginSession(username, password)
        cy.visit('/web/index.php/dashboard/index')
        cy.url().should('include', 'dashboard')
        cy.contains('span', 'Dashboard').should('be.visible')
    })
})