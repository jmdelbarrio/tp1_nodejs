'use strict'

const { DataTypes } = require("sequelize")
const { sequelize } = require(".")

module.exports = (sequelize,DataTypes)=>{

    let Paciente = sequelize.define('paciente',{
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

    Paciente.associate = models => {
        //Paciente.hasMany(models.prestacion) 
    }

    return Paciente;
}