const axios = require('axios');
const BASE_URL = "https://fakestoreapi.com";

async function postRequest(endpoint, data) {
    try {
        const response = await axios.post(`${BASE_URL}/${endpoint}`, data);
        console.log(`POST ${endpoint} Success: Status ${response.status}`, response.data);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
}

module.exports = postRequest;