//CONTROLADOR DE PRESTACION

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
            console.log(req.body);
            res.json({
                message: "Crear Prestación - Prestacion: "+req.body.nombre+" Codigo: "+req.body.codigo
            })
        } catch (error) {
            console.log(error);
        }        
    },
    listarInfo: async (req,res) =>{
        try {
            console.log('ejecutando listarInfo');
            res.json({
                message: "Listar información de 1 - ID:" +req.params.idPrestacion
            })
        } catch (error) {
            console.log(error);
        }
    },    
}