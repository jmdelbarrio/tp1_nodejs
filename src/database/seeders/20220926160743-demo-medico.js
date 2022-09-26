'use strict';

const models = require('../models/index');

module.exports = {
  up: function(queryInterface, Sequelize) {
    return Promise.all([
      models.medico.findOrCreate({
        where:{
          id: "1"
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
          id: "2"
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
