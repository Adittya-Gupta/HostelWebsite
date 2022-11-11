import Express from 'express';
import {validateAdmin} from '../../controllers/admin/admin';
const adminRouter = Express.Router();

adminRouter.post('/login', validateAdmin);