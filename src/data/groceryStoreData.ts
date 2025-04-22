import { faker } from "@faker-js/faker";
import { FaBowlRice, FaCanadianMapleLeaf, FaFish, FaBurger, FaAppleWhole, FaStore, FaBacon, FaCheese } from "react-icons/fa6";
import { IconType } from "react-icons";


export interface GroceryStore {
    id: string;
    name: string;
    description: string;
    icon: IconType;
    orderBy: string;
    storeTimes: string;
    storeFeatures: string;
    link?: string; // ✅ Add this line
}

const namePrefixes = [
    "Harvest", "Green", "Urban", "Sunny", "Rustic", "Fresh", "Golden", "Thyme", "Olive", "Wild",
    "Bloom", "Cedar", "Sage", "Happy", "Morning", "Valley", "Maple", "Lush", "Evergreen", "Hilltop"
];
const nameSuffixes = [
    "Market", "Grocers", "Organics", "Provisions", "Pantry", "Foods", "Deli", "Farm", "Farmers", "Farms",
    "Mart", "Corner", "Storehouse", "Goods", "Commons", "Baskets", "Depot", "Outlet", "Marketplace", "Harvests"
];
const storeLogos = [FaBowlRice, FaCanadianMapleLeaf, FaFish, FaBurger, FaAppleWhole, FaStore, FaBacon, FaCheese];
const storeTimesOpening = ["7:00", "8:00", "9:00"];
const storeTimesClosing = ["18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "00:00", "01:00", "02:00"];
const storeFeatures = [
    "Fast Delivery",
    "Local Selection",
    "Free Delivery",
    "Accepts Food Stamps",
    "No Tax",
    "Organic Options",
    "Fresh Daily Stock",
    "Contactless Delivery",
    "Rewards Program",
    "24/7 Support",
    "Eco-Friendly Packaging",
    "Same-Day Pickup",
    "Bulk Discounts",
    "Locally Sourced Produce",
    "Certified Halal & Kosher Options"
];

const descriptionTemplates = [
    "Locally sourced and always fresh.",
    "Your go-to spot for farm-to-table goodness.",
    "Organic produce and gourmet essentials.",
    "Wholesome foods delivered daily.",
    "Fresh flavors, friendly faces.",
    "Handpicked ingredients for every meal.",
    "Where freshness meets flavor.",
    "A better way to grocery shop.",
    "Seasonal selections you’ll love.",
    "Quality you can taste in every bite.",
];

const groceryStoreList = Array.from({ length: 10 }, () => ({
    id: faker.string.uuid(),
    name: `${faker.helpers.arrayElement(namePrefixes)} ${faker.helpers.arrayElement(nameSuffixes)}`,
    description: faker.helpers.arrayElement(descriptionTemplates),
    icon: faker.helpers.arrayElement(storeLogos),
    orderBy: `${faker.number.int({ min: 7, max: 17 })}:${faker.helpers.arrayElement([0, 15, 30, 45]).toString().padStart(2, '0')}`,
    storeTimes: `${faker.helpers.arrayElement(storeTimesOpening)} - ${faker.helpers.arrayElement(storeTimesClosing)}`,
    storeFeatures: faker.helpers.arrayElements(storeFeatures, 2).join(" • "),
}));

export default groceryStoreList;