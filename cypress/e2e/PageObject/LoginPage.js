class LoginPage {
    navigate() {
        cy.visit('/web/index.php/auth/login')
        // on retourne la classe LoginPage pour chainer les appels
        return this
    }

    enterUsername(username) {
        cy.get('input[name=username]').type(username)
        return this
    }

    enterPassword(password) {
        cy.get('input[name=password]').type(password)
        return this
    }

    submit() {
        cy.get('.orangehrm-login-button').click()
        return this
    }

    startSession(username, password, url) {
        cy.loginSession(username, password)
        cy.visit(url)
        return this
    }

    // La méthode suivante est utilisée pour les assertions
    // On retourne l'objet identifié par Cypress et on garde 
    // la responsabilité de l'assertion dans le tes pour avoir 
    // qlq chose de lisible comme ça : 
    // LoginPage.invalidCredentials().should('be.visible')
    invalidCredentials() {
        return cy.contains('p', 'Invalid credentials')
    }
}

export default new LoginPage()