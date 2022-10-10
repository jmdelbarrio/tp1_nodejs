module.exports ={    
    'ValidationError':{
        code:1000,
        message:'Error de validacion'
    },
    'FaltanCampos':{
        code:1001,
        message:'Faltan parametros necesarios'
    },
    'MedicoInexistente':{
        code:1010,
        message:'El medico no existe'
    },
    'PacienteInexistente':{
        code:1011,
        message:'El paciente no existe'
    },
    'PrestacionInexistente':{
        code:1012,
        message:'La prestacion no existe'
    },
    'UsuarioInexistente':{
        code:1013,
        message:'El usuario no existe'
    },
    'ArchivoInexistente': {
        code: 1014,
        message: 'El archivo no existe'
    },
    'UsuarioErroneo': {
        code: 1015,
        message: 'El parámetro de usuario no corresponde con el usuario logueado'
    },
    'CredencialesInvalidas': {
        code: 1020,
        message: 'Credenciales inválidas'
    },
    'UsuarioNoAutorizado': {
        code: 1021,
        message: 'Usuario no autorizado'
    },
    'SesionExpirada': {
        code: 1022,
        message: 'Sesión expirada'
    }
}