import { Request, Response, Router } from 'express';
import user from './user/user.controller';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript Express!');
});

router.use('/users', user);

export { router };
