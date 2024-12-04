describe('Task 1', () => {
    beforeEach(async () => {
        await browser.url('https://www.epam.com/');

    });
   
    it('Check the title is correct', async () => {
        
        await expect(browser).toHaveTitle('EPAM | Software Engineering & Product Development Services')

        //Accept all cookies
        await $('#onetrust-accept-btn-handler').click();

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

     it('Check that allow to switch location list by region', async () => {
        
        //
        await expect($('.tabs-23__title.active > .tabs-23__link')).toHaveText('AMERICAS');
        await expect($(':nth-child(2) > .tabs-23__link')).toHaveText('EMEA');
        await expect($(':nth-child(3) > .tabs-23__link')).toHaveText('APAC');

        //Switching to EMEA and check that ARMENIA is presented in locations
        await $(':nth-child(2) > .tabs-23__link').click();
        await expect($('.tabs-23__item.active > .locations-viewer > .locations-viewer-ui-23 > .locations-viewer-23__carousel > .owl-stage-outer > .owl-stage > .owl-item.active > .locations-viewer-23__country > .locations-viewer-23__country-btn > .locations-viewer-23__country-title')).toHaveText('ARMENIA');
        
        //Switching to APAC and check that AUSTRALIA is presented in locations
        await $(':nth-child(3) > .tabs-23__link').click();
        await expect($('.tabs-23__item.active > .locations-viewer > .locations-viewer-ui-23 > .locations-viewer-23__carousel > .owl-stage-outer > .owl-stage > .active > .locations-viewer-23__country > .locations-viewer-23__country-btn > .locations-viewer-23__country-title')).toHaveText('AUSTRALIA');

        //Switching to AMERICAS and check that CANADA is presented in locations
        await $(':nth-child(1) > .tabs-23__link').click();
        await expect($('.tabs-23__item.active > .locations-viewer > .locations-viewer-ui-23 > .locations-viewer-23__carousel > .owl-stage-outer > .owl-stage > .active > .locations-viewer-23__country > .locations-viewer-23__country-btn > .locations-viewer-23__country-title')).toHaveText('CANADA');

        
     });
})