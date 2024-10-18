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
        email:{
          type:DataTypes.STRING,
          unique:true,
          validate:{
            isEmail:true
          }
        },
        password: DataTypes.STRING
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