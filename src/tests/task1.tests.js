describe('Task 1', () => {
    beforeEach(async () => {
        await browser.url('https://www.epam.com/');
    });
   
    it('Check the title is correct', async () => {
        
        await expect(browser).toHaveTitle('EPAM | Software Engineering & Product Development Services')

    });

    it('Check the ability to switch Light / Dark mode', async () => {
        //await browser.url('https://www.epam.com/');

        await $('.header__vaulting-container .theme-switcher').click();

        const bodyColor = await $('.header__content').getCSSProperty('color');
        await expect(bodyColor.parsed.hex).toEqual('#000000');
        
    });

    it('Check that allow to change language to UA', async () => {
        //await browser.url('https://www.epam.com/');
        await $('.location-selector__button').click();
        await $(':nth-child(6) > .location-selector__link').click();

        await expect(browser).toHaveTitle('EPAM Ukraine - найбільша ІТ-компанія в Україні | Вакансії')

     });

     
    it('Check the policies list', async () => {
        await expect($('.policies > .heading')).toHaveText('POLICIES');
        await expect($('.policies-left > :nth-child(1) > .fat-links')).toHaveText('INVESTORS');
        await expect($('.policies-left > :nth-child(5) > .fat-links')).toHaveText('COOKIE POLICY');
        await expect($('.policies-left > :nth-child(2) > .fat-links')).toHaveText('OPEN SOURCE');
        await expect($('.policies-right > :nth-child(1) > .fat-links')).toHaveText('APPLICANT PRIVACY NOTICE');
        await expect($('.policies-left > :nth-child(3) > .fat-links')).toHaveText('PRIVACY POLICY');
        await expect($('.policies-right > :nth-child(2) > .fat-links')).toHaveText('WEB ACCESSIBILITY');
     });
})