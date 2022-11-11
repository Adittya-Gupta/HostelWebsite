import Express from "express";
import { validateUser } from "../../controllers/users/users";
import { postComplaint } from "../../controllers/users/userComplaint";
import {
	getEquipment,
	issueEquipment,
} from "../../controllers/users/userEquipment";
const userRouter = Express.Router();

userRouter.post("/login", validateUser);

userRouter.post("/complaint", postComplaint);

userRouter.get("/inventory", getEquipment);
userRouter.post("/inventory", issueEquipment);
