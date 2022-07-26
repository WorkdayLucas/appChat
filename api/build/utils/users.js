"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addContactFromDb = addContactFromDb;
exports.createUserInDb = createUserInDb;
exports.findAllUsersInDb = findAllUsersInDb;
exports.findNotificationInDbByUserId = findNotificationInDbByUserId;
exports.findUserInDbByField = findUserInDbByField;
exports.findUsersInDb = findUsersInDb;
exports.findcontactListInDb = findcontactListInDb;
exports.postNotificationOnDb = postNotificationOnDb;

var _asociations = _interopRequireDefault(require("../asociations"));

var _sequelize = require("sequelize");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var User = _asociations["default"].User,
    Role = _asociations["default"].Role,
    Contact_list = _asociations["default"].Contact_list,
    Notification = _asociations["default"].Notification,
    NotificationType = _asociations["default"].NotificationType;

function createUserInDb(_x, _x2, _x3, _x4) {
  return _createUserInDb.apply(this, arguments);
}

function _createUserInDb() {
  _createUserInDb = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(name, email, password, img) {
    var err, isEmailUsed, isUsernameUsed, user, contactsList;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            err = {};
            _context.next = 4;
            return User.findOne({
              where: {
                email: email
              }
            });

          case 4:
            isEmailUsed = _context.sent;

            if (isEmailUsed) {
              err.email = "Ya existe este email";
            }

            _context.next = 8;
            return User.findOne({
              where: {
                name: name
              }
            });

          case 8:
            isUsernameUsed = _context.sent;

            if (isUsernameUsed) {
              err.username = "Ya existe este username";
            }

            if (!(err.email || err.username)) {
              _context.next = 12;
              break;
            }

            return _context.abrupt("return", {
              err: err
            });

          case 12:
            _context.next = 14;
            return User.create({
              name: name.trim(),
              email: email,
              password: password,
              roleId: 2,
              img: img
            });

          case 14:
            user = _context.sent;
            _context.next = 17;
            return Contact_list.create({
              name: name.trim(),
              userId: user.dataValues.id
            });

          case 17:
            contactsList = _context.sent;
            return _context.abrupt("return", user);

          case 21:
            _context.prev = 21;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            return _context.abrupt("return", _context.t0);

          case 25:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 21]]);
  }));
  return _createUserInDb.apply(this, arguments);
}

function findUsersInDb(_x5, _x6, _x7) {
  return _findUsersInDb.apply(this, arguments);
}

function _findUsersInDb() {
  _findUsersInDb = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(search, userId, contacts) {
    var dbUsers, contactsId, filter, users;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return User.findAll();

          case 3:
            dbUsers = _context2.sent;
            _context2.next = 6;
            return contacts.map(function (contact) {
              return contact.id;
            });

          case 6:
            contactsId = _context2.sent;
            contactsId.push(Number(userId));
            console.log(contactsId);
            filter = dbUsers.filter(function (user) {
              var name = user.name;
              return name.trim().toLowerCase().includes(search.trim().toLowerCase()) && !contactsId.includes(user.id);
            });
            _context2.next = 12;
            return filter.map(function (user) {
              return {
                id: user.id,
                name: user.name,
                email: user.email,
                img: user.img
              };
            });

          case 12:
            users = _context2.sent;
            return _context2.abrupt("return", users);

          case 16:
            _context2.prev = 16;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            return _context2.abrupt("return", "fallido");

          case 20:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 16]]);
  }));
  return _findUsersInDb.apply(this, arguments);
}

function findUserInDbByField(_x8, _x9) {
  return _findUserInDbByField.apply(this, arguments);
}

function _findUserInDbByField() {
  _findUserInDbByField = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(field, value) {
    var user;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return User.findOne({
              include: [{
                model: Role
              }],
              where: _defineProperty({}, field, value)
            });

          case 3:
            user = _context3.sent;

            if (user) {
              _context3.next = 6;
              break;
            }

            return _context3.abrupt("return", 404);

          case 6:
            return _context3.abrupt("return", user);

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);
            return _context3.abrupt("return", "fallido");

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 9]]);
  }));
  return _findUserInDbByField.apply(this, arguments);
}

