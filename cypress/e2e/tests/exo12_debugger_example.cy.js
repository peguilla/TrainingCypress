/* eslint-disable no-debugger */

describe("utilisation du Debugger", () => {

    let preferencesList

    beforeEach(() => {

        preferencesList = { couleur: 'rouge', pays: 'france', musique: 'pop' }

        cy.wrap(preferencesList).its('couleur').as('couleurPreferee')
    })

    it("On devrait pouvoir utiliser le debugger", () => {

        // Remarque: il faut que DevTools soit ouvert dans le navigateur qui exécute les tests (Chrome, Edge, Electron..)
        // L'exécution se mettra en pause automatiquement à chaque ligne "debugger"
        debugger

        preferencesList.couleur = 'noir'

        cy.get('@couleurPreferee').then(couleur => {
            expect(couleur).to.equal('noir')
        })
    })

    xit("On devrait pouvoir utiliser .debug()", () => {

        // Remarque: il faut que DevTools soit ouvert dans le navigateur qui exécute les tests (Chrome, Edge, Electron..)
        // L'exécution se mettra en pause automatiquement à chaque appel à ".debug()"
        cy.get('@couleurPreferee').debug()

        preferencesList.couleur = 'noir'

        cy.get('@couleurPreferee').then(couleur => {
            expect(couleur).to.equal('noir')
        })
    })

    xit("On devrait pouvoir utiliser cy.pause()", () => {

        // Remarque: il faut que DevTools soit ouvert dans le navigateur qui exécute les tests (Chrome, Edge, Electron..)
        // L'exécution se mettra en pause automatiquement à chaque appel à "cy.pause()"
        cy.pause()

        preferencesList.couleur = 'noir'

        cy.get('@couleurPreferee').then(couleur => {
            expect(couleur).to.equal('noir')
        })
    })
})
