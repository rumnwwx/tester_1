describe('Personal account', () => {
    it('View and read user notifications', () => {
        cy.visit('https://dev.profteam.su/login');
        cy.get('input[type="text"]').type('testerInstitution');
        cy.get('input[type="password"]').type('Password1');
        cy.get('#app > div.page > div > section > form > div.form__buttons > div:nth-child(3) > button').click()
        cy.wait(2000)
        cy.get('#app > div.page > header:nth-child(1) > nav > a:nth-child(4)').click()
        cy.get('#app > div.page > div > aside > div.infinite-loader.notifications-list__items > div:nth-child(1) > article > button').click()
    });
});
