describe('Demo web shop tests', () => {
    /*beforeEach(async () => {
        
    });*/

        var FirstName = "";
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

    it('Second test', async () => {
       

    });

})