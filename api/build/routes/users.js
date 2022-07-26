"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _users = require("../controllers/users");

var _authJwt = _interopRequireDefault(require("../middlewares/authJwt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var route = (0, _express.Router)();
route.get("/", _authJwt["default"], _users.getUsers);
route.get("/contact-list/:userId", _authJwt["default"], _users.getContactList);
route.post("/add-contact", _authJwt["default"], _users.addContact);
route.post("/notification", _authJwt["default"], _users.createNotification);
route.get("/notification/:userId", _authJwt["default"], _users.getNotification);
var _default = route;
exports["default"] = _default;