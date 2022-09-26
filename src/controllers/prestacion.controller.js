//CONTROLADOR DE PRESTACION

const models = require('../database/models/index');

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
            console.log(error);
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
                message: "Error al crear Prestacion",
                data:{
                    error: error//.name
                }
            })
        }             
    },
    listarInfo: async (req,res) =>{
        try {
            const prestacion = await models.prestacion.findOne({
                where:{
                    id: req.params.idPrestacion
                }
            })
            res.json({                
                success: true,
                message: "Listar información de 1 - ID:" +req.params.idPrestacion,
                data:{
                    prestacion: prestacion
                }
            })
        } catch (error) {
            console.log(error);
            res.json({
                success: false,
                message: "Error al buscar Prestacion",
                data:{
                    error: error.name
                }
            })
        }
    },    
}