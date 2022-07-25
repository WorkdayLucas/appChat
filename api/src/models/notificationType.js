import { DataTypes } from 'sequelize';
import sequelize from "../db.js"
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

export const NotificationType = sequelize.define('notificationType', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  }, 
}, { timestamps: false });