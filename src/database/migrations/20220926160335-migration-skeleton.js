'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    
        return Promise.all([
          queryInterface.addColumn('paciente', 'email', {
            type: Sequelize.DataTypes.STRING,
            allowNull: true
          }, { transaction: t }),
          queryInterface.addColumn('medico', 'email', {
            type: Sequelize.DataTypes.STRING,
            allowNull: true
          }, { transaction: t })
        ]);    
  },
  down: (queryInterface, Sequelize) => {    
        return Promise.all([
          queryInterface.removeColumn('paciente', 'email', { transaction: t }),
          queryInterface.removeColumn('medico', 'email', { transaction: t })
        ]);      
  }
}