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

})