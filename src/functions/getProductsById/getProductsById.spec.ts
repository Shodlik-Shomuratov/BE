//  @ts-nocheck 
import { getProductsById } from './handler';
import { products } from '../../mock/mock';

describe('GetProductsById test', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return code 200', async () => {
    const result = await getProductsById({
      pathParameters: {
        productId: products[0].id,
      },
    });
    expect(result).toMatchObject({ statusCode: 200 });
  });

  it('should return code 400', async () => {
    const result = await getProductsById({
      pathParameters: {
        productId: '',
      },
    });
    expect(result).toMatchObject({ statusCode: 400 });
  });

  it('should return code 404', async () => {
    const result = await getProductsById({
      pathParameters: {
        productId: 9999,
      },
    });
    expect(result).toMatchObject({ statusCode: 404 });
  });
});