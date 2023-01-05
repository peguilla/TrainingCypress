// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (login, pwd) => {
    cy.visit('/web/index.php/auth/login').get('input[name="_token"]').invoke('attr', 'value').then(csrfToken => {
        cy.request({
            method: 'POST',
            url: '/web/index.php/auth/validate',
            form: true,
            failOnStatusCode: false, // continuer même si le code retour est différent de 2xx ou 3xx pour aller jusqu'aux assertions
            followRedirect: false, // ne pas suivre la redirection. On veut juste se logguer. Ca laisse le choix d'aller sur n'importe quelle page ensuite.
            headers: {
                Origin: 'https://opensource-demo.orangehrmlive.com',
                Referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
            },
            body: {
                _token: csrfToken,
                username: login,
                password: pwd,
            },
        }).then((resp) => {
            expect(resp.status).to.eq(302)
            expect(resp.redirectedToUrl).to.eq('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        })
    })
})

Cypress.Commands.add('loginSession', (login, pwd) => {
    cy.session((login, pwd), () => {
        cy.visit('/web/index.php/auth/login').get('input[name="_token"]').invoke('attr', 'value').then(csrfToken => {
            cy.request({
                method: 'POST',
                url: '/web/index.php/auth/validate',
                form: true,
                failOnStatusCode: false, // continuer même si le code retour est différent de 2xx ou 3xx pour aller jusqu'aux assertions
                followRedirect: false, // ne pas suivre la redirection. On veut juste se logguer. Ca laisse le choix d'aller sur n'importe quelle page ensuite.
                headers: {
                    Origin: 'https://opensource-demo.orangehrmlive.com',
                    Referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
                },
                body: {
                    _token: csrfToken,
                    username: login,
                    password: pwd,
                },
            }).then((resp) => {
                expect(resp.status).to.eq(302)
                expect(resp.redirectedToUrl).to.eq('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
            })
        })
    })
})

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })