//CONTROLADOR DE PRESTACION

const models = require('../database/models/index');
const errors = require('../const/errors');

module.exports = {
    listar: async (req,res) =>{
        try {                        
            const prestaciones = await models.prestacion.findAll();
            res.json({
                success: true,
                message: "Listar información de todos",
                data:{
                    prestaciones: prestaciones
                }
            })
        } catch (error) {
            res.json({
                success: false,                
                data:{
                    error: error.name,
                    message: error.message
                }
            })
        }               
    },
    crear: async (req,res) =>{
        try {
            
            const prestacion = await models.prestacion.create({
                nombre: req.body.nombre,
                codigo: req.body.codigo,
            })

            res.json({
                success: true,
                message: "Crear Prestacion - Nombres: "+req.body.nombre+" Codigo: "+req.body.codigo,
                data:{
                    id: prestacion.id
                }
            })
        } catch (error) {
            console.log(error);
            res.json({
                success: false,                
                data:{
                    error: error.name,
                    message: error.message
                }
            })
        }             
    },
    listarInfo: async (req,res, next) =>{
        try {
            const prestacion = await models.prestacion.findOne({
                where:{
                    id: req.params.idPrestacion
                }
            })
            
            if(!prestacion) return next(errors.PrestacionInexistente);

            res.json({                
                success: true,                
                data:{
                    prestacion: prestacion
                }
            })
        } catch (error) {
            console.log(error);
            res.json({
                success: false,                
                data:{
                    error: error.name,
                    message: error.message
                }
            })
        }
    },    
}