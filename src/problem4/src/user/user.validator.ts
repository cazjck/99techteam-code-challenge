import { Request, Response } from 'express';
import { ContainerTypes, ValidatedRequestSchema } from 'express-joi-validation';
import Joi from 'joi';


export interface userFilterSchema extends ValidatedRequestSchema {
    [ContainerTypes.Query]: {
        search?: string,
        take?: number,
        skip?: number,
    };
}

export const userFilterValidator = Joi.object({
    search: Joi.string().optional(),
    take: Joi.number().optional(),
    skip: Joi.number().optional()
});


export interface userInputSchema extends ValidatedRequestSchema {
    [ContainerTypes.Body]: {
        email: string,
        name: string,
    };
}

export const userInputValidator = Joi.object({
    email: Joi.string().required(),
    name: Joi.string().required(),
})