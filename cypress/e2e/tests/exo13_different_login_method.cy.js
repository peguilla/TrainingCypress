describe('Login', () => {
    const username = 'Admin'
    const password = 'admin123'

    // on définit ci-dessous la racine des URL qui seront utilisées dans les tests
    // ça optimise le démarrage des tests et ça simplifie les appels à cy.visit() et cy.request()
    Cypress.config('baseUrl', 'https://opensource-demo.orangehrmlive.com')

    // Le premier test Cypress est toujours plus long à démarrer
    // c'est pourquoi j'utilise le test ci-dessous pour pouvoir
    // comparer objectivement les temps d'exécution des autres tests.
    it('Admin devrait être sur la page de login', () => {
        cy.visit('/')
        cy.url().should('include', '/auth/login')
    })

    it('Login sans agir sur la GUI', () => {
        cy.login(username, password)
        cy.visit('/web/index.php/dashboard/index')
        cy.url().should('include', 'dashboard')
        cy.contains('span', 'Dashboard').should('be.visible')
    })

    it('Login en agissant sur la GUI', () => {
        cy.visit('/web/index.php/auth/login')
        cy.get('input[name=username]').type(username)
        cy.get('input[name=password]').type(password)
        cy.get('.orangehrm-login-button').click()
        cy.url().should('include', 'dashboard')
        cy.contains('span', 'Dashboard').should('be.visible')
    })
})
