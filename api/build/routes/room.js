"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _room = require("../controllers/room");

var _authJwt = _interopRequireDefault(require("../middlewares/authJwt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var route = (0, _express.Router)();
route.get("", _room.getRoom);
route.post("/create", _authJwt["default"], _room.createRoom);
var _default = route;
exports["default"] = _default;