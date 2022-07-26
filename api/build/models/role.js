"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Role = void 0;

var _sequelize = require("sequelize");

var _db = _interopRequireDefault(require("../db.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
var Role = _db["default"].define('role', {
  name: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false,
    unique: true
  }
}, {
  timestamps: false
});

exports.Role = Role;