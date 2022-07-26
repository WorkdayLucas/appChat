"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _user = require("./models/user");

var _mesage = require("./models/mesage");

var _room = require("./models/room");

var _contactsList = require("./models/contactsList");

var _role = require("./models/role");

var _notification = require("./models/notification");

var _notificationType = require("./models/notificationType");

_user.User.hasMany(_mesage.Mesage);

_mesage.Mesage.belongsTo(_user.User);

_role.Role.hasMany(_user.User);

_user.User.belongsTo(_role.Role);

_user.User.hasMany(_notification.Notification);

_notification.Notification.belongsTo(_user.User);

_notificationType.NotificationType.hasMany(_notification.Notification);

_notification.Notification.belongsTo(_notificationType.NotificationType);

_user.User.belongsToMany(_room.Room, {
  through: 'UserRoom'
});

_room.Room.belongsToMany(_user.User, {
  through: 'UserRoom'
});

_room.Room.hasMany(_mesage.Mesage);

_mesage.Mesage.belongsTo(_room.Room);

_user.User.hasOne(_contactsList.Contact_list);

_contactsList.Contact_list.belongsTo(_user.User);

_user.User.belongsToMany(_contactsList.Contact_list, {
  through: 'UserContact_list',
  as: "contact"
});

_contactsList.Contact_list.belongsToMany(_user.User, {
  through: 'UserContact_list',
  as: "contact"
});

var _default = {
  User: _user.User,
  Room: _room.Room,
  Mesage: _mesage.Mesage,
  Contact_list: _contactsList.Contact_list,
  Role: _role.Role,
  Notification: _notification.Notification,
  NotificationType: _notificationType.NotificationType
};
exports["default"] = _default;