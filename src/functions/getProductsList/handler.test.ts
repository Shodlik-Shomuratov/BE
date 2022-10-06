import context from "aws-lambda-mock-context"
import { getProductsList } from "./handler";

const ctx = context();

async function request(): Promise<any> {
    return await getProductsList({
        headers: undefined,
        multiValueHeaders: undefined,
        httpMethod: "",
        isBase64Encoded: false,
        path: "",
        pathParameters: undefined,
        queryStringParameters: undefined,
        multiValueQueryStringParameters: undefined,
        stageVariables: undefined,
        requestContext: undefined,
        resource: "",
        body: undefined
    }, ctx, () => {})
}


describe('=== Get Products List Tests ===', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('Should return status code 200 and there are header and body', async () => {

        const res = await request();

        expect(res).toMatchObject({ statusCode: 200 });
        expect(res).toHaveProperty('body');
    })
})