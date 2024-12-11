describe('Demo web shop tests', () => {
    /*beforeEach(async () => {
        
    });*/

    //Return from comments for final text (proceed with the same login and password)
    //Start
    /*    var FirstName = "";
        var LastName = "";
        var Email = "";
        var Paasword = "";
        var symbols = "abcdefghijklmnopqrstuvwxyz";

        for( var i=0; i < 5; i++ ) {
            FirstName += symbols.charAt(Math.floor(Math.random() * symbols.length));
        };

        for( var i=0; i < 5; i++ ) {
            LastName += symbols.charAt(Math.floor(Math.random() * symbols.length));
        };

        Email = FirstName + LastName + '@testemail.com';
        Password = FirstName + LastName + 'pswrd';


    it('Verify that allows register a User', async () => {
        await browser.url('https://demowebshop.tricentis.com/');

        //Open Registration page
        await $('a.ico-register').click();

        //Fill in registration form and submit registration
        await $('#gender-male').click();
        await $('.inputs #FirstName').setValue(FirstName);
        await $('.inputs #LastName').setValue(LastName);
        await $('.inputs #Email').setValue(Email);
        await $('.inputs #Password').setValue(Password);
        await $('.inputs #ConfirmPassword').setValue(Password);

        await $('.buttons #register-button').click();

        //Check registration is successful
        await expect($('.result')).toHaveText('Your registration completed');
        await expect($('.header-links .account')).toHaveText(Email);
        
        //Logout for the test 2
        await $('.ico-logout').click();
    });

    */
   //Finish
//-------------------------------------------------------

//Delete after all tests are done
//Start
Email = "johnsmith@testmail.com";
Password = "johnsmithpswrd";
it('Temporary open site', async () => {
await browser.url('https://demowebshop.tricentis.com/');
});
//Finish
//-------------------------------------------------------

    it('Verify that allows login a User', async () => {
        //Open login page
        await $('.ico-login').click();

        //Fill in Email and password and Log in
        await $('.inputs #Email').setValue(Email);
        await $('.inputs #Password').setValue(Password);

        await $('.login-page form input.button-1').click();

         //Check login is successful
         await expect($('.header-links .account')).toHaveText(Email);

    });

    it('Verify that Computers group has 3 sub-groups with correct names', async () => {
        //Open Computers group
        await $('.top-menu [href="/computers"]').click();

        //Verify Computers group - main
        await expect($('.sub-category-item .title [href="/desktops"]')).toHaveText("Desktops");
        await expect($('.sub-category-item .title [href="/notebooks"]')).toHaveText("Notebooks");
        await expect($('.sub-category-item .title [href="/accessories"]')).toHaveText("Accessories");
    });

    /*it('Verify that allows sorting items (different options)', async () => {
        //Open Computers/Desktops page
        await browser.url('https://demowebshop.tricentis.com/desktops');

        //Sort items by Name:A to Z and verify results
        await $('.product-sorting #products-orderby').click();
        await $('.product-sorting [value="https://demowebshop.tricentis.com/desktops?orderby=5"]').click();

        
    });*/

    it('Verify that allows changing number of items on page', async () => {
        //Open Apparel & Shoes page (amount of elements > 12)
        await browser.url('https://demowebshop.tricentis.com/apparel-shoes');

        //Change Display to page value to 4
        await $('.product-page-size #products-pagesize').click();
        await $('.product-page-size [value="https://demowebshop.tricentis.com/apparel-shoes?pagesize=4"]').click();

        //Validate that 4 elements per page are displayed
        var elements = $$('.product-item');
        await expect(elements).toBeElementsArrayOfSize(4);
        await expect($('.pager .individual-page [href="/apparel-shoes?pagenumber=2"]').toBeDisplayed());
        
        //Change Display to page value to 8
        await $('.product-page-size #products-pagesize').click();
        await $('.product-page-size [value="https://demowebshop.tricentis.com/apparel-shoes?pagesize=8"]').click();

        //Validate that 8 elements per page are displayed
        var elements = $$('.product-item');
        await expect(elements).toBeElementsArrayOfSize(8);
        await expect($('.pager .individual-page [href="/apparel-shoes?pagenumber=2"]').toBeDisplayed());

        //Change Display to page value to 12
        await $('.product-page-size #products-pagesize').click();
        await $('.product-page-size [value="https://demowebshop.tricentis.com/apparel-shoes?pagesize=12"]').click();

        //Validate that 12 elements per page are displayed
        var elements = $$('.product-item');
        await expect(elements).toBeElementsArrayOfSize(12);
        await expect($('.pager .individual-page [href="/apparel-shoes?pagenumber=2"]').toBeDisplayed());
        
    });

})