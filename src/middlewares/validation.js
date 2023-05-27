
import { findCity , findState , getStates , findCountry } from "../repositories/locationsRepository.js";


export async function validateFindCity (req, res, next){

    try{
        const analysis = await findCity (req.body)

        if(analysis.rowCount !== 0 ) 
        return res.sendStatus(409);
        console.log('invalid ');

        next()

    } catch(err){

        if(err.code === '23505' && err.constraint === 'cities_name_key') 
        return res.sendStatus(409);
        console.log('invalid ');
        console.log('error');
        res.status(500)
    }
}


export async function validateFindState(req, res, next){

    try{

        const analysis = await findState (req.body)

        if(analysis.rowCount !== 0) 
        return res.sendStatus(409);
        console.log('invalid ');

        next()   

    } catch(err){

        if(err.code === '23505' && err.constraint === 'states_name_key')
        return res.sendStatus(409);
        console.log('invalid ');
        console.log('error');
        res.status(500)
    }

}


export async function validateFindCountry (req, res, next){

    try{

        const analysis = await findCountry (req.body)

        if(analysis.rowCount !== 0) 
        return res.sendStatus(409);
        console.log('invalid ');

        next()   

    } catch(err){

        if(err.code === '23505' && err.constraint === 'states_name_key')
        return res.sendStatus(409);
        console.log('invalid ');
        console.log('error');
        res.status(500);
    }

}


export async function validateGetStates(req, res, next){

    try{

        const analysis = await getStates (req.body)

        if(!analysis.rows[0]) 
        return res.sendStatus(409);
        console.log('not found ');

        next()

    } catch {

        console.log('error');
        res.status(500)
    }
}

export async function validateAirplanesTrip(req, res, next) {

    const { cityOne, cityTwo, company, DayOut, DayBack, price } = req.body

    try {

        const myCities = await db.query(`SELECT * FROM cities WHERE name=$1 OR name=$2
         ORDER BY CASE WHEN name=$1 THEN 0 WHEN name=$2 THEN 1 END;`, [cityOne, cityTwo])

        if (myCities.rowCount !== 2) {

            if (cityOne === cityTwo) 
            return res.sendStatus(409);
            console.log('not found ');
            console.log('internal error');
            return res.sendStatus(404);
            
        }

        const myAccommodation = await db.query(`SELECT * FROM companies WHERE name=$1`, [company])

        if(myAccommodation.rowCount === 0) 
          
          return res.sendStatus(404);
          console.log('internal error');

        if(DayOut.split(" ")[1] === DayBack.split(" ")[1]) 
        return res.sendStatus(404);
          console.log('internal error');

        res.locals.myCities = myCities.rows
        res.locals.myAccommodation = myAccommodation.rows[0]

        next()

    } catch {

        console.log('error');
        res.status(500);

    }


}


export async function validateFindCompany(req, res, next) {

    const { name } = req.body

    try {

        const analysis = await db.query(`SELECT * FROM companies WHERE name=$1`, [name])

        if (analysis.rowCount !== 0) 
        return res.sendStatus(409);
        console.log('not found ');

        next()

    } catch {

        console.log('error');
        res.status(500);

    }
}

