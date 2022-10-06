export interface Product {
    description: string;
    id: string;
    price: number;
    title: string;
    image?: string;
};

export interface Stock {
    product_id: string,
    count: number
};

export interface ProductWithStock extends Product {
    count: number;
};