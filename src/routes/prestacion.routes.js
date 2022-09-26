//RUTAS DE LAS PRESTACIONES

const router = require("express").Router();
const prestacionController = require('../controllers/prestacion.controller');
const validate = require('../middlewares/validate');
const prestacionScheme = require('../middlewares/schemes/prestacion.scheme');

router.get('/:idPrestacion',prestacionController.listarInfo);
router.get('/',prestacionController.listar);
router.post('/',validate(prestacionScheme.crearPrestacion),prestacionController.crear);

module.exports = router;