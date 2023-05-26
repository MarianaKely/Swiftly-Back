
import Joi from "joi";

const postSchema = Joi.object({

  picture: Joi.string().required().messages({

    "any.required": 'Obrigatório preencher "foto".',
    "string.empty": 'por favor preencha "foto" por favor preencha.',

  }),

  description: Joi.string().required().messages({

    "any.required": 'Obrigatório preencher "descrição"',
    "string.empty": 'por favor preencha "descrição" por favor preencha.',

  }),
  
});

export default postSchema;