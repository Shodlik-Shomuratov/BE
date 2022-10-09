import context from "aws-lambda-mock-context"
import { getProductsById } from "./handler";

const ctx = context();

async function request(productId: string): Promise<any> {
    return await getProductsById({
        headers: undefined,
        multiValueHeaders: undefined,
        httpMethod: "",
        isBase64Encoded: false,
        path: "",
        pathParameters: {
            productId
        },
        queryStringParameters: undefined,
        multiValueQueryStringParameters: undefined,
        stageVariables: undefined,
        requestContext: undefined,
        resource: "",
        body: undefined
    }, ctx, () => {})
}

describe('=== Get Products By Id Tests ===', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });


    test('Should return code 200 and product!', async () => {
        const res = await request("6b7ef24e-5a65-478a-8ad6-e3af64ca3b99")

        expect(res).toMatchObject({ statusCode: 200 });
    })


    test('Should return code 404!', async () => {
        const res = await request("1");

        expect(res).toMatchObject({ statusCode: 404 });
    })


    test('Should return code 400!', async () => {
        const res = await request("")

        expect(res).toMatchObject({ statusCode: 400 });
    })
})