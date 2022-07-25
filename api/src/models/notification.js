import { DataTypes } from 'sequelize';
import sequelize from "../db.js"
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

export const Notification = sequelize.define('notification', {
  userIdOrigin: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  userNameOrigin: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  checked: {
    type: DataTypes.STRING,
    allowNull: false,
  }
  
}, { timestamps: true });