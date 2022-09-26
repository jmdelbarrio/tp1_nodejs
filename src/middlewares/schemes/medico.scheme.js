const Joi = require('joi');

let crearMedico = Joi.object({
    nombres: Joi.string().required(),
    apellidos: Joi.string().required(),
    email: Joi.string().email().optional(),
    telefono: Joi.string().optional(),
    prestacionId: Joi.number().required(),

});

module.exports = {
    crearMedico
}