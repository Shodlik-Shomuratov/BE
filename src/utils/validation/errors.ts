import { code } from '../data/httpCodes.data.json'

export class BaseError extends Error {
    status: number;
    constructor(message: string) {
        super(message);
        this.name = 'InternalError';
        this.status = code.INTERNAL_SERVER_ERROR;
    }
};

export class NotAuthorisedError extends BaseError {
    constructor(message: string) {
        super(message);
        this.name = 'NotFoundError';
        this.status = code.NOT_FOUND;
    }
};

export class NotFoundError extends BaseError {
    constructor(message: string) {
        super(message);
        this.name = 'NotFoundError';
        this.status = code.NOT_FOUND;
    }
};

export class BadRequestError extends BaseError {
    constructor(message: string) {
        super(message);
        this.name = 'BadRequestError';
        this.status = code.BAD_REQUEST;
    }
};