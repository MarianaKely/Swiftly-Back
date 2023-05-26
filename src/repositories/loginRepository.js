
import { db } from "../config/database.js";


export async function findLogin(token) {

    return db.query(`SELECT * FROM logins WHERE token = $1;`, [token]);

  }


  

export async function logins (id, token) {

  db.query(`INSERT INTO logins ("userId", token) VALUES ($1, $2);`, [ id, token,]);

}

