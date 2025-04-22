import { faker } from "@faker-js/faker";


const generateTestimonial = Array.from({ length: 3 }, () => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    tagline: faker.lorem.sentence({ min: 5, max: 10 }),
    text: faker.lorem.sentence({ min: 10, max: 20 }),
    avatar: faker.image.personPortrait(),
}));

export default generateTestimonial;

