//SE ENCARGA DE CONECTAR TODAS LAS RUTAS 
const { Router } = require('express');

const medicosRoutes = require("./medico.routes");
const pacientesRoutes = require("./paciente.routes");
const prestacionesRoutes = require("./prestacion.routes");
const rutas_init = () =>{
    const router = Router();    
    router.use("/medicos", medicosRoutes);
    router.use("/pacientes", pacientesRoutes);
    router.use("/prestaciones", prestacionesRoutes);

    return router;
}

module.exports = { rutas_init };