import { Request, Response, Router } from 'express';
import userService from './user.service';
import { Prisma, User } from '@prisma/client';
import { ValidatedRequest, createValidator } from 'express-joi-validation';
import { userFilterSchema, userFilterValidator, userInputSchema, userInputValidator } from './user.validator';
import { wrapRequestHandler } from '../common/wrapRequestHandler';
import logger from '../logger';

const userRouter = Router();
const validator = createValidator({ passError: true });

/**
 * GET /api/users
 * @summary Get Users
 * @param {string} search.query - search
 * @param {number} take.query - take
 * @param {number} skip.query - skip
 * @tags users
 * @return {array<object>} 200 - success response - application/json
 */
userRouter.get('/',
    validator.query(userFilterValidator),
    wrapRequestHandler(async (req: ValidatedRequest<userFilterSchema>, res: Response) => {
        const { search, take, skip } = req.query
        let conditions: {
            skip?: number;
            take?: number;
            cursor?: Prisma.UserWhereUniqueInput;
            where?: Prisma.UserWhereInput;
            orderBy?: Prisma.UserOrderByWithRelationInput;
        } = {};
        if (search) {
            conditions.where = {
                OR: [
                    {
                        name: { contains: search.toString() },
                    },
                    {
                        email: { contains: search.toString() },
                    }
                ]
            };
        }
        if (take) conditions.take = Number(take);
        if (skip) conditions.skip = Number(skip);

        const users = await userService.getUsers(conditions);
        res.send(users);
    }));

/**
 * POST /api/users
 * @summary Create user
 * @param {object} request.body.required - user info
 * @tags users
 * @return {object} 200 - user response
 */
userRouter.post('/', validator.body(userInputValidator), wrapRequestHandler(async (req: ValidatedRequest<userInputSchema>, res: Response) => {
    const users = await userService.createUser(req.body)
    res.send(users);
}));

/**
 * GET /api/users/{id}
 * @summary Get a user by id
 * @param {string} id.path - user id
 * @tags users
 * @return {object} 200 - user response
 */
userRouter.get('/:id', wrapRequestHandler(async (req: Request, res: Response) => {
    const user = await userService.findOneUser(req.params.id)
    res.send(user);
}));

/**
 * PUT /api/users/{id}
 * @summary Update user
 * @tags users
 * @param {string} id.path - user id
 * @param {object} request.body.required - songs info
 * @return {object} 200 - success response - application/json
 */
userRouter.put('/:id', wrapRequestHandler(async (req: Request, res: Response) => {
    const updatedUser = await userService.updateUser(req.params.id, req.body)
    res.send(updatedUser);
}));


/**
 * DELETE /api/users/{id}
 * @summary Delete user
 * @tags users
 * @param {string} id.path - user id
 * @return {object} 200 - success response - application/json
 */
userRouter.delete('/:id', wrapRequestHandler(async (req: Request, res: Response) => {
    const users = await userService.deleteOne(req.params.id)
    res.send(users);
}));

export default userRouter;