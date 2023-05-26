
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import registerRouter from "./routers/registerRouter.js";
import friendsRouter from "./routers/friendsRouter.js";
import postRouter from "./routers/postRouter.js";
import userRouter from "./routers/userRouter.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use(registerRouter);
app.use(friendsRouter);
app.use(postRouter);
app.use(userRouter);




const PORT = process.env.PORT || 5000;

app.listen( PORT, console.log(`HI, IT'S ME!!!`));