//user.models.js

import { Model, DataTypes } from "sequelize";

export default class User extends Model {
  static init(sequelize) {
    return super.init(
      {
        nId: {
          type: DataTypes.INTEGER,
          primaryKey:true,
          autoIncrement:true
        },
        fName: {
          type:DataTypes.STRING,
          allowNull:false
        },
        otherName: {
          type:DataTypes.STRING,
          allowNull:true
        },
        phone:{
          type:DataTypes.STRING,
          unique:true
        },
        gender:{
          type:DataTypes.ENUM('male','female'),
          allowNull:false
        },
        email:{
          type:DataTypes.STRING,
          unique:true,
          allowNull:false,
          validate:{
            isEmail:true
          }
        },
        password: DataTypes.STRING,
        type:{
          type:DataTypes.ENUM('SPA','PA','HOSPITAL','DOCTOR','LAB','DELVERER','NAIVE'),
          allowNull:false
        },
        status:{
          type:DataTypes.ENUM('PENDING', 'APPROVED', 'DENIED'),
          allowNull:false,
          defaultValue:'PENDING'
        }
      },
      {
        sequelize,
        modelName:'User',
        tableName:'user'
      }
    );
  };

  static associate(models) {
    // FOr relationships
  }
};