import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

Given('User is at the login page', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
})

When('User enters username as {string} and password as {string}', (username, password) => {
    cy.get('input[name=username]').type(username)
    cy.get('input[name=password]').type(password)
})

Given('User clicks on login button', () => {
    cy.get('.orangehrm-login-button').click()
})

Then('User is able to successfully login to the Website', () => {
    cy.contains('span', 'Dashboard').should('be.visible')
})

Then('User is unable to successfully login to the Website', () => {
    cy.url().should('include', '/auth/login')
    cy.contains('p', 'Invalid credentials').should('be.visible')
})