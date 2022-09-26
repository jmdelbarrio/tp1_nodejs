//CONTROLADOR DE MEDICO

const models = require('../database/models/index');
const errors = require('../const/errors');

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
            
            const medico = await models.medico.create({
                nombres: req.body.nombres,
                apellido: req.body.apellido,
                prestacionId: req.body.prestacionId,
                
            })

            res.json({
                success: true,
                message: "Crear Medico - Nombres: "+req.body.nombres+" Apellido: "+req.body.apellido+" ID Prestacion: "+req.body.prestacionId,
                data:{
                    id: medico.id
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
    listarInfo: async (req,res,next) =>{
        try {
            const medico = await models.medico.findOne({
                where:{
                    id: req.params.idMedico
                }
            })

            if(!medico) return next(errors.MedicoInexistente);

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
                data:{
                    error: error.name,
                    message: error.message
                }
            })
        }
    },    
}