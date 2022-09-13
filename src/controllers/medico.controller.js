//CONTROLADOR DE MEDICO

module.exports = {
    listar: async (req,res) =>{
        try {
            console.log('ejecutando listar');
            res.json({
                message: "Listar información de todos"
            })
        } catch (error) {
            console.log(error);
        }            
    },
    crear: async (req,res) =>{
        try {
            console.log('ejecutando crear');
            res.json({
                message: "Crear Medico - Nombres: "+req.body.nombres+" Apellido: "+req.body.apellido+" ID Prestacion: "+req.body.idPrestacion
            })
        } catch (error) {
            console.log(error);
        }        
    },
    listarInfo: async (req,res) =>{
        try {
            console.log('ejecutando listarInfo');
            res.json({
                message: "Listar información de 1 - ID:" +req.params.idMedico
            })
        } catch (error) {
            console.log(error);
        }
    },    
}