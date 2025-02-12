describe('Registration Error Handling', () => {
    it('Successful verification', () => {
        cy.visit('https://dev.profteam.su/registration')

        cy.wait(1000)

        cy.get('#app > div.page > div > section > form > div:nth-child(1) > div.form__labels > div:nth-child(1) > div:nth-child(1) > div > input').click().type('rumaxxxxxx')
        cy.get('#app > div.page > div > section > form > div:nth-child(1) > div.form__labels > div:nth-child(1) > div:nth-child(2) > div > input').click().type('rumnwwxxxxxxx@gmail.com')
        cy.get('#app > div.page > div > section > form > div:nth-child(1) > div.form__labels > div:nth-child(1) > div:nth-child(3) > div > input').click().type('QWEasd123')
        cy.get('#app > div.page > div > section > form > div:nth-child(1) > div.form__labels > div:nth-child(1) > div:nth-child(4) > div > input').click().type('QWEasd123')

        cy.wait(2000)

        cy.get('#app > div.page > div > section > form > div.form__buttons > div:nth-child(4)').click()
        cy.get('#app > div.page > div > section > form > div:nth-child(1) > div.form__labels > div:nth-child(2) > div:nth-child(1) > div > input').click().type('Иванов')
        cy.get('#app > div.page > div > section > form > div:nth-child(1) > div.form__labels > div:nth-child(2) > div:nth-child(2) > div > input').click().type('Иван')
        cy.get('#app > div.page > div > section > form > div:nth-child(1) > div.form__labels > div:nth-child(2) > div:nth-child(3) > div > input').click().type('Иванович')

        cy.wait(2000)

        cy.get('#app > div.page > div > section > form > div.form__buttons > div:nth-child(3)').click()
    });

    it('Incorrect data', () => {
        cy.visit('https://dev.profteam.su/registration')

        cy.wait(1000)

        cy.get('#app > div.page > div > section > form > div:nth-child(1) > div.form__labels > div:nth-child(1) > div:nth-child(1) > div > input').click().type('username 2sda4')
        cy.get('#app > div.page > div > section > form > div:nth-child(1) > div.form__labels > div:nth-child(1) > div:nth-child(2) > div > input').click().type('dfgdgsgdsg')
        cy.get('#app > div.page > div > section > form > div:nth-child(1) > div.form__labels > div:nth-child(1) > div:nth-child(3) > div > input').click().type('QWEasd123')
        cy.get('#app > div.page > div > section > form > div:nth-child(1) > div.form__labels > div:nth-child(1) > div:nth-child(4) > div > input').click().type('QWEasd12')

        cy.wait(2000)

        cy.contains('Обязательное поле, символы латиницы, не содержит пробелы').should('be.visible')
        cy.contains('Пароли не совпадают').should('be.visible')
        cy.contains('Обязательное поле, некорректная почта').should('be.visible')
    });

    it('Data not entered', () => {
        cy.visit('https://dev.profteam.su/registration')

        cy.wait(1000)

        cy.get('#app > div.page > div > section > form > div:nth-child(1) > div.form__labels > div:nth-child(1) > div:nth-child(1) > div > input').click().type(' ')
        cy.get('#app > div.page > div > section > form > div:nth-child(1) > div.form__labels > div:nth-child(1) > div:nth-child(2) > div > input').click().type(' ')
        cy.get('#app > div.page > div > section > form > div:nth-child(1) > div.form__labels > div:nth-child(1) > div:nth-child(3) > div > input').click().type(' ')
        cy.get('#app > div.page > div > section > form > div:nth-child(1) > div.form__labels > div:nth-child(1) > div:nth-child(4) > div > input').click().type(' ')

        cy.wait(2000)
        cy.get('#app > div.page > div > section > form > div.form__buttons > div:nth-child(4)').click()

        cy.contains('Обязательное поле, символы латиницы, не содержит пробелы').should('be.visible')
        cy.contains('Обязательное поле, мин 6 символов, должен содержать буквы в верхнем и нижнем регистре, минимум 1 цифру, не содержать пробелы').should('be.visible')
    });

    it('Data already exists', () => {
        cy.visit('https://dev.profteam.su/registration')

        cy.wait(1000)


        cy.get('#app > div.page > div > section > form > div:nth-child(1) > div.form__labels > div:nth-child(1) > div:nth-child(1) > div > input').click().type('rumaxxxxx')
        cy.get('#app > div.page > div > section > form > div:nth-child(1) > div.form__labels > div:nth-child(1) > div:nth-child(2) > div > input').click().type('rumnwwxxxxxx@gmail.com')
        cy.get('#app > div.page > div > section > form > div:nth-child(1) > div.form__labels > div:nth-child(1) > div:nth-child(3) > div > input').click().type('QWEasd123')
        cy.get('#app > div.page > div > section > form > div:nth-child(1) > div.form__labels > div:nth-child(1) > div:nth-child(4) > div > input').click().type('QWEasd123')

        cy.wait(2000)

        cy.get('#app > div.page > div > section > form > div.form__buttons > div:nth-child(4)').click()

        cy.contains('Такое значение поля логин уже существует.').should('be.visible')
        cy.contains('Такое значение поля почта уже существует.').should('be.visible')
    });
});
