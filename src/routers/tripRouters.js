

import { Router } from "express";
import middleware from "../middlewares/middleware.js";
import { companiesSchema , flightsSchema } from "../schemas/schemasJoi.js";
import { validateAirplanesTrip , validateFindCompany } from "../middlewares/validation.js";
import { mainFlight ,mainCompany , getFlightsList } from "../controllers/trip.js";


const tripRouter = Router()

tripRouter.post("/companies", middleware(companiesSchema), validateFindCompany, mainCompany );
tripRouter.post("/flights", middleware(flightsSchema), validateAirplanesTrip ,mainFlight);
tripRouter.get("/flights", getFlightsList);


export default tripRouter