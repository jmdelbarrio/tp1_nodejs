const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// -------------- RUTAS --------------

// cuando es GET recibo el dato por la url
app.get('/pacientes/:nombre', (req, res) => { // req: request, res: response
    res.send('Hola ' + req.params.nombre); // envia una respuesta y extrae el nombre del parámetro
});

// cuando es POST recibo el dato por el BODY
app.post('/pacientes', (req, res) => { // req: request, res: response
    console.log(req.body);
    res.send('Hola ' + req.body.nombre); // envia una respuesta y extraigo el nombre del body
});


// ---------- PUERTO ----------
app.listen(5000); // escucha en el puerto 5000
console.log('Servidor corriendo en el puerto 5000');


// COMENTARIOS