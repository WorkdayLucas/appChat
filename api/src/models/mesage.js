import { DataTypes } from 'sequelize';
import sequelize from "../db.js"
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

export const Mesage = sequelize.define('mesage', {
  content: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false
  },
  time: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false
  },
}, { timestamps: true });