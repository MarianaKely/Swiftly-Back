
import joiBase from "joi"
import joiDate from "@joi/date"

const joi = joiBase.extend(joiDate)

export const statesSchema = joi.object({

        name: joi.string().required(),
        nickname: joi.string().required()

})

export const citiesSchema = joi.object({

    name:joi.string().required(),
    stateId: joi.number().integer().required(),
    countryId: joi.number().integer().required()

})

export const companiesSchema = joi.object({

    name:joi.string().required()

})

export const flightsSchema = joi.object({

    cityOne: joi.string().required(),
    cityTwo: joi.string().required(),
    company: joi.string().required(),
    DayOut:joi.date().format('YYYY-MM-DD HH:mm').required(),
    DayBack:joi.date().format('YYYY-MM-DD HH:mm').required(),
    price:joi.number().required()

})