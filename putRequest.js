const axios = require('axios');
const BASE_URL = "https://fakestoreapi.com";

async function putRequest(endpoint, id, data) {
    try {
        const response = await axios.put(`${BASE_URL}/${endpoint}/${id}`, data);
        console.log(`PUT ${endpoint}/${id} Success: Status ${response.status}`, response.data);
        return response.data;
    }catch (error) {
        throw error.response.data;
    }
}

module.exports = putRequest;
