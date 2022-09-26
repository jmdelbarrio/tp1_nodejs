//CONTROLADOR DE MEDICO

const models = require('../database/models/index');

module.exports = {
    listar: async (req,res) =>{
        try {                        
            const medicos = await models.medico.findAll();
            res.json({
                success: true,
                message: "Listar información de todos",
                data:{
                    medicos: medicos
                }
            })
        } catch (error) {
            console.log(error);
        }            
    },
    crear: async (req,res) =>{
        try {
            
            const medico = await models.medico.create({
                nombres: req.body.nombres,
                apellido: req.body.apellido,
                prestacion: req.body.prestacion,
                
            })

            res.json({
                success: true,
                message: "Crear Medico - Nombres: "+req.body.nombres+" Apellido: "+req.body.apellido+" ID Prestacion: "+req.body.prestacion,
                data:{
                    id: medico.id
                }
            })
        } catch (error) {
            console.log(error);
            res.json({
                success: false,
                message: "Error al crear Medico",
                data:{
                    error: error//.name
                }
            })
        }        
    },
    listarInfo: async (req,res) =>{
        try {
            const medico = await models.medico.findOne({
                where:{
                    id: req.params.idMedico
                }
            })
            res.json({                
                success: true,
                message: "Listar información de 1 - ID:" +req.params.idMedico,
                data:{
                    medico: medico
                }
            })
        } catch (error) {
            console.log(error);
            res.json({
                success: false,
                message: "Error al buscar Medico",
                data:{
                    error: error.name
                }
            })
        }
    },    
}