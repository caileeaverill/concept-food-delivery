import { faker } from "@faker-js/faker";

interface Testimonial {
    id: string;
    name: string;
    tagline: string;
    text: string;
    avatar: string;
}

const generateTestimonial: Testimonial[] = Array.from({ length: 3 }, (): Testimonial => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    tagline: faker.lorem.sentence({ min: 5, max: 10 }),
    text: faker.lorem.sentence({ min: 10, max: 20 }),
    avatar: faker.image.personPortrait(),
}));

export default generateTestimonial;
