
import { Router } from "express";
import authoToken from "../middlewares/token.js";
import middleware from "../middlewares/middleware.js";
import postSchema from "../schemas/postJoi.js";
import { mainPostPages , addOnePost , likesOnPost } from "../controllers/post.js";

const postRouter = Router();

postRouter.get("/postpage", authoToken, mainPostPages);
postRouter.post("/addpost", middleware(postSchema), authoToken, addOnePost);
postRouter.post("/likes", authoToken, likesOnPost);

export default postRouter;