import Express from 'express';
import {validateAdmin} from '../../controllers/admin/adminValidate.js';
import { getEquipment, editEquipment } from '../../controllers/admin/adminEquipment.js';
const adminRouter = Express.Router();

adminRouter.post('/login', validateAdmin);
adminRouter.get('/equipment', getEquipment);
adminRouter.put('/equipment',editEquipment);

export default adminRouter;