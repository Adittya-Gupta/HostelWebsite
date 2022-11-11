import Express from 'express';
import {validateUser} from '../../controllers/users/users';
const userRouter = Express.Router();

userRouter.post('/login', validateUser);