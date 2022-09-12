//CONTROLADOR DE USUARIO

module.exports ={
    listar: async (req,res) =>{
        
    },
    crear: async (req,res) =>{
        
    },
    listarInfo: async (req,res) =>{
        
    },
    prueba: async (req,res) =>{
        try {
            console.log('ejecutando prueba');
            res.json({
                message: "Hola Mundo"
            })
        } catch (error) {
            console.log(error);
        }
    },
}