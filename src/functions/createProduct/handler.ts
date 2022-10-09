import { formatNotFoundResponse, formatRequiredResponse, ValidatedEventAPIGatewayProxyEvent } from '../../libs/api-gateway';
import { formatJSONResponse } from '../../libs/api-gateway';
import { middyfy } from '../../libs/lambda';

import { products } from '../../utils/data/products';




export const getProductsById: ValidatedEventAPIGatewayProxyEvent<void> = async (event) => {
  return formatJSONResponse({
    message: "Success!"
  });
};

export const main = middyfy(getProductsById);
