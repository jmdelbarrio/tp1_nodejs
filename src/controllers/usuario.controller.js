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
                password: req.body.password,
            })
            await user.save();
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
    
    subirArchivo: async (req, res, next) => {
        try {           
            let usuarioId = res.locals.usuario.id;//req.body.usuarioId;
            //verifico si existe el usuario
            const usuario = await models.usuario.findOne({
                where: {
                    id: usuarioId
                }
            })
            if (!usuario) return next(errors.UsuarioInexistente)
            //Agrego validacion para verificar que el parametro usuarioId corresponda con el usuario que obtuvo el token
            //if(usuarioId !== usuario.id) return next(errors.UsuarioErroneo);


            // busco el archivo del usuario
            const ar = await models.archivo_usuario.findOne({
                where: {
                    usuarioId: usuarioId,
                    nombre: req.body.nombre
                }
            })
            if (!ar) { // si el archivo no existe, lo creo

                const archivo = await models.archivo_usuario.create({
                    nombre: req.body.nombre, //nombre para identificar el archivo por si un usuario tiene varios archivos
                    file: req.file ? req.file.filename : null, //en el campo file se guarda el nombre del archivo
                    original_name: req.file ? req.file.originalname : null, //en el campo original_name se guarda el nombre original del archivo
                    usuarioId: req.body.usuarioId
                })

            }


            res.json({
                success: true,
                data: {
                    message: "archivo cargado"
                }
            })

        } catch (err) {
            return next(err)
        }
    },

    descargarArchivo: async (req, res, next) => {
        try {

            // verifico si existe el usuario
            const usuario = await models.usuario.findOne({
                where: {
                    id: req.body.usuarioId
                }
            })
            if (!usuario) return next(errors.UsuarioInexistente)

            // verifico si existe el archivo
            const archivo = await models.archivo_usuario.findOne({
                where: {
                    usuarioId: req.body.usuarioId,
                    nombre: req.body.nombre
                }
            })
            if (!archivo) return next(errors.ArchivoInexistente)


            res.download('uploads/archivos-usuarios/' + archivo.file, archivo.original_name) //descarga el archivo

        } catch (err) {
            return next(err)
        }
    }
}