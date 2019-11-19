const Joi = require('joi')

const registrationSchema = Joi.object().keys({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email({ minDomainAtoms: 2 }),
    password: Joi.string().min(5).required(),
    dayBirth: Joi.number().min(1).max(31).integer().required(),
    monthBirth: Joi.string().required(),
    yearBirth: Joi.number().integer().min(1915).max(2005).required()
})

module.exports = registrationSchema;
