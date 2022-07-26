"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _auth = require("../controllers/auth");

var _authJwt = _interopRequireDefault(require("../middlewares/authJwt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var route = (0, _express.Router)();
route.post("/register", _auth.createUser);
route.post("/login", _auth.logUser);
route.get('/refresh-token', _auth.handleRefreshToken);
route.get('/user', _auth.getUserAuth);
route.get('/logout', _authJwt["default"], _auth.logOut);
var _default = route;
exports["default"] = _default;