import Express from 'express';
import {validateAdmin} from '../../controllers/admin/adminValidate.js';
import { getEquipment, editEquipment } from '../../controllers/admin/adminEquipment.js';
import { getComplaints, editComplaints } from '../../controllers/admin/adminComplaint.js';
const adminRouter = Express.Router();

adminRouter.post('/login', validateAdmin);
adminRouter.get('/equipment', getEquipment);
adminRouter.put('/equipment',editEquipment);
adminRouter.get('/complaints', getComplaints);
adminRouter.put('/complaints', editComplaints);
export default adminRouter;