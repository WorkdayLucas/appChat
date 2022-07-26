"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Notification = void 0;

var _sequelize = require("sequelize");

var _db = _interopRequireDefault(require("../db.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
var Notification = _db["default"].define('notification', {
  userIdOrigin: {
    type: _sequelize.DataTypes.INTEGER,
    allowNull: false
  },
  userNameOrigin: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  checked: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: true
});

exports.Notification = Notification;