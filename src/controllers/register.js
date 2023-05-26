
import bcrypt from "bcrypt";
import { usersEmails , usersProfile } from "../repositories/userRepository.js";


export async function register (req, res) {

    const { email, password } = req.body;
    const personalPass = bcrypt.hashSync(password, 25);

    try {

      const analysis = await usersEmails(email);

      if (analysis.rowCount)
      return res.sendStatus(409);
      console.log('invalid email');

      await usersProfile(req.body, personalPass);
      console.log('ok');
      return res.sendStatus(201);
  

    } catch {

      console.log('error');
      return res.status(500)

    }

}
  