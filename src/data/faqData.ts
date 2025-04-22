import { faker } from "@faker-js/faker";

export const generateFaq = Array.from({ length: 3 }, () => {
    const paragraphCount = Math.floor(Math.random() * 5) + 1;
    const paragraphs = Array.from({ length: paragraphCount }, () =>
        faker.lorem.text({ min: 25, max: 100 })
    );
    return {
        question: faker.lorem.sentence({ min: 5, max: 15 }),
        answer: paragraphs
    };
});

export default generateFaq;