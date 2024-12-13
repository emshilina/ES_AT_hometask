const axios = require("axios");
const {TEST_URL} = require("../config/endpoints");

const sendRequest = async (url, data = null, method = "get", headers = {}) => {
    try {
        const response = await axios({
            method,
            url: `${TEST_URL}/${url}`,
            //headers: {},
            headers,
            data
        });
        return{
            status: response.status,
            data: response.data
        }
    } catch (error) {
        return {
            status: error.response.status
        };
    }
};

module.exports = {
    sendRequest
};