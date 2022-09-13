//RUTAS DE LAS PRESTACIONES

const router = require("express").Router();

const prestacionController = require('../controllers/prestacion.controller');

router.get('/:idPrestacion',prestacionController.listarInfo);
router.get('/',prestacionController.listar);
router.post('/',prestacionController.crear);

module.exports = router;