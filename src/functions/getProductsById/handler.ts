import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';

import schema from './schema';
import products from '@data/data'

const getProductsById: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {

  const productId = event.pathParameters.productId
  const product = products.find(product => product.id === productId)

  if (!product) {
    return formatJSONResponse({
      message: `Product not found!`,
      productId
    });
  }

  return formatJSONResponse({
    message: `Successfully!`,
    productId,
    product
  });
};

export const main = middyfy(getProductsById);
