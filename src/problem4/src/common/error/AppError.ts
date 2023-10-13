import logger from '../../logger';
import { ErrorList, ERROR_CODE } from './errors';

export class AppError extends Error {
    public errorCode: ERROR_CODE;
    message: string;
    meta: any;
    constructor(errorCode: ERROR_CODE, message = '', meta: any = {}) {
        super(errorCode);
        this.errorCode = errorCode;
        this.name = AppError.name;
        this.message = message;
        this.meta = meta;
        this.log();
    }

    log() {
        logger.error(
            `Error code: ${this.errorCode} - Message: ${this.message} - Meta: `,
            typeof this.meta == 'string' ? { meta: this.meta } : this.meta
        );
    }

    getErrors() {
        const error = ErrorList[this.errorCode];
        return {
            error: {
                errorCode: this.errorCode,
                message: this.message
            },
            statusCode: error.statusCode
        };
    }
}
