
import { db } from "../config/database.js";


 export async function findPost (id) {

    return db.query(`SELECT * FROM post WHERE id = $1;`, [id]);

}


export async function addPost(id, photo, subtitle) {

    db.query(`INSERT INTO posts ("userId", "postPicture", "postSubtitle") VALUES ($1, $2, $3);`,[id, photo, subtitle]);

}



export async function personalPosts(id) {

    return db.query(`SELECT post.id AS id, post."postPicture" AS "postPicture",
            post."postSubtitle" AS "postSubtitle",
            CAST(COUNT(likes."postId") AS integer) AS "timesLiked",
            TO_CHAR(post."createdAt", 'YYYY-MM-DD HH24:MI:SS') AS "createdAt"
            FROM post LEFT JOIN likes ON likes."postId" = post.id
            WHERE post."userId" = $1 GROUP BY post.id;`, [id]);
}



export async function likes (postId, userId) {

    return db.query(`SELECT * FROM likes WHERE "postId" = $1 AND "userId" = $2;`, [postId,userId,]);

}


export async function likeIt (postId, userId) {

    db.query(`INSERT INTO likes ("postId", "userId") VALUES ($1, $2);`, [postId,userId,]);

}