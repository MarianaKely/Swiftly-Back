
import { allFriends , myFriends , nwFriend } from "../repositories/friendsRepository.js";
import { findLogin } from "../repositories/loginRepository.js";
import { theUser } from "../repositories/userRepository.js";


export async function friendsList(_req, res) {

    const { token } = res.locals;

    try {

      const theLogins = await findLogin(token);

      if (!theLogins.rowCount) 
      return res.sendStatus(401);
      console.log('not found');

      const userId = theLogins.rows[0].userId;
      const findFriends = await allFriends(userId);
      const Frds = findFriends.rows;

      console.log('ok');
      return res.status(200).send(Frds);
      

    } catch {

        console.log('error');
        return res.status(500);

    }

}



export async function personalFriends (_req, res) {

    const { token } = res.locals;

    try {

      const theLogins = await findLogin(token);
      if (!theLogins.rowCount) 
      return res.sendStatus(401);
      console.log('not found');


      const userId = theLogins.rows[0].userId;
      const findFriends = await myFriends(userId);
      const Frds = findFriends.rows;

      console.log('ok');
      return res.status(200).send(Frds);

    } catch (err) {

        console.log('error');
        return res.status(500);

    }

}

export async function getFriend(req, res) {

    const { token } = res.locals;
    const { id } = req.body;

    try {

      const theLogins = await findLogin(token);
      
      if (!theLogins.rowCount) 
      return res.sendStatus(401);
      console.log('not found');

      const userId = theLogins.rows[0].userId;
      const personalProfile = await theUser(id);

      if (!personalProfile.rowCount)
      return res.sendStatus(401);
      console.log('internal error');

      await nwFriend(id, userId);
      console.log('ok');
      return res.sendStatus(200);

    } catch {

        console.log('error');
        return res.status(500);

    }

  }