"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _mesages = _interopRequireDefault(require("./routes/mesages"));

var _auth = _interopRequireDefault(require("./routes/auth"));

var _room = _interopRequireDefault(require("./routes/room"));

var _users = _interopRequireDefault(require("./routes/users"));

var _cors = _interopRequireDefault(require("cors"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var app = (0, _express["default"])();
app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].json());
app.use((0, _cookieParser["default"])());
app.use((0, _cors["default"])({
  origin: process.env.ORIGIN || "http://localhost:3000",
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'],
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization', 'authorization']
}));
app.use("/api/mesages", _mesages["default"]);
app.use("/api/auth", _auth["default"]);
app.use("/api/room", _room["default"]);
app.use("/api/users", _users["default"]);
var _default = app;
exports["default"] = _default;