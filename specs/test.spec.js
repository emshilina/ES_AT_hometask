const axios = require("axios");
const {sendRequest} = require("../helpers/api.helper");
const testData = require("../config/data.json");
const ListOfUsers = require("../config/ListOfUsers.json");
const petData = require("../config/petData.json");
//let PetId = '';
//const {TEST_URL} = require("../config/endpoints");

describe ("Pet shop tests", () => {

    it("Verify that allows creating a User", async() =>{
        const response = await sendRequest("user", testData, "post")
        expect(response.status).to.equal(200);
                
        const response2 = await sendRequest(`user/${testData.username}`);
        expect(response2.data.username).to.equal(testData.username);
    });

    it("Verify that allows login as a User", async() =>{
        
        const Creds = {
            username: testData.username,
            password:testData.password,
        };
        
        const response = await sendRequest('user/login', Creds);
        expect(response.status).to.equal(200);
        
    });

    it("Verify that allows creating the list of Users", async() =>{
        const response = await sendRequest("user/createWithArray", ListOfUsers, "post")
        expect(response.status).to.equal(200);

    });

    it("Verify that allows Log out User", async() =>{
        
        const response = await sendRequest('user/logout');
        expect(response.status).to.equal(200);
    });

    it("Verify that allows adding a new Pet", async() =>{
        const response = await sendRequest("pet", petData, "post")
        expect(response.status).to.equal(200);
        expect(response.data.name).to.equal(petData.name);

    });

   it("Verify that allows updating Pet image", async() =>{
        const formData = new FormData();
        formData.append("additionalMetadata", "4444");
        formData.append("file", "../config/images/parrot.jpg");
        const header = {
            "Content-Type": "multipart/form-data"
          };

        const response = await sendRequest(`pet/${petData.id}/uploadImage`, formData, "post", header)
        
        expect(response.status).to.equal(200);
             
    });

    
   /* it("Verify that allows updating Pet name and status", async() =>{
        petDataUpdated ={
            name: 'Kesha',
            status: 'not available',
        };
        const response = await sendRequest(`pet/${PetId}`, petDataUpdated, "post")
        expect(response.status).to.equal(200);
        expect(response.data.name).to.equal(petDataUpdated.name);

        
        
    });*/

  

});