import { IGetMultipleProductsDto } from "@/api/products/products.dto";

export const mock_products: IGetMultipleProductsDto['response'] = [
    {
        id: 1,
        name: "Wireless Earbuds",
        price: 59.99,
        image: "https://via.placeholder.com/300x200.png?text=Wireless+Earbuds",
        category: "Audio",
        is_featured: true,

    },
    {
        id: 2,
        name: "Smart Watch",
        price: 129.99,
        image: "https://via.placeholder.com/300x200.png?text=Smart+Watch",
        category: "Wearables",
        is_featured: true,

    },
    {
        id: 3,
        name: "Laptop Stand",
        price: 29.99,
        image: "https://via.placeholder.com/300x200.png?text=Laptop+Stand",
        category: "Accessories",
        is_featured: true,

    },
    {
        id: 4,
        name: "Bluetooth Speaker",
        price: 79.99,
        image: "https://via.placeholder.com/300x200.png?text=Bluetooth+Speaker",
        category: "Audio",
        is_featured: true,

    },
    {
        id: 5,
        name: "Fitness Tracker",
        price: 49.99,
        image: "https://via.placeholder.com/300x200.png?text=Fitness+Tracker",
        category: "Wearables",
        is_featured: false,

    },
    {
        id: 6,
        name: "Wireless Mouse",
        price: 19.99,
        image: "https://via.placeholder.com/300x200.png?text=Wireless+Mouse",
        category: "Accessories",
        is_featured: true,

    },
    {
        id: 7,
        name: "4K Monitor",
        price: 299.99,
        image: "https://via.placeholder.com/300x200.png?text=4K+Monitor",
        category: "Displays",
        is_featured: true,

    },
    {
        id: 8,
        name: "Mechanical Keyboard",
        price: 89.99,
        image: "https://via.placeholder.com/300x200.png?text=Mechanical+Keyboard",
        category: "Accessories",
        is_featured: false,

    },
    {
        id: 9,
        name: "Noise-Cancelling Headphones",
        price: 199.99,
        image: "https://via.placeholder.com/300x200.png?text=Noise-Cancelling+Headphones",
        category: "Audio",
        is_featured: true,

    },
    {
        id: 10,
        name: "Portable Charger",
        price: 39.99,
        image: "https://via.placeholder.com/300x200.png?text=Portable+Charger",
        category: "Accessories",
        is_featured: false,

    },
    {
        id: 11,
        name: "Wireless Charging Pad",
        price: 24.99,
        image: "https://via.placeholder.com/300x200.png?text=Wireless+Charging+Pad",
        category: "Accessories",
        is_featured: true,

    },
    {
        id: 12,
        name: "Gaming Mouse",
        price: 69.99,
        image: "https://via.placeholder.com/300x200.png?text=Gaming+Mouse",
        category: "Gaming",
        is_featured: false,
    },
];
