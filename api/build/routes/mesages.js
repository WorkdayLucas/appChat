"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _mesages = require("../controllers/mesages");

var _authJwt = _interopRequireDefault(require("../middlewares/authJwt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var route = (0, _express.Router)();
route.get("/get/:userId", _mesages.getMesagesByUser);
route.post("/create", _authJwt["default"], _mesages.createMesageByUser);
route.put("/update/:id", _authJwt["default"], _mesages.updateMesageByUser);
route["delete"]("/delete/", _mesages.deleteMesageByUser);
var _default = route;
exports["default"] = _default;