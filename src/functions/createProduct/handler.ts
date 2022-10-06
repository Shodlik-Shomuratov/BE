import { APIGatewayProxyEvent, APIGatewayProxyHandler } from "aws-lambda";
import { middyfy } from '../../libs/lambda';
import { ProductWithStock } from '../../types';
import { createProductInDB } from '../../utils/db/productStockHandler';
import { validate } from "./schema";
import { validationErrorHandler } from "../../utils/validation/post.validation";
import { errorHandler } from "src/utils/validation/errorHandler";


export const createProduct = async (event: APIGatewayProxyEvent): Promise<ProductWithStock> => {
  const { title, description, price, count } = event.body;
  validationErrorHandler(validate(event.body), validate.errors);
  const id = event.body.title.split(" ").join("-").toLowerCase();
  const product: ProductWithStock = await createProductInDB({
    id,
    title,
    description,
    price
  }, { 
    product_id: id,
    count
  });
  return product;
};

export const main = middyfy(createProduct);
export const handler: APIGatewayProxyHandler = errorHandler<ProductWithStock>(createProduct);