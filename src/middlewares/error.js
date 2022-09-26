const errors = require('../const/errors');

module.exports = function(err, req, res, next){

    let response = {
        success: false,
        error:{
            code:err.code || 500,
            message: err.message || 'Internal server error'
        }
    }

    if(err.message === 'Not Found'){
        response.error.code = 404;
        response.error.message = 'Not Found';
    }

    if(err.isJoi){
        let validationErrorType = err.details[0].type;
        let errorKey='ValidationError';
        if (validationErrorType === 'any.required'){
            errorKey ='FaltanCampos';
        }
        response.error.code = errors[errorKey].code;
        response.error.message = errors[errorKey].message;
    }

    if(err.name === 'SequelizeValidationError'){
        let validationError = err.errors[0];
        response.error.code = errors['ValidationError'].code;
        response.error.message = validationError.message;
    }

    if(err.message === 'Not allowed by CORS'){
        response.error.code = 403;
    }

    if(err.name === 'SequelizeDatabaseError' && err.message.indexOf('out of range')>= 0){
        response.error.code = errors['ValidationError'].code;
        response.error.message = errors['ValidationError'].message;
    }

    if(err.name === 'SequelizeDatabaseError' && err.message.indexOf('out of range')== 0){
        response.error.code = errors['ValidationError'].code;
        response.error.message = errors['ValidationError'].message;
    }

    if(err.name === 'SequelizeConnectionError'){
        response.error.code = 500;
        response.error.message = 'Internal server error';
    }

    res.status(200).json(response);

}