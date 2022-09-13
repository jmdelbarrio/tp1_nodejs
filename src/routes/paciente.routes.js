//RUTAS DE LOS PACIENTES

const router = require("express").Router();

const pacienteController = require('../controllers/paciente.controller');

router.get('/:idPaciente',pacienteController.listarInfo);
router.get('/',pacienteController.listar);
router.post('/',pacienteController.crear);

module.exports = router;