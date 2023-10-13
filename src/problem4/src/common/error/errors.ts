import { StatusCodes } from "../httpStatusCode";

enum ERROR_CODE {
    EMAIL_ALREADY_EXISTS = 'EMAIL_ALREADY_EXISTS',
    SEND_MAIL_ERROR = 'SEND_MAIL_ERROR',
    USER_OR_CODE_INVALID = 'USER_OR_CODE_INVALID',
    USER_NOT_FOUND = 'USER_NOT_FOUND',
    CODE_EXPIRED = 'CODE_EXPIRED',
    LOGIN_FAILED = 'LOGIN_FAILED',
    INVALID_FORGOT_PASSWORD_CODE = 'INVALID_FORGOT_PASSWORD_CODE',
    INVALID_REFRESH_TOKEN = 'INVALID_REFRESH_TOKEN',
    UNAUTHORIZED = 'UNAUTHORIZED',
    PASSWORD_EXPIRED = 'PASSWORD_EXPIRED'
}

const ErrorList = {

    [ERROR_CODE.USER_OR_CODE_INVALID]: {
        statusCode: StatusCodes.BAD_REQUEST
    },
    [ERROR_CODE.EMAIL_ALREADY_EXISTS]: {
        statusCode: StatusCodes.BAD_REQUEST
    },
    [ERROR_CODE.SEND_MAIL_ERROR]: {
        statusCode: StatusCodes.INTERNAL_SERVER_ERROR
    },
    [ERROR_CODE.USER_NOT_FOUND]: {
        statusCode: StatusCodes.BAD_REQUEST
    },
    [ERROR_CODE.CODE_EXPIRED]: {
        statusCode: StatusCodes.BAD_REQUEST
    },
    [ERROR_CODE.LOGIN_FAILED]: {
        statusCode: StatusCodes.BAD_REQUEST
    },
    [ERROR_CODE.INVALID_FORGOT_PASSWORD_CODE]: {
        statusCode: StatusCodes.BAD_REQUEST
    },
    [ERROR_CODE.INVALID_REFRESH_TOKEN]: {
        statusCode: StatusCodes.BAD_REQUEST
    },
    [ERROR_CODE.UNAUTHORIZED]: {
        statusCode: StatusCodes.UNAUTHORIZED
    },
    [ERROR_CODE.PASSWORD_EXPIRED]: {
        statusCode: StatusCodes.BAD_REQUEST
    }
};

export { ERROR_CODE, ErrorList };
