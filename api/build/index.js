"use strict";

var _app = _interopRequireDefault(require("./app"));

var _db = _interopRequireDefault(require("./db.js"));

require("./asociations");

var _roles = _interopRequireDefault(require("./utils/roles"));

var _notificationsTypes = _interopRequireDefault(require("./utils/notificationsTypes"));

var _dotenv = _interopRequireDefault(require("dotenv"));

require("./models/user.js");

require("./models/mesage.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import mockData from './mock/mock'
_dotenv["default"].config();

var _process$env = process.env,
    PORT = _process$env.PORT,
    FORCE = _process$env.FORCE;

_db["default"].sync({
  force: FORCE === "1" ? true : false
}).then(function () {
  _app["default"].listen(PORT);

  console.log("server listen on port", PORT);
  (0, _roles["default"])();
  (0, _notificationsTypes["default"])(); // mockData()
});