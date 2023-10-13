import { ExpressJoiError } from 'express-joi-validation';
import express from 'express';
import { ContainerTypes } from './containerTypes';
import { AppError } from './error/AppError';
import logger from '../logger';

export function response(
    err: Error | ExpressJoiError | AppError | any,
    _req: express.Request,
    res: express.Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _next: express.NextFunction
): void {
    logger.error(JSON.stringify(err))
    if (err && Object.values(ContainerTypes).includes(err.type)) {
        const e: ExpressJoiError = err;
        res.status(400).json(e);
    } else if (err && err instanceof AppError) {
        const formattedError = err.getErrors();
        res.status(formattedError.statusCode).json({ error: formattedError.error });
    } else {
        if (err instanceof Error) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(500).send(err);
        }
    }
}
