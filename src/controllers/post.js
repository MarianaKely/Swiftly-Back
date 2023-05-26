
import { findLogin } from "../repositories/loginRepository.js";
import { theUser } from "../repositories/userRepository.js";
import { personalPosts , addPost , findPost , likeIt } from "../repositories/postRepository.js";


export async function mainPostPages(_req, res) {

    const { token } = res.locals;

    try {

      const theLogins = await findLogin(token);

      if (!theLogins.rowCount) return res.sendStatus(401);

      const userId = theLogins.rows[0].userId;
      const personalProfile = await theUser(userId);
      const user = personalProfile.rows[0];
      const profilePost = await personalPosts(userId);
      const mPosts = profilePost.rows;

      console.log('ok');
      return res.status(200).send({ ...user, mPosts });

    } catch {

      console.log('error');
      return res.status(500);


    }

  }



  export async function addOnePost (req, res) {

    const { token } = res.locals;
    const { picture, subtitle } = req.body;

    try {

      const theLogins = await findLogin(token);

      if (!theLogins.rowCount) 
      return res.sendStatus(401);
      console.log('not found');

      const userId = theLogins.rows[0].userId;

      await addPost (userId, picture, subtitle);

      console.log('ok');
      return res.sendStatus(201);

    } catch {

       console.log('error');
       return res.status(500);
  

    }

  }


  export async function likesOnPost (req, res) {

    const { token } = res.locals;
    const { id } = req.body;

    try {

      const theLogins = await findLogin(token);

      if (!theLogins.rowCount) return res.sendStatus(401);

      const userId = theLogins.rows[0].userId;
      const profilePost = await findPost(id);

      if (!profilePost.rowCount) 
      return res.sendStatus(401);
      console.log('internal error');


      await likeIt (id, userId);

      console.log('ok');
      return res.sendStatus(200);

    } catch (err) {

      console.log('error');
      return res.status(500);

    }

  }
  