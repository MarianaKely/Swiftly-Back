
import { company , flight , findFlights } from "../repositories/tripRepository.js";


export async function mainFlight(req, res){

    try{

        await flight (req.body, res)
        res.sendStatus(201)
        console.log('ok');

    }catch{

        console.log('error');
        res.status(500);

    }
    
}


export async function mainCompany(req, res){

    try{

        await company (req.body, res)
        res.sendStatus(201)
        console.log('ok');

    }catch{

        console.log('error');
        res.status(500);

    }
    
}


export async function getFlightsList (req, res){

    try{

        const analysis = await findFlights (res)
        res.status(200).send(analysis.rows)
        console.log('ok');

    } catch {

        console.log('error');
        res.status(500);

    }

}
