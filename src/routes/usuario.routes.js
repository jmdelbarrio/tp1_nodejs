//RUTAS DE LOS USUARIOS

const router = require("express").Router();
const usuarioController = require('../controllers/usuario.controller');
const validate = require('../middlewares/validate');
const usuarioScheme = require('../middlewares/schemes/usuario.scheme');

router.get('/:idPaciente',usuarioController.listarInfo);
router.get('/',usuarioController.listar);
router.post('/',validate(usuarioScheme.crearPaciente),usuarioController.crear);

module.exports = router;