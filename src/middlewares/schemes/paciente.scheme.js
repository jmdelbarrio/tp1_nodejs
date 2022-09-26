const Joi = require('joi');

let crearPaciente= Joi.object({
    nombres: Joi.string().required(),
    apellidos: Joi.string().required(),
    email: Joi.string().email().optional(),
    telefono: Joi.string().optional(),

});

module.exports = {
    crearPaciente
}