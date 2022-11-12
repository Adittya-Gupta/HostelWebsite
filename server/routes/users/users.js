import Express from "express";
import { validateUser } from "../../controllers/users/users.js";
import {
	getComplaints,
	postComplaint,
} from "../../controllers/users/userComplaint.js";
import {
	getEquipment,
	issueEquipment,
} from "../../controllers/users/userEquipment.js";
const userRouter = Express.Router();

userRouter.post("/login", validateUser);
// userRouter.post("/signup", userSignup);
userRouter.get("/complaint", getComplaints);
userRouter.post("/complaint", postComplaint);

userRouter.get("/inventory", getEquipment);
userRouter.post("/inventory", issueEquipment);

export default userRouter;
