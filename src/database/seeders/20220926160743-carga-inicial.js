'use strict';

const models = require('../models/index');

module.exports = {
  up: function(queryInterface, Sequelize) {
    
    return Promise.all([
      models.paciente.findOrCreate({
        where:{
          id: "1"
        },
        defaults:{
          nombres:"Paciente A",
          apellido:"AAA",
          email:"pacienteA@gmail.com"
        }
      }),
      models.paciente.findOrCreate({
        where:{
          id: "2"
        },
        defaults:{
          nombres:"Paciente B",
          apellido:"BBBB",
          email:"pacienteBBB@gmail.com"
        }
      }),
      models.prestacion.findOrCreate({
        where:{
          id: "1"
        },
        defaults:{
          nombre:"Prestacion 1",
          codigo:"0001"          
        }
      }),
      models.prestacion.findOrCreate({
        where:{
          id: "2"
        },
        defaults:{
          nombre:"Prestacion 2",
          codigo:"0002"
        }
      }),
      models.medico.findOrCreate({
        where:{
          id: "3"
        },
        defaults:{
          nombres:"Pedro",
          apellido:"Pacheco",
          email:"pedropacheco@gmail.com",
          prestacionId: "1"
        }
      }),
      models.medico.findOrCreate({
        where:{
          id: "4"
        },
        defaults:{
          nombres:"Carlos",
          apellido:"Saracho",
          email:"saracho@gmail.com",
          prestacionId: "2"
        }
      })
    ])      
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
