const faker = require('faker');

function fakeDataGenerator() {
    return {
        title: faker.commerce.productName(),
        price: faker.commerce.price(),
        description: faker.lorem.paragraph(),
        category: faker.random.word(),
        image: faker.image.imageUrl()
    };
}

module.exports = fakeDataGenerator;
