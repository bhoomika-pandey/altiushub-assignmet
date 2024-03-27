const fakeDataGenerator = require('./fakeDataGenerator');
const getRequest = require('./getRequest');
const postRequest = require('./postRequest');
const putRequest = require('./putRequest');
const deleteRequest = require('./deleteRequest');

async function testAPI() {
    try {
        const getProductResponse = await getRequest("products/1");

        const postData = fakeDataGenerator();
        const postProductResponse = await postRequest("products", postData);

        const putData = fakeDataGenerator();
        const putProductResponse = await putRequest("products", 1, putData);

        const deleteProductResponse = await deleteRequest("products", 1);
        
    } catch (error) {
        console.error("Error:", error);
    }
}

testAPI();
