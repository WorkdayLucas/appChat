"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var _process$env = process.env,
    DB_USER = _process$env.DB_USER,
    DB_PASSWORD = _process$env.DB_PASSWORD,
    DB_HOST = _process$env.DB_HOST,
    DB_NAME = _process$env.DB_NAME,
    NODE_ENV = _process$env.NODE_ENV;
var sequelize = NODE_ENV === "production" ? new _sequelize["default"]({
  database: DB_NAME,
  dialect: "postgres",
  host: DB_HOST,
  port: 5432,
  username: DB_USER,
  password: DB_PASSWORD,
  pool: {
    max: 3,
    min: 1,
    idle: 10000
  },
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    },
    keepAlive: true
  },
  ssl: true
}) : new _sequelize["default"]("postgres://".concat(DB_USER, ":").concat(DB_PASSWORD, "@").concat(DB_HOST, "/").concat(DB_NAME), {
  logging: false,
  // set to console.log to see the raw SQL queries
  "native": false // lets Sequelize know we can use pg-native for ~30% more speed

});
var _default = sequelize;
exports["default"] = _default;