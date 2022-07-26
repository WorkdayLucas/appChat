"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotificationType = void 0;

var _sequelize = require("sequelize");

var _db = _interopRequireDefault(require("../db.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
var NotificationType = _db["default"].define('notificationType', {
  name: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false
});

exports.NotificationType = NotificationType;