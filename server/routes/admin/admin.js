import Express from 'express';
import {validateAdmin} from '../../controllers/admin/adminValidate';
import { getEquipment, editEquipment } from '../../controllers/admin/adminEquipment';
const adminRouter = Express.Router();

adminRouter.post('/login', validateAdmin);
adminRouter.get('/equipment', getEquipment);
adminRouter.put('/equipment',editEquipment);