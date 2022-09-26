//CONTROLADOR DE PACIENTE

const models = require('../database/models/index');
const errors = require('../const/errors');

module.exports = {
    listar: async (req,res) =>{
        try {                        
            const pacientes = await models.paciente.findAll();
            res.json({
                success: true,
                message: "Listar información de todos",
                data:{
                    pacientes: pacientes
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
            
            const paciente = await models.paciente.create({
                nombre: req.body.nombre,
                apellidos: req.body.apellidos,
                email: req.body.email,
            })

            res.json({
                success: true,
                message: "Crear Paciente - Nombres: "+req.body.nombre+" Apellidos: "+req.body.apellidos,
                data:{
                    id: paciente.id
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
            const paciente = await models.paciente.findOne({
                where:{
                    id: req.params.idPaciente
                }
            })

            if(!paciente) return next(errors.PacienteInexistente);

            res.json({                
                success: true,
                message: "Listar información de 1 - ID:" +req.params.idPaciente,
                data:{
                    paciente: paciente
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