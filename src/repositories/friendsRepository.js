
import { db } from "../config/database.js";


export async function allFriends (id) {

    return db.query( `SELECT followers."friendTo" AS id, users."userPicture" AS "userPicture", users.name AS "name", users.bio AS "bio"
    FROM followers JOIN users ON followers."friendTo" = users.id WHERE followers."userId" = $1;`, [id]);

}


export async function myFriends (id) {

    return db.query(`SELECT followers."userId" AS id, users."userPicture" AS "userPicture", users.name AS "name", users.bio AS "bio"
    FROM followers JOIN users ON followers."userId" = users.id WHERE followers."friendTo" = $1;`,[id]);

}


export async function addFriend(friends, searchFriends) {

    return db.query( `SELECT * FROM followers WHERE "userId" = $1 AND "friendTo" = $2;`, [friends, searchFriends]);

}


export async function nwFriend (friendsId, userId) {

    db.query(`INSERT INTO followers ("userId", "friendTo") VALUES ($1, $2);`, [friendsId,userId,]);

}