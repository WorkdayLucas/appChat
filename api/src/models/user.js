import { DataTypes } from 'sequelize';
import sequelize from "../db.js"
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

export const User = sequelize.define('user', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false
  },
  email: {
    type: DataTypes.STRING,
    unique: true
  },
  img:{
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING
  },
  refreshToken: {
    type: DataTypes.STRING
  },
}, { timestamps: false });

