import type { ValidatedEventAPIGatewayProxyEvent } from '../../libs/api-gateway';
import { formatJSONResponse } from '../../libs/api-gateway';
import { middyfy } from '../../libs/lambda';

import { products } from '../../utils/data/products';

export const getProductsList: ValidatedEventAPIGatewayProxyEvent<void> = async () => {
  return formatJSONResponse({
    message: `Success!`,
    products,
  });
};

export const main = middyfy(getProductsList);
