const fs = require('fs');

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
        
        //Check the list of regions
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

     it('Check the search function', async () => {
        
        //Initiate searching 

        await $('button.header-search__button').click();
        await $('#new_form_search').setValue('AI');
        await $('.search-results__action-section button').click();

        //Verify displayed results
        await expect($('.search-results__counter')).toHaveHTML(expect.stringContaining('results for "AI"'));
                        
     });

     it('Check the form fields validation', async () => {
        
        //Open Contact us 

        await $('.header__content > :nth-child(4)').click();
        
         //Click Submit button with empty mandatory fields

         await $('.button-ui').click();

        //First name
        const FirstNameColor = await $(':nth-child(2) > .colctrl-ui-23 > :nth-child(1) > .colctrl__holder > .text-field > .text-field-ui > .form-component__label').getCSSProperty('color');
        await expect(FirstNameColor.parsed.hex).toEqual('#e80202');

         //Last name
         const LastNameColor = await $(':nth-child(2) > .colctrl__holder > .text-field > .text-field-ui > .form-component__label').getCSSProperty('color');
         await expect(LastNameColor.parsed.hex).toEqual('#e80202');

         //Email
         const EmailColor = await $(':nth-child(3) > .colctrl-ui-23 > :nth-child(1) > .colctrl__holder > .text-field > .text-field-ui > .form-component__label').getCSSProperty('color');
         await expect(EmailColor.parsed.hex).toEqual('#e80202');

         //Phone
         const PhoneColor = await $('.phone-ui > .form-component__label').getCSSProperty('color');
         await expect(PhoneColor.parsed.hex).toEqual('#e80202');

         //How did yoy hear aboaut Epam
         const AboutEpamColor = await $('#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_comment_how_hear_about-label').getCSSProperty('color');
         await expect(AboutEpamColor.parsed.hex).toEqual('#e80202');

         //Agreed to process personal data checkbox
         const PersonalDataChackboxColor = await $(':nth-child(9) > .checkbox-ui > .checkbox__holder').getCSSProperty('color');
         await expect(PersonalDataChackboxColor.parsed.hex).toEqual('#e80202');
                        
     });

     it('Check that the Company logo on the header lead to the main page', async () => {
        
        //Open About page 
        await $(':nth-child(4) > .top-navigation__item-text > .top-navigation__item-link').click();
    
        //Click to Logo
        await $('.header__logo-light').click();

        //Verify home page is opened
        await expect(await browser.getUrl()).toEqual('https://www.epam.com/');
                        
     });

     it('Check that allows to download report', async () => {
        
        console.log(global.downloadDir);
        //Open About page 
        await $(':nth-child(4) > .top-navigation__item-text > .top-navigation__item-link').click();
    
        //Download the report
        await $('.colctrl__holder > .button > .button__wrapper > a.button-ui-23').click();
        await (new Promise(resolve => setTimeout(resolve, 5000)));

        //Return downloaded file names
        const testFolder = './Downloaded/';
        const files = [...fs.readdirSync(testFolder)];
        
        //Check the file name + extension is correct
        await expect(files[0]).toEqual('EPAM_Corporate_Overview_Q4_EOY.pdf');
        
        //Remove the file
        var filePath = './Downloaded/EPAM_Corporate_Overview_Q4_EOY.pdf'; 
        fs.unlinkSync(filePath);
        
                        
     });

})