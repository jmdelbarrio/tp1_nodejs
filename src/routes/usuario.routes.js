//RUTAS DE LOS USUARIOS

const router = require("express").Router();

const usuarioController = require('../controllers/usuario.controller');

router.get('/:idUsuario',usuarioController.listarInfo);

router.get('/',usuarioController.prueba);
router.post('/',usuarioController.crear);

module.exports = router;