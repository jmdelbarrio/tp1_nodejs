const Joi = require('joi');

let crearPrestacion = Joi.object({
    nombre: Joi.string().required(),
    codigo: Joi.string().required(),    

});

module.exports = {
    crearPrestacion
}