//CONTROLADOR DE USUARIO

const models = require('../database/models/index');
const errors = require('../const/errors');

module.exports = {
    listar: async (req,res) =>{
        try {                        
            const usuarios = await models.usuario.findAll();
            res.json({
                success: true,
                message: "Listar información de todos",
                data:{
                    usuarios: usuarios
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
            
            const usuario = await models.usuario.create({
                nombre: req.body.nombre,
                apellidos: req.body.apellidos,
                email: req.body.email,
            })

            res.json({
                success: true,
                message: "Crear Usuario - Nombres: "+req.body.nombre+" Apellidos: "+req.body.apellidos,
                data:{
                    id: usuario.id
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
            const usuario = await models.usuario.findOne({
                where:{
                    id: req.params.isUsuario
                }
            })

            if(!usuario) return next(errors.UsuarioInexistente);

            res.json({                
                success: true,
                message: "Listar información de 1 - ID:" +req.params.idUsuario,
                data:{
                    usuario: usuario
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