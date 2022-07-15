import { DataTypes } from 'sequelize';
import sequelize from "../db.js"
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

export const Contact_list = sequelize.define('Contact_list', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
}, { timestamps: false });