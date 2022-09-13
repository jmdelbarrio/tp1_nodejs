# tp1_nodejs

PORT: 5000

Para todos los endpoints
*) GET sin parametros lista todo
*) GET con parametro devuelve el registro solicitado por parametro (id)
*) POST crea un registro con los datos enviados por body

Pacientes

GET
/api/pacientes/
/api/pacientes/ Param: idPaciente

POST
/api/pacientes/

Body params:
nombres
apellido

Medicos

GET
/api/medicos/
/api/medicos/ Param: idMedico

POST
/api/medicos/

Body params:
nombres
apellido
idPrestacion

Prestaciones

GET
/api/prestaciones/
/api/prestaciones/ Param: idPrestacion

POST
/api/prestaciones/

Body params:
nombre
codigo
