describe('Login', () => {
    it('Successful verification', () => {
        cy.visit('https://dev.profteam.su/login');
        cy.get('input[type="text"]').type('testerStudent');
        cy.get('input[type="password"]').type('Password1');
        cy.get('#app > div.page > div > section > form > div.form__buttons > div:nth-child(3) > button').click()
    });
    it('Incorrect data', () => {
        cy.visit('https://dev.profteam.su/login');
        cy.get('input[type="text"]').type('tes');
        cy.get('input[type="password"]').type('Password1');
        cy.get('#app > div.page > div > section > form > div.form__buttons > div:nth-child(3) > button').click()

        cy.contains('Неверный логин или пароль, попробуйте заново.').should('be.visible')
    });
    it('No data entered', () => {
        cy.visit('https://dev.profteam.su/login');
        cy.get('input[type="text"]').type(' ');
        cy.get('input[type="password"]').type(' ');

        cy.contains('Обязательное поле, без пробелов').should('be.visible')
        cy.contains('Обязательное поле, без пробелов').should('be.visible')
    });
});
