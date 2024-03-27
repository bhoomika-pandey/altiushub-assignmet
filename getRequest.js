const axios = require('axios');
const BASE_URL = "https://fakestoreapi.com";

async function getRequest(endpoint) {
    try {
        const response = await axios.get(`${BASE_URL}/${endpoint}`);
        console.log(`GET ${endpoint} Success: Status ${response.status}`, response.data);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
}

module.exports = getRequest;