function findcontactListInDb(_x10) {
  return _findcontactListInDb.apply(this, arguments);
}

function _findcontactListInDb() {
  _findcontactListInDb = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(userId) {
    var contacListDB, contacts;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return Contact_list.findOne({
              include: {
                model: User,
                as: "contact"
              },
              where: {
                userId: userId
              }
            });

          case 3:
            contacListDB = _context4.sent;
            _context4.next = 6;
            return contacListDB.dataValues.contact.map(function (user) {
              return {
                id: user.id,
                name: user.name,
                email: user.email,
                img: user.img
              };
            });

          case 6:
            contacts = _context4.sent;
            return _context4.abrupt("return", {
              id: contacListDB.dataValues.id,
              name: contacListDB.dataValues.name,
              userId: contacListDB.dataValues.userId,
              contacts: contacts
            });

          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](0);
            return _context4.abrupt("return", _context4.t0);

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 10]]);
  }));
  return _findcontactListInDb.apply(this, arguments);
}

function addContactFromDb(_x11, _x12) {
  return _addContactFromDb.apply(this, arguments);
}

function _addContactFromDb() {
  _addContactFromDb = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(userId, contactId) {
    var userContactList, newContact;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return Contact_list.findOne({
              where: {
                userId: userId
              }
            });

          case 3:
            userContactList = _context5.sent;
            _context5.next = 6;
            return User.findOne({
              where: {
                id: contactId
              }
            });

          case 6:
            newContact = _context5.sent;
            _context5.next = 9;
            return userContactList.addContact(newContact);

          case 9:
            return _context5.abrupt("return", {
              msg: "".concat(newContact.name, " agregado a la lista de usuarios")
            });

          case 12:
            _context5.prev = 12;
            _context5.t0 = _context5["catch"](0);
            return _context5.abrupt("return", _context5.t0);

          case 15:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 12]]);
  }));
  return _addContactFromDb.apply(this, arguments);
}

function findAllUsersInDb() {
  return _findAllUsersInDb.apply(this, arguments);
}

function _findAllUsersInDb() {
  _findAllUsersInDb = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
    var allUsers, result;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return User.findAll();

          case 3:
            allUsers = _context6.sent;
            _context6.next = 6;
            return allUsers.map(function (user) {
              return {
                id: user.id,
                name: user.name,
                email: user.email,
                img: user.img
              };
            });

          case 6:
            result = _context6.sent;
            return _context6.abrupt("return", result);

          case 10:
            _context6.prev = 10;
            _context6.t0 = _context6["catch"](0);
            return _context6.abrupt("return", _context6.t0);

          case 13:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 10]]);
  }));
  return _findAllUsersInDb.apply(this, arguments);
}

function postNotificationOnDb(_x13, _x14, _x15, _x16) {
  return _postNotificationOnDb.apply(this, arguments);
}

function _postNotificationOnDb() {
  _postNotificationOnDb = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(userIdOrigin, userId, notificationTypeId, userNameOrigin) {
    var newNotification;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return Notification.create({
              userIdOrigin: userIdOrigin,
              userNameOrigin: userNameOrigin,
              checked: "0",
              userId: userId,
              notificationTypeId: notificationTypeId
            });

          case 3:
            newNotification = _context7.sent;
            return _context7.abrupt("return", newNotification);

          case 7:
            _context7.prev = 7;
            _context7.t0 = _context7["catch"](0);
            return _context7.abrupt("return", _context7.t0);

          case 10:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 7]]);
  }));
  return _postNotificationOnDb.apply(this, arguments);
}

function findNotificationInDbByUserId(_x17) {
  return _findNotificationInDbByUserId.apply(this, arguments);
}

function _findNotificationInDbByUserId() {
  _findNotificationInDbByUserId = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(userId) {
    var notifications;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            notifications = Notification.findAll({
              where: {
                userId: userId
              }
            });
            return _context8.abrupt("return", notifications);

          case 5:
            _context8.prev = 5;
            _context8.t0 = _context8["catch"](0);
            return _context8.abrupt("return", _context8.t0);

          case 8:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[0, 5]]);
  }));
  return _findNotificationInDbByUserId.apply(this, arguments);
}