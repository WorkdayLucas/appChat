"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Mesage = void 0;

var _sequelize = require("sequelize");

var _db = _interopRequireDefault(require("../db.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
var Mesage = _db["default"].define('mesage', {
  content: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false,
    unique: false
  },
  time: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false,
    unique: false
  },
  checked: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false,
    unique: false
  }
}, {
  timestamps: false
});

exports.Mesage = Mesage;