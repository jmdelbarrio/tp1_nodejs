'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    
        return Promise.all([
          queryInterface.addColumn('paciente', 'email', {
            type: Sequelize.DataTypes.STRING,
            allowNull: true
          }),
          queryInterface.addColumn('medico', 'email', {
            type: Sequelize.DataTypes.STRING,
            allowNull: true
          })
        ]);    
  },
  down: (queryInterface, Sequelize) => {    
        return Promise.all([
          queryInterface.removeColumn('paciente', 'email'),
          queryInterface.removeColumn('medico', 'email', )
        ]);      
  }
}