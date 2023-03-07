const Joi = require('joi');

const schema  = Joi.object({
username: Joi.string().min(6).required(),
password: Joi.string().min(6).required()
})
const registerValidation = (data)=>{
return schema.validate(data)
}
const loginValidation = (data)=>{
    return schema.validate(data)
    }
module.exports.registerValidation = registerValidation
module.exports.loginValidation = loginValidation
