//  Les classes sont rangées dans ./e2e/PageObject
import LoginPage from '../PageObject/LoginPage'
import DashboardPage from '../PageObject/DashboardPage'

describe("Exemple d'utilisation du Page Object Model", () => {

    beforeEach(() => {
        // Ici, on utilise les "fixtures" c'est à dire des données JSON externalisées
        // qui se trouvent dans ./fixtures/
        cy.fixture('exo16').then(function (user) {
            this.user = user

            // on définit ci-dessous la racine des URL qui seront utilisées dans les tests
            // ça optimise le démarrage des tests et ça simplifie les appels à cy.visit() et cy.request()
            Cypress.config('baseUrl', this.user.url)
        })
    })

    it("Login with valid credentials", function () {
        LoginPage.startSession(this.user.username, this.user.password, '/web/index.php/dashboard/index')
        cy.url().should('include', 'dashboard')
        DashboardPage.dashboard().should('be.visible')
    })

    it("Login with wrong password", function () {
        LoginPage.navigate()
            .enterUsername(this.user.username)
            .enterPassword('admin777')
            .submit()
        cy.url().should('include', '/auth/login')
        LoginPage.invalidCredentials().should('be.visible')
    })

})