
import { db } from "../config/database.js";


export async function findCity (param) {

    const { name, stateId, countryId } = param

    const analysis = await db.query(`SELECT * FROM cities WHERE name = $1`, [name])

    return analysis
    
}

export async function city (analysis) {

    const { name, stateId, countryId } = analysis

    await db.query(` INSERT INTO cities (name, "stateId", "countryId") VALUES ($1, $2, $3)`, [name, stateId, countryId])
}



export async function getCity (){

    const analysis = await db.query(`

            SELECT cities.id, cities.name, states.name AS "NameOfState",states.nickname AS "NickOfState", 
            country.name AS "NameOfCountry", country.nickname AS "NickOfCountry"
            FROM cities JOIN states ON cities."stateId" = states.id 
            JOIN country ON cities."countryId" = country.id;

    `)

    return analysis

}




export async function findState (param) {

    const { name } = param

    const analysis = await db.query("SELECT * FROM states WHERE name=$1", [name]);

    return analysis
}



export async function state (param) {

    const { name, nickname } = param

    await db.query(`INSERT INTO states (name, nickname) VALUES ($1,$2);`, [name, nickname]);

}


export async function getStates (param) {

    const { name, stateId, countryId } = param

    const analysis = await db.query(`SELECT * FROM states  JOIN country on country.id = $1 WHERE states.id = $2;`, [countryId, stateId])

    return analysis

}


export async function country (param) {

    const { name, nickname } = param

    await db.query(` INSERT INTO country (name, nickname) VALUES ($1,$2)`, [name, nickname])

}

export async function findCountry (param) {

    const { name } = param

    const analysis = await db.query("SELECT * FROM country WHERE name=$1", [name]);

    return analysis

}



