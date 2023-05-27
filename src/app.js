
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import locationsRouter from "./routers/locationRouters.js";
import tripRouter from "./routers/tripRouters.js";
import accommodationRouer from "./routers/accomodationsRouters.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use(locationsRouter);
app.use(accommodationRouer);
app.use(tripRouter);




const PORT = process.env.PORT || 5000;

app.listen( PORT, console.log(`HI, IT'S ME!!!`));