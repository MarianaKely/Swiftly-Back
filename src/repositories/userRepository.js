
import { db } from "../config/database.js";


export async function usersEmails (email) {

    return db.query(`SELECT * FROM users WHERE email = $1;`, [email]);

}


export async function theUser (id) {

    return db.query( `SELECT id, name, bio, "userPicture" FROM users WHERE id = $1;`, [id]);

}


export async function usersProfile (user, password) {

    db.query( `INSERT INTO users (name, email, "userPicture", bio, password) VALUES ($1, $2, $3, $4, $5);`, [user.name, user.email, user.userPicture, user.bio, password]);
}



export async function usersAnalysis(param) {

    let caculate = "";
    const results = [];

    if (param) {

        caculate = "WHERE name ILIKE $1";
        results.push(`%${param}%`);

    }

    return db.query(`SELECT id, name, "userPicture", bio FROM users ${caculate};`, results);

  }