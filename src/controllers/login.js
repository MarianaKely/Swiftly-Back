
import { v4 as uuid } from "uuid";
import { usersEmails , usersProfile } from "../repositories/userRepository.js";

export async function login (req, res) {

    const { email, password } = req.body;

    try {

      const analysis = await usersEmails (email);
      const user = analysis.rows[0];

      if (!analysis.rowCount || !bcrypt.compareSync(password, user.password))
      return res.sendStatus(401);
     console.log('not found');

      const token = uuid();

      await usersProfile (user.id, token);
      res.status(200).send({ token });
      console.log('your token');

    } catch {

        console.log('error');
        return res.status(500)

    }

  }
  