
import Joi from "joi";

const loginSchema = Joi.object({

  email: Joi.string().email().required().messages({

    "any.required": 'Obrigatório preencher "email".',
    "string.empty": '"email" não pode estar vazio.',
    "string.email": 'por favor preencha "email" corretamente.',

  }),

  password: Joi.string().required().messages({

    "any.required": 'Obrigatório preencher "password".',
    "string.empty": '"password" não pode estar vazio.',

  }),

});

export default loginSchema;