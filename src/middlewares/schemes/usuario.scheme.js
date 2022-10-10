const Joi = require('joi');

let crearUsuario= Joi.object({
    nombres: Joi.string().required(),
    apellidos: Joi.string().required(),
    email: Joi.string().email().optional(),
    telefono: Joi.string().optional(),
    password: Joi.string().required(),

});

module.exports = {
    crearUsuario
}