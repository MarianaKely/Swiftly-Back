
import { db } from "../config/database.js"


export async function hotel () {

    const analysis = await db.query(`
    SELECT hotels.id, hotels.name AS "Name", hotels.description AS "Description",
    photos.url, hotels.price FROM hotels JOIN photos ON photos.id = hotels."ThePhoto";
    `)

    return analysis
}


export async function photo (param) {

    const analysis = await db.query(`SELECT hotels.id, photos.url FROM hotels
     JOIN photos ON photos."hotelId" = hotels.id WHERE hotels.id = $1;`, [param])

    return analysis

}


export async function accommodation (param) {

    const analysis = await db.query(`SELECT commodities.id, commodities."hotelId", commodity.name 
    FROM commodities JOIN commodity ON commodity.id = commodities."commodityId"
    WHERE commodities."hotelId" = $1;`, [param])

    return analysis

}