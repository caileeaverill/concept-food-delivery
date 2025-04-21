import { faker } from '@faker-js/faker';

const groceryDepartments = [
    'Produce',
    'Dairy',
    'Bakery',
    'Meat',
    'Seafood',
    'Pantry',
    'Snacks',
    'Beverages',
    'Frozen'
];

export const generateGroceryItem = () => {
    const department = faker.helpers.arrayElement(groceryDepartments);
    return {
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        department,
        description: `${faker.commerce.productAdjective()} ${faker.commerce.productMaterial()} ${faker.commerce.product()}`,
        image: faker.image.urlPicsumPhotos()
    };
};

export const groceryList = Array.from({ length: 20 }, generateGroceryItem);