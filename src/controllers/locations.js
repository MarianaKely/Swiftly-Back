
import { city , getCity , state , country } from "../repositories/locationsRepository.js";


export async function mainCity (req, res){

    try{

        await city (req.body)
        res.sendStatus(201)
        console.log('ok');

    } catch {

        console.log('error');
        res.status(500);

    }

}


export async function getCityList (req,res){

    try{

        const analysis = await getCity ()
        res.send(analysis.rows);
        console.log('ok');

    }catch {

        console.log('error');
        res.status(500);

    }

}



export async function mainState (req, res){

    try{

        await state (req.body)
        res.sendStatus(201);
        console.log('ok');

    }catch{

        console.log('error');
        res.status(500);

    }

}


export async function mainCountry (req, res){

    try{

        await country (req.body)
        res.sendStatus(201);
        console.log('ok');

    }catch{

        console.log('error');
        res.status(500);

    }

}



