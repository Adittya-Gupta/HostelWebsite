import Express from "express";
import { validateUser } from "../../controllers/users/users.js";
import { postComplaint } from "../../controllers/users/userComplaint.js";
import {
	getEquipment,
	issueEquipment,
} from "../../controllers/users/userEquipment.js";
const userRouter = Express.Router();

userRouter.post("/login", validateUser);

userRouter.post("/complaint", postComplaint);

userRouter.get("/inventory", getEquipment);
userRouter.post("/inventory", issueEquipment);


export default userRouter;
