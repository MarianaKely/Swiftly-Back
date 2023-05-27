
import {Router} from "express";
import { mainPhotos , mainAccommodation , mainHotel } from "../controllers/accommodation.js";

const accommodationRouer = Router()

accommodationRouer.get("/hotels", mainHotel);
accommodationRouer.get("/hotels/:id",mainAccommodation);
accommodationRouer.get("/photos/:id",mainPhotos);


export default accommodationRouer