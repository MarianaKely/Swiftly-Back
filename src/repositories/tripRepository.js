 import { db } from "../config/database.js";


 export async function flight (param, res) {

    const { DayOut, DayBack, price } = param

    const analysis = await db.query(`
    INSERT INTO flights ("CityFromId", "CityToId", "companyId",
    "DayOut", "DayBack", "price" ) VALUES ($1, $2, $3, $4, $5, $6)`,
    [res.locals.myCities[0].id, res.locals.myCities[1].id, res.locals.myAccommodation.id, DayOut, DayBack, price])

    return analysis


}


async function erased(){

    await db.query(`DELETE FROM flights WHERE "DayOut" < NOW()`)

}


export async function findFlights () {
 
    const analysis = await db.query(`
    SELECT  flights.id, origin.name AS "Origin", destiny.name AS "Destiny",
    companies.name AS "company", flights."DayOut",  flights."DayBack", flights.price
    FROM flights JOIN cities AS origin ON flights."CityFromId" = origin.id
    JOIN cities AS destiny ON flights."CityToId" = destiny.id
    JOIN companies ON flights."companyId" = companies.id;
    `)

    setInterval(()=>{erased() }, 60000)

    return analysis
}


export async function company (param) {

    const { name } = param

    const analysis = await db.query(`INSERT INTO companies (name) VALUES ($1)`, [name])

    return analysis
}
