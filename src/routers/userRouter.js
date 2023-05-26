
import { Router } from "express";
import { mainProfiles , getUser } from "../controllers/user.js";
import authoToken from "../middlewares/token.js";

const userRouter = Router();

userRouter.post("/user", authoToken, mainProfiles);
userRouter.get("/user/:id", authoToken, getUser);

export default userRouter;