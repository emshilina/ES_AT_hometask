const {sendRequest} = require("../helpers/api.helper");
const testData = require("../config/data.json");
const ListOfUsers = require("../config/ListOfUsers.json");

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



});