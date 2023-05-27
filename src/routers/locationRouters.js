
import { Router } from "express";
import middleware from "../middlewares/middleware.js";
import { citiesSchema , statesSchema } from "../schemas/schemasJoi.js";
import { validateFindCity , validateFindState , validateGetStates , validateFindCountry } from "../middlewares/validation.js";
import { mainCity , getCityList , mainState , mainCountry } from "../controllers/locations.js";

const locationsRouter = Router()


locationsRouter.post("/cities", middleware(citiesSchema),validateGetStates,validateFindCity, mainCity);
locationsRouter.get("/cityList", getCityList);
locationsRouter.post("/states", middleware(statesSchema), validateFindState ,mainState);
locationsRouter.post("/countries", middleware(statesSchema), validateFindCountry ,mainCountry);

export default locationsRouter;