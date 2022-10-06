//  @ts-nocheck 
import { getProductsList } from './handler';

describe('GetProductList test', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return code 200', async () => {
    const result = await getProductsList();
    expect(result).toMatchObject({ statusCode: 200 });
  });
});