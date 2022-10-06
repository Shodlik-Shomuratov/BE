import { DynamoDB } from "aws-sdk";
import { Product } from "./../../types";


const db = new DynamoDB.DocumentClient()
const PRODUCTS_TABLE = process.env.PRODUCTS_TABLE;


export const getProductsFromDB = async (): Promise<Product[]> => {
    const { Items } = await db.scan({
      TableName: PRODUCTS_TABLE
    }).promise();
    return Items.map(mapProduct);
  }

  export const getProductByIdFromDB = async (id: string): Promise<Product | null> => {
    const { Item } = await db.get({
      TableName: PRODUCTS_TABLE,
      Key: { id }
    }).promise();
  
    if (!Item) {
      return null;
    }
    return mapProduct(Item);
  }
  
export const mapProduct = (item): Product => ({
    id: item.id,
    title: item.title,
    description: item.description,
    price: item.price,
});
  