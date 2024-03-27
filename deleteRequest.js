const axios = require('axios');
const BASE_URL = "https://fakestoreapi.com";

async function deleteRequest(endpoint, id) {
    try {
        const response = await axios.delete(`${BASE_URL}/${endpoint}/${id}`);
        console.log(`DELETE ${endpoint}/${id} Success: Status ${response.status}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
}

module.exports = deleteRequest;
