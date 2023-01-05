class DashboardPage {
    dashboard() {
        return cy.contains('span', 'Dashboard')
    }
}

export default new DashboardPage()