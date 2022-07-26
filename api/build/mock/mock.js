"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = mockData;

var _asociations = _interopRequireDefault(require("../asociations"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var User = _asociations["default"].User,
    Contact_list = _asociations["default"].Contact_list;
var users = [{
  name: "Melessa",
  email: "mdayborne0@ycombinator.com",
  password: "GQEKOU",
  img: "https://iestpdesaguadero.edu.pe/wp-content/uploads/2016/11/78-786420_icono-usuario-joven-transparent-user-png-png-download.png"
}, {
  name: "Alvan",
  email: "avandriel1@dedecms.com",
  password: "Zw25NF8",
  img: "https://iestpdesaguadero.edu.pe/wp-content/uploads/2016/11/78-786420_icono-usuario-joven-transparent-user-png-png-download.png"
}, {
  name: "Bradford",
  email: "bwressell2@discuz.net",
  password: "w1SpGeoM",
  img: "https://iestpdesaguadero.edu.pe/wp-content/uploads/2016/11/78-786420_icono-usuario-joven-transparent-user-png-png-download.png"
}, {
  name: "Alessandro",
  email: "aide3@irs.gov",
  password: "koYA1JM9kJ",
  img: "https://iestpdesaguadero.edu.pe/wp-content/uploads/2016/11/78-786420_icono-usuario-joven-transparent-user-png-png-download.png"
}, {
  name: "Penny",
  email: "pchalfain4@usatoday.com",
  password: "0vmKNsU7eZMt",
  img: "https://iestpdesaguadero.edu.pe/wp-content/uploads/2016/11/78-786420_icono-usuario-joven-transparent-user-png-png-download.png"
}, {
  name: "Smitty",
  email: "sszapiro5@nps.gov",
  password: "McAwk5dM",
  img: "https://iestpdesaguadero.edu.pe/wp-content/uploads/2016/11/78-786420_icono-usuario-joven-transparent-user-png-png-download.png"
}, {
  name: "Bonnee",
  email: "bpowles6@mit.edu",
  password: "RjNN0u4uU",
  img: "https://iestpdesaguadero.edu.pe/wp-content/uploads/2016/11/78-786420_icono-usuario-joven-transparent-user-png-png-download.png"
}, {
  name: "Chelsae",
  email: "cvanelli7@senate.gov",
  password: "3QDiOVGjujd",
  img: "https://iestpdesaguadero.edu.pe/wp-content/uploads/2016/11/78-786420_icono-usuario-joven-transparent-user-png-png-download.png"
}, {
  name: "Alanna",
  email: "adare8@home.pl",
  password: "8wbkyhN5LT",
  img: "https://iestpdesaguadero.edu.pe/wp-content/uploads/2016/11/78-786420_icono-usuario-joven-transparent-user-png-png-download.png"
}, {
  name: "Percival",
  email: "pwilkins9@gravatar.com",
  password: "WUcnAgpJ",
  img: "https://iestpdesaguadero.edu.pe/wp-content/uploads/2016/11/78-786420_icono-usuario-joven-transparent-user-png-png-download.png"
}, {
  name: "Dorita",
  email: "dbattlea@statcounter.com",
  password: "MHvMjJz4",
  img: "https://iestpdesaguadero.edu.pe/wp-content/uploads/2016/11/78-786420_icono-usuario-joven-transparent-user-png-png-download.png"
}, {
  name: "Sharyl",
  email: "sconnellyb@csmonitor.com",
  password: "Ub8dXaaK",
  img: "https://iestpdesaguadero.edu.pe/wp-content/uploads/2016/11/78-786420_icono-usuario-joven-transparent-user-png-png-download.png"
}, {
  name: "Leif",
  email: "llerec@blogger.com",
  password: "40ueS9GgS1Ae",
  img: "https://iestpdesaguadero.edu.pe/wp-content/uploads/2016/11/78-786420_icono-usuario-joven-transparent-user-png-png-download.png"
}, {
  name: "Shalom",
  email: "sfairleyd@intel.com",
  password: "LuxVahs",
  img: "https://iestpdesaguadero.edu.pe/wp-content/uploads/2016/11/78-786420_icono-usuario-joven-transparent-user-png-png-download.png"
}, {
  name: "Sid",
  email: "skeoghe@mayoclinic.com",
  password: "7EoteZ2bSV",
  img: "https://iestpdesaguadero.edu.pe/wp-content/uploads/2016/11/78-786420_icono-usuario-joven-transparent-user-png-png-download.png"
}, {
  name: "Hiram",
  email: "hdarwentf@smh.com.au",
  password: "cCXskozAaEX",
  img: "https://iestpdesaguadero.edu.pe/wp-content/uploads/2016/11/78-786420_icono-usuario-joven-transparent-user-png-png-download.png"
}, {
  name: "Leona",
  email: "ldulwichg@about.com",
  password: "2NwgueE13u",
  img: "https://iestpdesaguadero.edu.pe/wp-content/uploads/2016/11/78-786420_icono-usuario-joven-transparent-user-png-png-download.png"
}, {
  name: "Marco",
  email: "mscandrickh@mac.com",
  password: "iOKl2if",
  img: "https://iestpdesaguadero.edu.pe/wp-content/uploads/2016/11/78-786420_icono-usuario-joven-transparent-user-png-png-download.png"
}, {
  name: "Valentijn",
  email: "vpetriki@springer.com",
  password: "2Vcb69Hkwum",
  img: "https://iestpdesaguadero.edu.pe/wp-content/uploads/2016/11/78-786420_icono-usuario-joven-transparent-user-png-png-download.png"
}, {
  name: "Michaeline",
  email: "mcawsej@google.com",
  password: "DozfjQSwXLJU",
  img: "https://iestpdesaguadero.edu.pe/wp-content/uploads/2016/11/78-786420_icono-usuario-joven-transparent-user-png-png-download.png"
}, {
  name: "Mikaela",
  email: "mbarczynskik@squarespace.com",
  password: "Cdcg9nOpxua",
  img: "https://iestpdesaguadero.edu.pe/wp-content/uploads/2016/11/78-786420_icono-usuario-joven-transparent-user-png-png-download.png"
}, {
  name: "Ingmar",
  email: "iraunl@mysql.com",
  password: "ArD0NLaq",
  img: "https://iestpdesaguadero.edu.pe/wp-content/uploads/2016/11/78-786420_icono-usuario-joven-transparent-user-png-png-download.png"
}, {
  name: "Malanie",
  email: "marranm@tripod.com",
  password: "aL5qvmfLo",
  img: "https://iestpdesaguadero.edu.pe/wp-content/uploads/2016/11/78-786420_icono-usuario-joven-transparent-user-png-png-download.png"
}, {
  name: "Andreas",
  email: "aolyfantn@xing.com",
  password: "0nB60U",
  img: "https://iestpdesaguadero.edu.pe/wp-content/uploads/2016/11/78-786420_icono-usuario-joven-transparent-user-png-png-download.png"
}, {
  name: "Lionello",
  email: "llawfordo@adobe.com",
  password: "ByI46CZvl9",
  img: "https://iestpdesaguadero.edu.pe/wp-content/uploads/2016/11/78-786420_icono-usuario-joven-transparent-user-png-png-download.png"
}, {
  name: "George",
  email: "gbramhallp@exblog.jp",
  password: "eviBulYSyN",
  img: "https://iestpdesaguadero.edu.pe/wp-content/uploads/2016/11/78-786420_icono-usuario-joven-transparent-user-png-png-download.png"
}, {
  name: "Gordie",
  email: "gkingswoodq@fastcompany.com",
  password: "bApbcqpyA0",
  img: "https://iestpdesaguadero.edu.pe/wp-content/uploads/2016/11/78-786420_icono-usuario-joven-transparent-user-png-png-download.png"
}, {
  name: "Nelia",
  email: "nharringtonr@wordpress.org",
  password: "IVuFxAK",
  img: "https://iestpdesaguadero.edu.pe/wp-content/uploads/2016/11/78-786420_icono-usuario-joven-transparent-user-png-png-download.png"
}, {
  name: "Efren",
  email: "ehymers@sun.com",
  password: "b2bpMoG0OhVU",
  img: "https://iestpdesaguadero.edu.pe/wp-content/uploads/2016/11/78-786420_icono-usuario-joven-transparent-user-png-png-download.png"
}, {
  name: "Nolana",
  email: "narchbouldt@bandcamp.com",
  password: "Wd9oYB9egg4f",
  img: "https://iestpdesaguadero.edu.pe/wp-content/uploads/2016/11/78-786420_icono-usuario-joven-transparent-user-png-png-download.png"
}, {
  name: "Morly",
  email: "mvaudreu@google.co.uk",
  password: "tmtxAGk",
  img: "https://iestpdesaguadero.edu.pe/wp-content/uploads/2016/11/78-786420_icono-usuario-joven-transparent-user-png-png-download.png"
}, {
  name: "Patten",
  email: "powlnerv@netvibes.com",
  password: "mk25bXwRe",
  img: "https://iestpdesaguadero.edu.pe/wp-content/uploads/2016/11/78-786420_icono-usuario-joven-transparent-user-png-png-download.png"
}, {
  name: "Caryl",
  email: "ccoitew@xrea.com",
  password: "S4hZ5OyQ04i",
  img: "https://iestpdesaguadero.edu.pe/wp-content/uploads/2016/11/78-786420_icono-usuario-joven-transparent-user-png-png-download.png"
}, {
  name: "Moses",
  email: "mbatchelderx@ucsd.edu",
  password: "6XGAsSDmJJ",
  img: "https://iestpdesaguadero.edu.pe/wp-content/uploads/2016/11/78-786420_icono-usuario-joven-transparent-user-png-png-download.png"
}, {
  name: "Marie-jeanne",
  email: "mashdowny@technorati.com",
  password: "304DvW",
  img: "https://iestpdesaguadero.edu.pe/wp-content/uploads/2016/11/78-786420_icono-usuario-joven-transparent-user-png-png-download.png"
}, {
  name: "Wandie",
  email: "whighwayz@chronoengine.com",
  password: "mwTEjznWw",
  img: "https://iestpdesaguadero.edu.pe/wp-content/uploads/2016/11/78-786420_icono-usuario-joven-transparent-user-png-png-download.png"
}];

function mockData() {
  return _mockData.apply(this, arguments);
}

function _mockData() {
  _mockData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var i, isRoleExist, user;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            i = 0;

          case 1:
            if (!(i < users.length)) {
              _context.next = 14;
              break;
            }

            _context.next = 4;
            return User.findOne({
              where: {
                email: users[i].email
              }
            });

          case 4:
            isRoleExist = _context.sent;

            if (isRoleExist) {
              _context.next = 11;
              break;
            }

            _context.next = 8;
            return User.create({
              name: users[i].name,
              email: users[i].email,
              password: users[i].password,
              img: users[i].img
            });

          case 8:
            user = _context.sent;
            _context.next = 11;
            return Contact_list.create({
              name: user.name,
              userId: user.dataValues.id
            });

          case 11:
            i++;
            _context.next = 1;
            break;

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _mockData.apply(this, arguments);
}