describe('Task 1', () => {
    it('Check the title is correct', async () => {
        await browser.url('https://www.epam.com/');
        await expect(browser).toHaveTitle('EPAM | Software Engineering & Product Development Services')

    });

    it('Check the ability to switch Light / Dark mode', async () => {
        await browser.url('https://www.epam.com/');

        await $('.header__vaulting-container .theme-switcher').click();

        //add a test
        
        //

    });

    it('Check that allow to change language to UA', async () => {
        await browser.url('https://www.epam.com/');
        await $('.location-selector__button').click();
        await $(':nth-child(6) > .location-selector__link').click();

        await expect(browser).toHaveTitle('EPAM Ukraine - найбільша ІТ-компанія в Україні | Вакансії')

     });
})