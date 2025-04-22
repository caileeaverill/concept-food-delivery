import { faker } from "@faker-js/faker";

const foodImages = [
    "https://images.unsplash.com/vector-1744133656370-f14fc471d23e?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/vector-1744459440585-777893ce2853?q=80&w=3328&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/vector-1740575576357-e0310632ccb8?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/vector-1740296178042-868e47a99833?q=80&w=3350&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/vector-1739806651236-d42c36410b67?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/vector-1740294799662-8407742d8edc?q=80&w=3350&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/vector-1741751410753-6a2feb9917ec?q=80&w=3350&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/vector-1741817877475-70adfd3f0ba4?q=80&w=3140&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/vector-1744459440607-c17cdc84678f?q=80&w=3324&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

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

const groceryDepartmentData = Array.from({ length: 4 }, () => {
    const department = faker.helpers.arrayElement(groceryDepartments);
    const image = faker.helpers.arrayElement(foodImages);
    return {
        id: faker.string.uuid(),
        department,
        image,
        link: faker.internet.url()
    };
});

export default groceryDepartmentData;