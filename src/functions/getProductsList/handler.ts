import { APIGatewayProxyHandler } from "aws-lambda";
import type { ValidatedEventAPIGatewayProxyEvent } from '../../libs/api-gateway';
import { formatJSONResponse } from '../../libs/api-gateway';
import { middyfy } from '../../libs/lambda';
import { Product, Stock } from '../../types';
import { getProductsFromDB } from './../../utils/db/productsHandler';
import { getStock } from './../../utils/db/stockHandler';
import { mapProductsWithStock } from "./../../utils/db/productStockHandler";
import { errorHandler } from "src/utils/validation/errorHandler";


export const getProductsList: ValidatedEventAPIGatewayProxyEvent<void> = async() => {
  // @ts-ignore
  const products: Product[] = await getProductsFromDB();
  const stock: Stock[] = await getStock();
  return formatJSONResponse(mapProductsWithStock(products, stock));
};

export const main = middyfy(getProductsList);
export const handler: APIGatewayProxyHandler = errorHandler<Product[]>(getProductsList);