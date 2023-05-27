
import { photo , accommodation , hotel } from "../repositories/accommodationRepository.js";


export async function mainHotel (req,res){

    try{

        const analysis = await hotel ()
        res.status(200).send(analysis.rows);
        console.log('ok');

    }catch{

        console.log('error');
        res.status(500);

    }

}



export async function mainAccommodation(req,res){


    const {param} = req.params

    try{

        const analysis = await accommodation (param)
        res.status(200).send(analysis.rows)
        console.log('ok');

    } catch {

        console.log('error');
        res.status(500);

    }

}



export async function mainPhotos (req,res){


    const {param} = req.params

    try{

        const analysis = await photo (param)
        res.status(200).send(analysis.rows)
        console.log('ok');

    } catch {

        console.log('error');
        res.status(500);

    }

}