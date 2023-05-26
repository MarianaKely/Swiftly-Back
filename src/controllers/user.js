
import { findLogin } from "../repositories/loginRepository.js";
import { theUser, usersAnalysis } from "../repositories/userRepository.js";
import { addFriend } from "../repositories/friendsRepository.js";
import { personalPosts , likes } from "../repositories/postRepository.js";

export async function mainProfiles (req, res) {

    const { token } = res.locals;
    const { param } = req.body;

    try {

      const theLogins = await findLogin(token);

      if (!theLogins.rowCount) 
      return res.sendStatus(401);
      console.log('not found');

      const analysis = await usersAnalysis (param);
      console.log('ok');
      return res.status(200).send(analysis.rows);

    } catch {

       console.log('error');
       return res.status(500);

    }

  }


  export async function getUser(req, res) {

    const { token } = res.locals;
    const { id } = req.params;

    try {

      const theLogins = await findLogin(token);

      if (!theLogins.rowCount) 
      return res.sendStatus(401);
      console.log('not found');

      const personalProfile = await theUser (id);
      const user = personalProfile.rows[0];
      user.isFollowed = false;
      
      const isFollowed = await addFriend (id, theLogins.rows[0].userId);

      if (isFollowed.rowCount) user.isFollowed = true;

      const profilePost = await personalPosts(id);

      const mPosts = await Promise.all( profilePost.rows.map(async (param) => {param.wasLiked = false;

          const popularity = await likes (param.id, theLogins.rows[0].userId);

          if (popularity.rowCount) param.wasLiked = true;
          return param; })

      );
      
      console.log('ok');
      return res.status(200).send({ ...user, mPosts });

    } catch {

        console.log('error');
        return res.status(500);

    }

  }