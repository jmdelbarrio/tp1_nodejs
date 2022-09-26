//RUTAS DE LOS MEDICOS

const router = require("express").Router();
const medicoController = require('../controllers/medico.controller');
const validate = require('../middlewares/validate');
const medicoScheme = require('../middlewares/schemes/medico.scheme');

router.get('/:idMedico',medicoController.listarInfo);
router.get('/',medicoController.listar);
router.post('/',validate(medicoScheme.crearMedico), medicoController.crear);

module.exports = router;