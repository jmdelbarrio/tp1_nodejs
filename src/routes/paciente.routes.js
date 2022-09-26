//RUTAS DE LOS PACIENTES

const router = require("express").Router();
const pacienteController = require('../controllers/paciente.controller');
const validate = require('../middlewares/validate');
const pacienteScheme = require('../middlewares/schemes/paciente.scheme');

router.get('/:idPaciente',pacienteController.listarInfo);
router.get('/',pacienteController.listar);
router.post('/',validate(pacienteScheme.crearPaciente),pacienteController.crear);

module.exports = router;