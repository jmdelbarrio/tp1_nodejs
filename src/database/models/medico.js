'use strict'

const { DataTypes } = require("sequelize")
const { sequelize } = require(".")

module.exports = (sequelize,DataTypes)=>{

    let Medico = sequelize.define('medico',{
        id:{
            type: DataTypes.BIGINT,
            autoIncrement: true,            
            primaryKey: true,
            allowNull: false
        },
        nombres:{
            type: DataTypes.STRING,
            allowNull: false
        },
        apellido:{
            type: DataTypes.STRING,
            allowNull: false
        },        
        email:{
            type: DataTypes.STRING,
            allowNull: true
        },        
        createdAt:{
            type: DataTypes.DATE,
            field: 'created_at',
            defaultValue: DataTypes.NOW,
            allowNull: false
        },
        updatedAt:{
            type: DataTypes.DATE,
            field: 'updated_at',
            defaultValue: DataTypes.NOW,
            allowNull: false
        },
        deletedAt:{
            type: DataTypes.DATE,
            field: 'deleted_at'            
        },

    },{
        paranoid: true,
        freezeTableName: true,
    });

    Medico.associate = models => {
        Medico.belongsTo(models.prestacion);
    }

    return Medico;
}