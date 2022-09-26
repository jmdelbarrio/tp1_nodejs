'use strict'

const { DataTypes } = require("sequelize")
const { sequelize } = require(".")

module.exports = (sequelize,DataTypes)=>{

    let Prestacion = sequelize.define('prestacion',{
        id:{
            type: DataTypes.BIGINT,
            autoIncrement: true,            
            primaryKey: true,
            allowNull: false
        },
        nombre:{
            type: DataTypes.STRING,
            allowNull: false
        },
        codigo:{
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

    Prestacion.associate = models => {
        //Prestacion.hasMany(models.prestacion) 
    }

    return Prestacion;
}