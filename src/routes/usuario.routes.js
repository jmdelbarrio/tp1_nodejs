//RUTAS DE LOS USUARIOS

const router = require("express").Router();

const usuarioController = require('../controllers/usuario.controller');

router.get('/',usuarioController.prueba);
router.post('/',usuarioController.crear);

router.get('/:idUsuario',usuarioController.listarInfo);

module.exports = router;