//SE ENCARGA DE CONECTAR TODAS LAS RUTAS 
const { Router } = require('express');

const medicosRoutes = require("./medico.routes");
const pacientesRoutes = require("./paciente.routes");
const prestacionesRoutes = require("./prestacion.routes");
const usuariosRoutes = require("./usuario.routes");
const authRoutes = require("./auth.routes")

const decodeJWT = require("../middlewares/decodeJWT")

const rutas_init = () =>{
    const router = Router();    
    router.use("/usuarios", decodeJWT, usuariosRoutes);
    router.use("/medicos", decodeJWT, medicosRoutes);
    router.use("/pacientes", decodeJWT, pacientesRoutes);
    router.use("/prestaciones", decodeJWT, prestacionesRoutes);
    return router;
}
const rutas_auth = () => {
    const router = Router();
  
    router.use("/auth", authRoutes);
  
    return router;
}
module.exports = { rutas_init, rutas_auth  };