const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// -------------- RUTAS --------------

// retorna el paciente con ID :id si es que existe
app.get('/pacientes/:id', (req, res) => { // req: request, res: response
    res.send('Retorna el paciente ID: ' + req.params.id); 
});

// retorna todos los pacientes
app.get('/pacientes', (req, res) => { // req: request, res: response
    res.send('Retorna todos los pacientes'); 
});

// da de alta un paciente
app.post('/paciente', (req, res) => { // req: request, res: response    
    res.send('Alta de paciente OK\nApellido: ' + req.body.apellido +'\nNombres: ' + req.body.nombres);    
});

// retorna el medico con ID :id si es que existe
app.get('/medicos/:id', (req, res) => { // req: request, res: response
    res.send('Retorna el medico ID: ' + req.params.id); 
});

// retorna todos los medicos
app.get('/pacientes', (req, res) => { // req: request, res: response
    res.send('Retorna todos los medicos'); 
});

// da de alta un medico
app.post('/medico', (req, res) => { // req: request, res: response    
    res.send('Alta de medico OK\nApellido: ' + req.body.apellido +'\nNombres: ' + req.body.nombres+'\ID Especialidad: ' + req.body.especialidadID);
});

// retorna la prestacion con ID :id si es que existe
app.get('/prestaciones/:id', (req, res) => { // req: request, res: response
    res.send('Retorna la prestacion ID: ' + req.params.id); 
});

// retorna todas las prestaciones
app.get('/prestaciones', (req, res) => { // req: request, res: response
    res.send('Retorna todas las prestaciones'); 
});

// da de alta una prestacion
app.post('/prestacion', (req, res) => { // req: request, res: response    
    res.send('Alta de prestacion OK\nNombre: ' + req.body.prestacion);    
});

// ---------- PUERTO ----------
app.listen(5000); // escucha en el puerto 5000
console.log('Servidor corriendo en el puerto 5000');


// COMENTARIOS