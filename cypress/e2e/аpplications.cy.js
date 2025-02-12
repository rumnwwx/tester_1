describe('Submitting an application for the role of Employer and the role of an educational institution', () => {
    it('Successful application for the role of employer', () => {
        cy.visit('https://dev.profteam.su/login');
        cy.get('input[type="text"]').type('emil');
        cy.get('input[type="password"]').type('QWEasd123');
        cy.get('#app > div.page > div > section > form > div.form__buttons > div:nth-child(3) > button').click()
        cy.wait(2000)
        cy.get('#app > div.page > div > div.page-navigation > div.page-nav > div.page-nav__menu-item > div.page-nav__role-block > button').click()
        cy.get('body > div:nth-child(6) > div.desktop-modal > div > div.select-role > div.select-role-form > div:nth-child(1)').click()
        cy.get('body > div:nth-child(6) > div.desktop-modal > div > div.select-role > div.variants-company > div:nth-child(1)').click()
        cy.get('body > div:nth-child(6) > div.desktop-modal > div > div.choose-company > div > div > div > div').click().type('Глобальная Инициатива для Устойчивого Развития (ГИУР)')
        cy.get('div[class="search-input__wrapper-result"]').click()
        cy.get('body > div:nth-child(6) > div.desktop-modal > div > div.choose-company > button').click()
    });
    it('No matches found', () => {
        cy.visit('https://dev.profteam.su/login');
        cy.get('input[type="text"]').type('emil');
        cy.get('input[type="password"]').type('QWEasd123');
        cy.get('#app > div.page > div > section > form > div.form__buttons > div:nth-child(3) > button').click()
        cy.wait(2000)
        cy.get('#app > div.page > div > div.page-navigation > div.page-nav > div.page-nav__menu-item > div.page-nav__role-block > button').click()
        cy.get('body > div:nth-child(6) > div.desktop-modal > div > div.select-role > div.select-role-form > div:nth-child(1)').click()
        cy.get('body > div:nth-child(6) > div.desktop-modal > div > div.select-role > div.variants-company > div:nth-child(1)').click()
        cy.get('body > div:nth-child(6) > div.desktop-modal > div > div.choose-company > div > div > div > div').click().type('ЫВЛАфы')
        cy.get('div[class="search-input__wrapper-result"]')
        cy.contains('Совпадений не найдено').should('be.visible')
    });
    it('You have already applied for the role', () => {
        cy.visit('https://dev.profteam.su/login');
        cy.get('input[type="text"]').type('emil');
        cy.get('input[type="password"]').type('QWEasd123');
        cy.get('#app > div.page > div > section > form > div.form__buttons > div:nth-child(3) > button').click()
        cy.wait(2000)
        cy.get('#app > div.page > div > div.page-navigation > div.page-nav > div.page-nav__menu-item > div.page-nav__role-block > button').click()
        cy.get('body > div:nth-child(6) > div.desktop-modal > div > div.select-role > div.select-role-form > div:nth-child(2)').click()
        cy.get('body > div:nth-child(6) > div.desktop-modal > div > div.select-role > div.variants-company > div:nth-child(1)').click()
        cy.get('body > div:nth-child(6) > div.desktop-modal > div > div.choose-company > div > div > div > div').click().type('Визионер')
        cy.get('div[class="search-input__wrapper-result"]').click()
        cy.get('body > div:nth-child(6) > div.desktop-modal > div > div.choose-company > button').click()
        cy.contains('Вы уже подали заявку на роль').should('be.visible')
    });
});
