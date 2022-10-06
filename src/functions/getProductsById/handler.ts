import { APIGatewayProxyHandler } from "aws-lambda";
import type { ValidatedEventAPIGatewayProxyEvent } from '../../libs/api-gateway';
import { formatJSONResponse, formatNotFoundResponse } from '../../libs/api-gateway';
import { middyfy } from '../../libs/lambda';
import { Product, Stock, ProductWithStock } from '../../types';
import { getProductByIdFromDB } from '../../utils/db/productsHandler';
import { getStockByProductId } from '../../utils/db/stockHandler';
import { mapProductWithStock } from "../../utils/db/productStockHandler";
import schema from './schema';
import { errorHandler } from "src/utils/validation/errorHandler";


export const getProductsById: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  const { productId } = event.pathParameters;
  const item: Product | null  = await getProductByIdFromDB(productId);
  if (!item) {
    return formatNotFoundResponse(`Product with ID = ${productId} not found`);
  }
  const stock: Stock | null = await getStockByProductId(productId);
  if (!stock) {
    return formatNotFoundResponse(`Stock for Product with ID = ${productId} not found`);
  }
  return formatJSONResponse(mapProductWithStock(item, stock));
};

export const main = middyfy(getProductsById);
export const handler: APIGatewayProxyHandler = errorHandler<ProductWithStock>(getProductsById);