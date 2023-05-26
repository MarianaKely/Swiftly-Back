
import { Router } from "express";
import authoToken from "../middlewares/token.js";
import { friendsList , personalFriends , getFriend } from "../controllers/friends.js";


const friendsRouter = Router();

friendsRouter.get("/friendslist", authoToken, friendsList);
friendsRouter.get("/personalfriends", authoToken, personalFriends);
friendsRouter.post("/getfriend", authoToken, getFriend);

export default friendsRouter;