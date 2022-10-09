import { formatNotFoundResponse, formatRequiredResponse, ValidatedEventAPIGatewayProxyEvent } from '../../libs/api-gateway';
import { formatJSONResponse } from '../../libs/api-gateway';
import { middyfy } from '../../libs/lambda';

import schema from './schema';
import { products } from '../../utils/data/products';



export const getProductsById: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {

  const productId = event.pathParameters.productId

  if (!productId) {
    return formatRequiredResponse({
        message: "Bad request!",
        product: `Product id must be sent in path parameters!`
    })
  }

  const product = products.find(e => e.id === productId);

  if (!product) {
    return formatNotFoundResponse({
      message: "Not found!",
      product: `Product with ID = ${productId} not found.`
    })
  }

  return formatJSONResponse({
    message: "Success!",
    product
  });
};

export const main = middyfy(getProductsById);
