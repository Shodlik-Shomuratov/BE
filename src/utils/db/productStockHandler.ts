import { DynamoDB } from "aws-sdk";
import { Product, Stock, ProductWithStock } from "../../types";


const db = new DynamoDB.DocumentClient()
const PRODUCTS_TABLE = process.env.PRODUCTS_TABLE;
const STOCKS_TABLE = process.env.STOCKS_TABLE;

export const mapProductsWithStock = (products: Product[], stock: Stock[]): ProductWithStock[] => {
    const stockInfoMap = new Map(stock.map(info => [info.product_id, info]));
    return products.map(product => mapProductWithStock(product, stockInfoMap.get(product.id)));
}

export const mapProductWithStock = (product: Product, stock: Stock): ProductWithStock => ({
    ...product,
    count: stock?.count || 0
});

export const createProductInDB = async (product: Product, stock: Stock): Promise<ProductWithStock> => {
    await db.transactWrite({
      TransactItems: [
        {
          Put: {
            Item: product,
            TableName: PRODUCTS_TABLE,
          },
        },
        {
          Put: {
            Item: stock,
            TableName: STOCKS_TABLE,
          },
        }
      ]
    }).promise();
    return mapProductWithStock(product, stock);
}