describe("Utilisation des alias", () => {

    // beforeEach est obligatoire car les alias sont supprimés entre chaque test
    // il faut donc les recréer.
    beforeEach(() => {
        const favorites = { color: 'blue', hobby: 'coding' }

        cy.wrap(favorites).its('color').then(value => {
            const couleur = value
        })

        cy.wrap(favorites).its('hobby').as('hobby')
    })

    it('on ne devrait pas pouvoir accéder à couleur sans alias', function () {
        cy.on('fail', (err) => {
            expect(err.message).to.include('couleur is not defined')
        })

        expect(couleur).not.to.equal('blue')
    })

    // Remarque : avec this.* on ne peut pas utiliser la syntaxe "() => {}"
    // il faut utiliser la syntaxe standard "function () {}" pour les hooks
    it("on devrait pouvoir accéder à hobby avec this.hobby", function () {
        expect(this.hobby).to.equal('coding')
    })

    it("on devrait pouvoir accéder à hobby avec @hobby", () => {
        cy.get('@hobby').then(hobby => {
            expect(hobby).to.equal('coding')
        })
    })
})


describe("Différence entre this.* et @", () => {

    // l'alias @favoriteColor ci-dessous sera créé une seule fois au démarrage de la suite de tests
    // puis sera supprimé à la fin du premier test (et ne sera pas recréé).
    before(() => {
        const favorites = { color: 'blue' }

        cy.wrap(favorites).its('color').as('favoriteColor')

        cy.then(function () {
            favorites.color = 'red'
        })
    })

    it('Les états de this.favoriteColor et @favoriteColor devraient être différents', () => {

        cy.get('@favoriteColor').then(function (aliasValue) {
            expect(this.favoriteColor).not.to.equal(aliasValue)
        })
    })

    // Après l'exécution du 1er test, les alias sont supprimés
    it("L'alias @favoriteColor ne devrait plus exister", () => {
        cy.on('fail', (err) => {
            expect(err.message).to.include('could not find a registered alias')
        })

        cy.get('@favoriteColor').then(color => {
            expect(color).not.to.equal('red') // on fait exprès de mettre une égalité fausse pour faire échouer le test si aucune exception n'est générrée par Cypress
        })
    })

    // Remarque: this.favoriteColor existe toujours mais avec la vieille valeur 'blue'
    it("L'alias this.favoriteColor devrait toujours fonctionner", function () {
        expect(this.favoriteColor).to.equal('blue')
    })
})
