import { equal } from 'node:assert';

describe('Demo web shop tests', () => {
    /*beforeEach(async () => {
        
    });*/

    //Return from comments for final text (proceed with the same login and password)
    //Start
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

    
   //Finish
//-------------------------------------------------------

//Delete after all tests are done
//Start
/*Email = "johnsmith@testmail.com";
Password = "johnsmithpswrd";
it('Temporary open site', async () => {
await browser.url('https://demowebshop.tricentis.com/');
});
//Finish
//-------------------------------------------------------
*/

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

    it('Verify that allows sorting items (different options)', async () => {
        //Open Computers/Desktops page
        await browser.url('https://demowebshop.tricentis.com/desktops');

        //Sort items by Name:A to Z and verify results
        await $('.product-sorting #products-orderby').click();
        await $('.product-sorting [value="https://demowebshop.tricentis.com/desktops?orderby=5"]').click();
        var elements = $$('.product-item .product-title a');
        let elementsTitles = [];
        let elementsTitlesSortedAZ = [];
        
        for(let i = 0; i < 6; i++) 
        {
            elementsTitles[i] = await elements[i].getProperty('innerText');
            elementsTitlesSortedAZ[i] = await elements[i].getProperty('innerText');
        };

        elementsTitlesSortedAZ = elementsTitlesSortedAZ.sort();
        
        let elementsTitlesString = JSON.stringify(elementsTitles);
        let elementsTitlesSortedAZString = JSON.stringify(elementsTitlesSortedAZ);

        equal(elementsTitlesSortedAZString, elementsTitlesString);  
        
        //Sort items by Name: Z to A and verify results
        await $('.product-sorting #products-orderby').click();
        await $('.product-sorting [value="https://demowebshop.tricentis.com/desktops?orderby=6"]').click();
        var elements2 = $$('.product-item .product-title a');
        let elementsTitles2 = [];
        let elementsTitlesSortedZA = [];
        
        for(let i = 0; i < 6; i++) 
        {
            elementsTitles2[i] = await elements2[i].getProperty('innerText');
            elementsTitlesSortedZA[i] = await elements2[i].getProperty('innerText');
        };

        elementsTitlesSortedZA = elementsTitlesSortedAZ.sort().reverse();
        
        let elementsTitlesString2 = JSON.stringify(elementsTitles2);
        let elementsTitlesSortedZAZString = JSON.stringify(elementsTitlesSortedZA);

        equal(elementsTitlesSortedZAZString, elementsTitlesString2); 

        //Sort items by Price: Low to High and verify results
        await $('.product-sorting #products-orderby').click();
        await $('.product-sorting [value="https://demowebshop.tricentis.com/desktops?orderby=10"]').click();
        
        var elements3 = $$('.product-item .add-info .prices .price');
        
        let elementsPrices = [];
        let elementsPricesSortedLowtoHigh = [];

        for(let i = 0; i < 6; i++) 
            {
                elementsPrices[i] = await elements3[i].getProperty('innerText');
                elementsPricesSortedLowtoHigh[i] = await elements3[i].getProperty('innerText');
            };
        
        elementsPricesSortedLowtoHigh = elementsPricesSortedLowtoHigh.sort(function(a, b) {return a - b;});
        
        let elementsPricesString = JSON.stringify(elementsPrices);
        let elementsPricesSortedLowtoHighString = JSON.stringify(elementsPricesSortedLowtoHigh);

        equal(elementsPricesSortedLowtoHighString, elementsPricesString);
        
         //Sort items by Price: High to Low and verify results
         await $('.product-sorting #products-orderby').click();
         await $('.product-sorting [value="https://demowebshop.tricentis.com/desktops?orderby=11"]').click();
         
         var elements4 = $$('.product-item .add-info .prices .price');
         
         let elementsPrices2 = [];
         let elementsPricesSortedHightoLow = [];
 
         for(let i = 0; i < 6; i++) 
             {
                elementsPrices2[i] = await elements4[i].getProperty('innerText');
                elementsPricesSortedHightoLow[i] = await elements4[i].getProperty('innerText');
             };
         
             elementsPricesSortedHightoLow = elementsPricesSortedHightoLow.sort(function(a, b) {return a - b;}).reverse();
         
         let elementsPricesString2 = JSON.stringify(elementsPrices2);
         let elementsPricesSortedHightoLowString = JSON.stringify(elementsPricesSortedHightoLow);
 
         equal(elementsPricesSortedHightoLowString, elementsPricesString2);

         //Sort items by Created on and verify results
         await $('.product-sorting #products-orderby').click();
         await $('.product-sorting [value="https://demowebshop.tricentis.com/desktops?orderby=15"]').click();
         
         var elements5 = $$('.item-box .product-item');
         
         let elementsIDs = [];
         let elementsIDsSorted = [];
 
         for(let i = 0; i < 6; i++) 
             {
                elementsIDs[i] = await elements5[i].getAttribute('data-productid');
                elementsIDsSorted[i] = await elements5[i].getAttribute('data-productid');
             };
         
             elementsIDsSorted = elementsIDsSorted.sort(function(a, b) {return a - b;}).reverse();
         
         let elementsIDsString = JSON.stringify(elementsIDs);
         let elementsIDsSortedString = JSON.stringify(elementsIDsSorted);

         equal(elementsIDsSortedString, elementsIDsString);
        
    });

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

    it('Verify that allows adding an item to the Wishlist', async () => {
        //Open Apparel & Shoes page
        await browser.url('https://demowebshop.tricentis.com/apparel-shoes');

        //Get the title of the 1st element
        let firstTitleWL = await $$('.product-item .product-title a')[0].getProperty('innerText');

        //Add the item to wishlist
        await $$('.item-box .product-item')[0].click();
        await $('#add-to-wishlist-button-5').click();

        //Open the wishlist and verify the element is added
        await $('.header-links .ico-wishlist').click();
        await expect($('.cart-item-row .product a')).toHaveText(firstTitleWL);

    });

   it('Verify that allows adding an item to the card', async () => {
        //Open Computers/Desktops page
        await browser.url('https://demowebshop.tricentis.com/desktops');

        //Get the title of the 1st element
        let firstTitle = await $$('.product-item .product-title a')[0].getProperty('innerText');

        //Add the item to cart
        await $$('.item-box .product-item')[0].click();
        await $('#add-to-cart-button-72').click();

        //Open the cart and verify the element is added
        await $('.header-links .ico-cart').click();
        await expect($('.cart-item-row .product-name')).toHaveText(firstTitle);
    });

    it('Verify that allows removing an item from the card', async () => {
        //Select the element to remove and update the card
        await $('.cart-item-row [name="removefromcart"]').click();
        await $('.buttons [name="updatecart"').click();

        //Verify the element is removed
        await expect($('.page .order-summary-content')).toHaveText('Your Shopping Cart is empty!');
    });

    it('Verify that allows checkout an item', async () => {
        //Open Computers/Desktops page
        await browser.url('https://demowebshop.tricentis.com/desktops');

        //Add the item to cart and open cart
        await $$('.item-box .product-item')[0].click();
        await $('#add-to-cart-button-72').click();
        await $('.header-links .ico-cart').click();
        
        //Accept terms of service and initiate checkout
        await $('.terms-of-service #termsofservice').click();
        await $('.checkout-buttons #checkout').click();

        //Fill in Billing address
        //Fill in new address
        await $('#BillingNewAddress_CountryId').click();
        await $('#BillingNewAddress_CountryId [value="1"]').click();
        await $('#BillingNewAddress_City').setValue('New York');
        await $('#BillingNewAddress_Address1').setValue('123 main street');
        await $('#BillingNewAddress_ZipPostalCode').setValue('12345');
        await $('#BillingNewAddress_PhoneNumber').setValue('123456789');

        //--------

        await $('#opc-billing input[type="button"]').click();

        //Fill in Shipping address
        //Fill in new address
        /*await $('#ShippingNewAddress_CountryId').click();
        await $('#BillingNewAddress_CountryId [value="1"]').click();
        await $('#ShippingNewAddress_City').setValue('New York');
        await $('#ShippingNewAddress_Address1').setValue('123 main street');
        await $('#ShippingNewAddress_ZipPostalCode').setValue('12345');
        await $('#ShippingNewAddress_PhoneNumber').setValue('123456789');*/

        //--------
        await $('#opc-shipping input[type="button"]').click();

        //Select Shipping method
        await $('#opc-shipping_method input[type="button"]').click();

        //Select Payment method
        await $('#opc-payment_method input[type="button"]').click();

        //Confirm Payment information
        await $('#opc-payment_info input[type="button"]').click();

        //Confirm order
        await $('#opc-confirm_order input[type="button"]').click();

        //Validate that cart is checkout
        await expect($('.page .section .title')).toHaveText('Your order has been successfully processed!');

    });
})