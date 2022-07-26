"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = void 0;

var _sequelize = require("sequelize");

var _db = _interopRequireDefault(require("../db.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
var User = _db["default"].define('user', {
  name: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  email: {
    type: _sequelize.DataTypes.STRING,
    unique: true
  },
  img: {
    type: _sequelize.DataTypes.STRING
  },
  password: {
    type: _sequelize.DataTypes.STRING
  },
  refreshToken: {
    type: _sequelize.DataTypes.STRING
  }
}, {
  timestamps: false
});

exports.User = User;