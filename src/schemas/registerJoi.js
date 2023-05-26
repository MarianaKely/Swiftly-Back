
import Joi from "joi";

const registerSchema = Joi.object({

  name: Joi.string().required().messages({

    "any.required": 'Obrigatório preencher "name" .',
    "string.empty": 'por favor preencha "name"',

  }),

  email: Joi.string().email().required().messages({

    "any.required": 'Obrigatório preencher "email" .',
    "string.empty": 'por favor preencha "email"',
    "string.email": 'por favor preencha "email" corretamente.',

  }),

  userPicture: Joi.string().required().messages({

    "any.required": ' Obrigatório preencher "userPicture" ',
    "string.empty": 'por favor preencha "userPicture".',

  }),

  bio: Joi.string().required().messages({

    "any.required": 'Obrigatório preencher "bio" ',
    "string.empty": 'por favor preencha "bio".',

  }),

  password: Joi.string().required().messages({

    "any.required": 'Obrigatório preencher "password" .',
    "string.empty": 'por favor preencha "password".',

  }),

  confirmPassword: Joi.string().valid(Joi.ref("password")).required().messages({

    "any.required": 'Obrigatório preencher "confirmPassword".',
    "string.empty": ' por favor preencha "confirmPassword" ',
    "any.only": 'por favor preencha "confirmPassword" corretamente',

  }),
  
});

export default registerSchema;
