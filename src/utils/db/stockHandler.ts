import { DynamoDB } from "aws-sdk";
import { Stock } from "../../types";


const db = new DynamoDB.DocumentClient()
const STOCKS_TABLE = process.env.STOCKS_TABLE;

export const getStock = async (): Promise<Stock[]> => {
    const { Items } = await db.scan({
      TableName: STOCKS_TABLE
    }).promise();
    return Items.map(mapStockInfo);
  }

  export const getStockByProductId = async (productId: string): Promise<Stock | null> => {
    const { Item } = await db.get({
      TableName: STOCKS_TABLE,
      Key: { product_id: productId }
    }).promise();
  
    if (!Item) {
      return null;
    }
    return mapStockInfo(Item);
  }
  
  

  export const mapStockInfo = (item): Stock => ({
    product_id: item.product_id,
    count: item.count
});