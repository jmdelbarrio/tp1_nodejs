//RUTAS DE LOS MEDICOS

const router = require("express").Router();

const medicoController = require('../controllers/medico.controller');

router.get('/:idMedico',medicoController.listarInfo);
router.get('/',medicoController.listar);
router.post('/',medicoController.crear);

module.exports = router;