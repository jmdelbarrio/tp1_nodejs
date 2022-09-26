'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    
        return Promise.all([
          queryInterface.addColumn('paciente', 'telefono', {
            type: Sequelize.DataTypes.STRING,
            allowNull: true
          }),
          queryInterface.addColumn('medico', 'telefono', {
            type: Sequelize.DataTypes.STRING,
            allowNull: true
          })
        ]);    
  },
  down: (queryInterface, Sequelize) => {    
        return Promise.all([
          queryInterface.removeColumn('paciente', 'telefono'),
          queryInterface.removeColumn('medico', 'telefono', )
        ]);      
  }
}