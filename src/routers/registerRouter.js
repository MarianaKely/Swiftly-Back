
import { Router } from "express";
import { register } from "../controllers/register.js";
import { login } from "../controllers/login.js";
import registerSchema from "../schemas/registerJoi.js";
import loginSchema from "../schemas/loginJoi.js";
import middleware from "../middlewares/middleware.js";


const registerRouter = Router();

registerRouter.post("/signup", middleware(registerSchema), register);
registerRouter.post("/signin", middleware(loginSchema), login);

export default registerRouter;