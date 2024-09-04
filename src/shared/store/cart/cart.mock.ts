import { ICartItem } from "src/shared/store/cart/cart.model";

export const mockCartItems: ICartItem[] = [
    {
        id: 0,
        name: "Product 1",
        price: 100,
        image: "https://via.placeholder.com/150",
        category: "Category 1",
        product_id: "prd_0123_xl_clr_01", // indicate the product id, size and color 
        quantity: 1
    },
    {
        id: 1,
        name: "Trendy Black T-shirt",
        price: 1299,
        image: "/images/trendy-black-t-shirt.jpg",
        // discount: 55,
        // seller: "GENUS APPARELS LTD.",
        // size: "XL",
        quantity: 1,
        // isAdded: false,
        category: "Category 1",
        product_id: "prd_0123_xl_clr_01", // indicate the product id, size and color 
    },
    {
        id: 2,
        name: "Everyday Essential T-Shirt",
        price: 1299,
        image: "/images/everyday-essential-t-shirt.jpg",
        // discount: 55,
        // seller: "GENUS APPARELS LTD.",
        // size: "XL",
        quantity: 1,
        // isAdded: false,
        category: "Category 2",
        product_id: "prd_0123_xl_clr_01", // indicate the product id, size and color 
    },
    {
        id: 3,
        name: "Versatile Cotton Tee",
        price: 1299,
        image: "/images/versatile-cotton-tee.jpg",
        // discount: 55,
        // seller: "GENUS APPARELS LTD.",
        // size: "XL",
        quantity: 1,
        // isAdded: false,
        category: "Category 3",
        product_id: "prd_0123_xl_clr_01", // indicate the product id, size and color 
    },
    {
        id: 4,
        name: "Classic Logo Print Tee",
        price: 1299,
        image: "/images/classic-logo-print-tee.jpg",
        // discount: 55,
        // seller: "GENUS APPARELS LTD.",
        // size: "XL",
        quantity: 1,
        // isAdded: false,
        category: "Category 4",
        product_id: "prd_0123_xl_clr_01", // indicate the product id, size and color 
    },
];


