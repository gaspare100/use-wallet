import { node, objectOf, object, bool, number } from 'prop-types';
import { useRef, useCallback, useEffect, useState, useContext, useMemo, createElement, createContext } from 'react';
import { Web3ReactProvider, useWeb3React, UnsupportedChainIdError } from '@web3-react/core';
import JSBI from 'jsbi';

function _construct(t, e, r) {
  if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, e);
  var p = new (t.bind.apply(t, o))();
  return r && _setPrototypeOf(p, r.prototype), p;
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function () {
    return !!t;
  })();
}
function _regeneratorRuntime() {
  _regeneratorRuntime = function () {
    return e;
  };
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function (t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function (t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw new Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(typeof e + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function (e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function () {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function (e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw new Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function (t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function (t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    catch: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function (e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _isNativeFunction(fn) {
  try {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  } catch (e) {
    return typeof fn === "function";
  }
}
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;
  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;
    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);
      _cache.set(Class, Wrapper);
    }
    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };
  return _wrapNativeSuper(Class);
}

var ChainUnsupportedError = /*#__PURE__*/function (_Error) {
  _inheritsLoose(ChainUnsupportedError, _Error);
  function ChainUnsupportedError(message) {
    var _this;
    for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      params[_key - 1] = arguments[_key];
    }
    _this = _Error.call.apply(_Error, [this].concat(params)) || this;
    _this.name = 'ChainUnsupportedError';
    _this.message = message;
    return _this;
  }
  return ChainUnsupportedError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
var ChainUnknownError = /*#__PURE__*/function (_Error2) {
  _inheritsLoose(ChainUnknownError, _Error2);
  function ChainUnknownError(message) {
    var _this2;
    for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      params[_key2 - 1] = arguments[_key2];
    }
    _this2 = _Error2.call.apply(_Error2, [this].concat(params)) || this;
    _this2.name = 'ChainUnknownError';
    _this2.message = message;
    return _this2;
  }
  return ChainUnknownError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
var ConnectorUnsupportedError = /*#__PURE__*/function (_Error3) {
  _inheritsLoose(ConnectorUnsupportedError, _Error3);
  function ConnectorUnsupportedError(connectorId) {
    var _this3;
    for (var _len3 = arguments.length, params = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      params[_key3 - 1] = arguments[_key3];
    }
    _this3 = _Error3.call.apply(_Error3, [this].concat(params)) || this;
    _this3.name = 'ConnectorUnsupportedError';
    _this3.message = "Unsupported connector: " + connectorId + ".";
    return _this3;
  }
  return ConnectorUnsupportedError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
var ConnectionRejectedError = /*#__PURE__*/function (_Error4) {
  _inheritsLoose(ConnectionRejectedError, _Error4);
  function ConnectionRejectedError() {
    var _this4;
    for (var _len4 = arguments.length, params = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      params[_key4] = arguments[_key4];
    }
    _this4 = _Error4.call.apply(_Error4, [this].concat(params)) || this;
    _this4.name = 'ConnectionRejectedError';
    _this4.message = "The activation has been rejected by the provider.";
    return _this4;
  }
  return ConnectionRejectedError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
var ConnectorConfigError = /*#__PURE__*/function (_Error5) {
  _inheritsLoose(ConnectorConfigError, _Error5);
  function ConnectorConfigError() {
    var _this5;
    for (var _len5 = arguments.length, params = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      params[_key5] = arguments[_key5];
    }
    _this5 = _Error5.call.apply(_Error5, [this].concat(params)) || this;
    _this5.name = 'ConnectorConfigError';
    return _this5;
  }
  return ConnectorConfigError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

function init() {
  return _init.apply(this, arguments);
}
function _init() {
  _init = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var _yield$import, FortmaticConnector;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return import('@web3-react/fortmatic-connector');
        case 2:
          _yield$import = _context.sent;
          FortmaticConnector = _yield$import.FortmaticConnector;
          return _context.abrupt("return", {
            web3ReactConnector: function web3ReactConnector(_ref) {
              var chainId = _ref.chainId,
                apiKey = _ref.apiKey;
              if (!apiKey) {
                throw new ConnectorConfigError('The Fortmatic connector requires apiKey to be set.');
              }
              return new FortmaticConnector({
                apiKey: apiKey,
                chainId: chainId
              });
            }
          });
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _init.apply(this, arguments);
}

function init$1() {
  return _init$1.apply(this, arguments);
}
function _init$1() {
  _init$1 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var _yield$import, FrameConnector, UserRejectedRequestError;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return import('@web3-react/frame-connector');
        case 2:
          _yield$import = _context.sent;
          FrameConnector = _yield$import.FrameConnector;
          UserRejectedRequestError = _yield$import.UserRejectedRequestError;
          return _context.abrupt("return", {
            web3ReactConnector: function web3ReactConnector(_ref) {
              var chainId = _ref.chainId;
              return new FrameConnector({
                supportedChainIds: [chainId]
              });
            },
            handleActivationError: function handleActivationError(err) {
              if (err instanceof UserRejectedRequestError) {
                return new ConnectionRejectedError();
              }
              if (err.message.startsWith('JSON.parse')) {
                return new Error('There seems to be an issue when trying to connect to Frame.');
              }
              return null;
            }
          });
        case 6:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _init$1.apply(this, arguments);
}

function init$2() {
  return _init$2.apply(this, arguments);
}
function _init$2() {
  _init$2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var _yield$import, InjectedConnector, UserRejectedRequestError;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return import('@web3-react/injected-connector');
        case 2:
          _yield$import = _context.sent;
          InjectedConnector = _yield$import.InjectedConnector;
          UserRejectedRequestError = _yield$import.UserRejectedRequestError;
          return _context.abrupt("return", {
            web3ReactConnector: function web3ReactConnector(_ref) {
              var chainId = _ref.chainId;
              return new InjectedConnector({
                supportedChainIds: chainId
              });
            },
            handleActivationError: function handleActivationError(err) {
              return err instanceof UserRejectedRequestError ? new ConnectionRejectedError() : null;
            }
          });
        case 6:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _init$2.apply(this, arguments);
}

function init$3() {
  return _init$3.apply(this, arguments);
}
function _init$3() {
  _init$3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var _yield$import, PortisConnector;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return import('@web3-react/portis-connector');
        case 2:
          _yield$import = _context.sent;
          PortisConnector = _yield$import.PortisConnector;
          return _context.abrupt("return", {
            web3ReactConnector: function web3ReactConnector(_ref) {
              var chainId = _ref.chainId,
                dAppId = _ref.dAppId;
              if (!dAppId) {
                throw new ConnectorConfigError('The Portis connector requires dAppId to be set.');
              }
              return new PortisConnector({
                dAppId: dAppId,
                networks: chainId
              });
            }
          });
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _init$3.apply(this, arguments);
}

function init$4() {
  return _init$4.apply(this, arguments);
}
function _init$4() {
  _init$4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var _yield$import, ProvidedConnector, UserRejectedRequestError;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return import('@aragon/provided-connector');
        case 2:
          _yield$import = _context.sent;
          ProvidedConnector = _yield$import.ProvidedConnector;
          UserRejectedRequestError = _yield$import.UserRejectedRequestError;
          return _context.abrupt("return", {
            web3ReactConnector: function web3ReactConnector(_ref) {
              var chainId = _ref.chainId,
                provider = _ref.provider;
              return new ProvidedConnector({
                provider: provider,
                supportedChainIds: chainId
              });
            },
            handleActivationError: function handleActivationError(err) {
              return err instanceof UserRejectedRequestError ? new ConnectionRejectedError() : null;
            }
          });
        case 6:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _init$4.apply(this, arguments);
}

function init$5() {
  return _init$5.apply(this, arguments);
}
function _init$5() {
  _init$5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var _yield$import, UserRejectedRequestError, WalletConnectConnector;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return import('@web3-react/walletconnect-connector');
        case 2:
          _yield$import = _context.sent;
          UserRejectedRequestError = _yield$import.UserRejectedRequestError;
          WalletConnectConnector = _yield$import.WalletConnectConnector;
          return _context.abrupt("return", {
            web3ReactConnector: function web3ReactConnector(_ref) {
              var rpc = _ref.rpc,
                bridge = _ref.bridge,
                pollingInterval = _ref.pollingInterval;
              if (!rpc) {
                throw new ConnectorConfigError('The WalletConnect connector requires rpcUrl to be set.');
              }
              Object.values(rpc).forEach(function (url) {
                if (!/^https?:\/\//.test(url)) {
                  throw new ConnectorConfigError('The WalletConnect connector requires rpcUrl to be an HTTP URL.');
                }
                return;
              });
              return new WalletConnectConnector({
                bridge: bridge,
                pollingInterval: pollingInterval,
                qrcode: true,
                rpc: rpc
              });
            },
            handleActivationError: function handleActivationError(err) {
              return err instanceof UserRejectedRequestError ? new ConnectionRejectedError() : null;
            }
          });
        case 6:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _init$5.apply(this, arguments);
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var runtime_1 = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; };
  var undefined$1; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) });

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: true });
  defineProperty(
    GeneratorFunctionPrototype,
    "constructor",
    { value: GeneratorFunction, configurable: true }
  );
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    defineProperty(this, "_invoke", { value: enqueue });
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method;
    var method = delegate.iterator[methodName];
    if (method === undefined$1) {
      // A .throw or .return when the delegate iterator has no .throw
      // method, or a missing .next mehtod, always terminate the
      // yield* loop.
      context.delegate = null;

      // Note: ["return"] must be used for ES3 parsing compatibility.
      if (methodName === "throw" && delegate.iterator["return"]) {
        // If the delegate iterator has a return method, give it a
        // chance to clean up.
        context.method = "return";
        context.arg = undefined$1;
        maybeInvokeDelegate(delegate, context);

        if (context.method === "throw") {
          // If maybeInvokeDelegate(context) changed context.method from
          // "return" to "throw", let that override the TypeError below.
          return ContinueSentinel;
        }
      }
      if (methodName !== "return") {
        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a '" + methodName + "' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined$1;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(val) {
    var object = Object(val);
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined$1;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined$1, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined$1;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined$1;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined$1;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined$1;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined$1;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   module.exports 
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}
});

function init$6() {
  return _init$6.apply(this, arguments);
}
function _init$6() {
  _init$6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var _yield$import, WalletLinkConnector;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return import('@web3-react/walletlink-connector');
        case 2:
          _yield$import = _context.sent;
          WalletLinkConnector = _yield$import.WalletLinkConnector;
          return _context.abrupt("return", {
            web3ReactConnector: function web3ReactConnector(_ref) {
              var chainId = _ref.chainId,
                url = _ref.url,
                appName = _ref.appName,
                appLogoUrl = _ref.appLogoUrl;
              if (chainId !== 1) {
                throw new ConnectorConfigError('The WalletLink connector requires chainId to be 1.');
              }
              if (!/^https?:\/\//.test(url)) {
                throw new ConnectorConfigError('The WalletLink connector requires url to be an HTTP URL.');
              }
              return new WalletLinkConnector({
                url: url,
                appName: appName,
                appLogoUrl: appLogoUrl
              });
            }
          });
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _init$6.apply(this, arguments);
}

// NOTE: The ledger live path specify which chain and which account is used
// on the hardware wallet. This should eventually be made dynamic.
var LEDGER_LIVE_PATH = "m/44'/60'/0'/0";
var POLLING_INTERVAL = 12000;
function init$7() {
  return _init$7.apply(this, arguments);
}
function _init$7() {
  _init$7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var _yield$import, LedgerConnector;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return import('@web3-react/ledger-connector');
        case 2:
          _yield$import = _context.sent;
          LedgerConnector = _yield$import.LedgerConnector;
          return _context.abrupt("return", {
            web3ReactConnector: function web3ReactConnector(_ref) {
              var chainId = _ref.chainId,
                url = _ref.url;
              if (!url) {
                throw new ConnectorConfigError('The Ledger connector requires url to be set.');
              }
              return new LedgerConnector({
                url: url,
                chainId: chainId,
                pollingInterval: POLLING_INTERVAL,
                baseDerivationPath: LEDGER_LIVE_PATH
              });
            }
          });
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _init$7.apply(this, arguments);
}

function getConnectors(initsOrConfigs) {
  if (initsOrConfigs === void 0) {
    initsOrConfigs = {};
  }
  var connectors = {
    fortmatic: [init, null],
    frame: [init$1, null],
    injected: [init$2, null],
    portis: [init$3, null],
    provided: [init$4, null],
    walletconnect: [init$5, null],
    walletlink: [init$6, null],
    ledger: [init$7, null]
  };
  for (var _i = 0, _Object$entries = Object.entries(initsOrConfigs); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _Object$entries[_i],
      id = _Object$entries$_i[0],
      initOrConfig = _Object$entries$_i[1];
    // If initOrConfig is a function, it is an initializer.
    if (typeof initOrConfig === 'function') {
      connectors[id] = [initOrConfig, null];
      continue;
    }
    // Otherwise it is a config
    if (connectors[id]) {
      connectors[id][1] = initOrConfig;
    }
  }
  return connectors;
}

var ETH = {
  name: 'Ether',
  symbol: 'ETH',
  decimals: 18
};
var MATIC = {
  name: 'Matic Token',
  symbol: 'MATIC',
  decimals: 18
};
var AVAX = {
  name: 'Avax',
  symbol: 'AVAX',
  decimals: 9
};
var ONE = {
  name: 'ONE Token',
  symbol: 'ONE',
  decimals: 18
};
var XDAI = {
  name: 'xDAI',
  symbol: 'xDAI',
  decimals: 18
};
var BNB = {
  name: 'Binance Token',
  symbol: 'BNB',
  decimals: 18
};
var TT = {
  name: 'Thunder Token',
  symbol: 'TT',
  decimals: 18
};
var CELO = {
  name: 'Celo',
  symbol: 'CELO',
  decimals: 18
};
var METIS = {
  name: 'METIS',
  symbol: 'METIS',
  decimals: 18
};
var FTM = {
  name: 'FTM',
  symbol: 'FTM',
  decimals: 18
};
var DEV = {
  name: 'DEV',
  symbol: 'DEV',
  decimals: 18
};
var MOVR = {
  name: 'Moonriver',
  symbol: 'MOVR',
  decimals: 18
};
var GLMR = {
  name: 'Glimmer',
  symbol: 'GLMR',
  decimals: 18
};
var HECO = {
  name: 'HECO',
  symbol: 'HT',
  decimals: 18
};
var CRO = {
  name: 'CRONOS',
  symbol: 'CRO',
  decimals: 18
};
var KAVA = {
  name: 'KAVA',
  symbol: 'KAVA',
  decimals: 18
};
var CHAIN_INFORMATION = /*#__PURE__*/new Map([[1, {
  id: 1,
  nativeCurrency: ETH,
  type: 'main',
  fullName: 'Ethereum Mainnet',
  shortName: 'Ethereum',
  explorerUrl: "https://etherscan.io",
  testnet: false
}], [3, {
  id: 3,
  nativeCurrency: ETH,
  type: 'ropsten',
  fullName: 'Ropsten Testnet',
  shortName: 'Ropsten',
  explorerUrl: "https://ropsten.etherscan.io",
  testnet: true
}], [4, {
  id: 4,
  nativeCurrency: ETH,
  type: 'rinkeby',
  fullName: 'Rinkeby Testnet',
  shortName: 'Rinkeby',
  explorerUrl: "https://rinkeby.etherscan.io",
  testnet: true
}], [5, {
  id: 5,
  nativeCurrency: ETH,
  type: 'goerli',
  fullName: 'Goerli Testnet',
  shortName: 'Goerli',
  explorerUrl: "https://goerli.etherscan.io",
  testnet: true
}], [42, {
  id: 42,
  nativeCurrency: ETH,
  type: 'kovan',
  fullName: 'Kovan Testnet',
  shortName: 'Kovan',
  explorerUrl: "https://kovan.etherscan.io",
  testnet: true
}], [43112, {
  id: 43112,
  nativeCurrency: AVAX,
  type: 'avalocal',
  shortName: 'Avalanche Local',
  fullName: 'Avalanche Local',
  testnet: true
}], [43113, {
  id: 43113,
  nativeCurrency: AVAX,
  type: 'fuji',
  fullName: 'Avalanche Fuji',
  shortName: 'Fuji',
  explorerUrl: 'https://testnet.snowtrace.io/',
  testnet: true
}], [43114, {
  id: 43114,
  nativeCurrency: AVAX,
  type: 'avalanche',
  fullName: 'Avalanche Mainnet',
  shortName: 'Avalanche',
  explorerUrl: 'https://snowtrace.io/',
  testnet: false
}], [100, {
  id: 100,
  nativeCurrency: XDAI,
  type: 'xdai',
  fullName: 'xDAI',
  shortName: 'xDAI',
  explorerUrl: 'https://blockscout.com/xdai/mainnet/',
  testnet: false
}], [137, {
  id: 137,
  nativeCurrency: MATIC,
  type: 'matic',
  fullName: 'Polygon Mainnet',
  shortName: 'Polygon',
  explorerUrl: "https://polygonscan.com",
  testnet: false
}], [80001, {
  id: 80001,
  nativeCurrency: MATIC,
  type: 'mumbai',
  fullName: 'Mumbai Testnet',
  shortName: 'Mumbai',
  explorerUrl: "https://mumbai.polygonscan.com",
  testnet: true
}], [250, {
  id: 250,
  nativeCurrency: FTM,
  type: 'fantom',
  fullName: 'Fantom Opera Mainnet',
  shortName: 'FTM',
  explorerUrl: "https://ftmscan.com/",
  testnet: false
}], [1666600000, {
  id: 1666600000,
  nativeCurrency: ONE,
  type: 'harmony',
  fullName: 'Harmony ONE',
  shortName: 'Harmony',
  explorerUrl: "https://explorer.harmony.one/",
  testnet: false
}], [1666700000, {
  id: 1666700000,
  nativeCurrency: ONE,
  type: 'harmonyTest',
  fullName: 'Harmony ONE Testnet',
  shortName: 'Harmony Testnet',
  explorerUrl: "https://explorer.testnet.harmony.one/",
  testnet: true
}], [56, {
  id: 56,
  nativeCurrency: BNB,
  type: 'bsc',
  fullName: 'Binance Smart Chain',
  shortName: 'BSC',
  explorerUrl: "https://bscscan.com/",
  testnet: false
}], [97, {
  id: 97,
  nativeCurrency: BNB,
  type: 'bscTest',
  fullName: 'Binance Smart Chain Testnet',
  shortName: 'BSC Testnet',
  explorerUrl: "https://testnet.bscscan.com/",
  testnet: true
}], [108, {
  id: 108,
  nativeCurrency: TT,
  type: 'thundercore',
  fullName: 'ThunderCore Mainnet',
  shortName: 'ThunderCore',
  explorerUrl: "https://scan.thundercore.com/",
  testnet: false
}], [18, {
  id: 18,
  nativeCurrency: TT,
  type: 'thundercoreTest',
  fullName: 'ThunderCore Testnet',
  shortName: 'ThunderCore Testnet',
  explorerUrl: "https://scan-testnet.thundercore.com/",
  testnet: true
}], [421611, {
  id: 421611,
  nativeCurrency: ETH,
  type: 'arbitrumTest',
  fullName: 'Arbitrum Testnet',
  shortName: 'Arbitrum Testnet',
  explorerUrl: 'https://testnet.arbiscan.io/',
  testnet: true
}], [42161, {
  id: 42161,
  nativeCurrency: ETH,
  type: 'arbitrum',
  fullName: 'Arbitrum Mainnet',
  shortName: 'Arbitrum',
  explorerUrl: 'https://arbiscan.io/',
  testnet: false
}], [42220, {
  id: 42220,
  nativeCurrency: CELO,
  type: 'celo',
  fullName: 'Celo (Mainnet)',
  shortName: 'Celo',
  explorerUrl: 'https://explorer.celo.org/',
  testnet: false
}], [44787, {
  id: 44787,
  nativeCurrency: CELO,
  type: 'celoTest',
  fullName: 'Celo (Alfajores Testnet)',
  shortName: 'Alfajores',
  explorerUrl: 'https://alfajores-blockscout.celo-testnet.org/',
  testnet: true
}], [588, {
  id: 588,
  nativeCurrency: METIS,
  type: 'stardust',
  fullName: 'Metis Stardust Testnet',
  shortName: 'Stardust',
  explorerUrl: 'https://stardust-explorer.metis.io/',
  testnet: true
}], [1088, {
  id: 1088,
  nativeCurrency: METIS,
  type: 'andromeda',
  fullName: 'Metis Andromeda',
  shortName: 'Andromeda',
  explorerUrl: 'https://andromeda-explorer.metis.io/',
  testnet: false
}], [1313161555, {
  id: 1313161555,
  nativeCurrency: ETH,
  type: 'aurora',
  fullName: 'Aurora Testnet',
  shortName: 'AuroraTest',
  explorerUrl: 'https://explorer.testnet.aurora.dev/',
  testnet: true
}], [1313161554, {
  id: 1313161554,
  nativeCurrency: ETH,
  type: 'aurora',
  fullName: 'Aurora Mainnet',
  shortName: 'Aurora',
  explorerUrl: 'https://explorer.mainnet.aurora.dev/',
  testnet: false
}], [1287, {
  id: 1287,
  nativeCurrency: DEV,
  type: 'moonbase',
  fullName: 'moonbase',
  shortName: 'Moonbase Alphanet',
  explorerUrl: 'https://moonbase.moonscan.io/',
  testnet: true
}], [1285, {
  id: 1285,
  nativeCurrency: MOVR,
  type: 'moonriver',
  fullName: 'Moonriver',
  shortName: 'Moonriver',
  explorerUrl: 'https://moonriver.moonscan.io/',
  testnet: false
}], [1284, {
  id: 1284,
  nativeCurrency: GLMR,
  type: 'moonbeam',
  fullName: 'Moonbeam',
  shortName: 'Moonbeam',
  explorerUrl: 'https://moonbeam.moonscan.io/',
  testnet: false
}], [1337, {
  id: 1337,
  type: 'local',
  testnet: true
}], [5777, {
  id: 5777,
  type: 'ganache',
  testnet: true
}], [128, {
  id: 128,
  nativeCurrency: HECO,
  type: 'main',
  fullName: 'HECO Mainnet',
  shortName: 'HECO',
  explorerUrl: "https://hecoscan.xyz/",
  testnet: false
}], [25, {
  id: 25,
  nativeCurrency: CRO,
  type: 'main',
  fullName: 'Cronos Chain',
  shortName: 'Cronos',
  explorerUrl: "https://cronoscan.com",
  testnet: false
}], [2222, {
  id: 2222,
  nativeCurrency: KAVA,
  type: 'main',
  fullName: 'Kava EVM',
  shortName: 'KAVA',
  explorerUrl: "https://explorer.kava.io",
  testnet: false
}]]);
/**
 * This method checks whether a particular chain id is known.
 *
 * @param {number} chainId chain id to check
 * @returns {boolean} true if chain is known
 */
function isKnownChain(chainId) {
  return CHAIN_INFORMATION.has(chainId);
}
/**
 *
 * @param {number} chainId chain id to retrieve information for
 * @throws {ChainUnknownError} if chain is unknown
 * @returns {boolean} information for specified chain
 */
function getChainInformation(chainId) {
  var chainInfo = CHAIN_INFORMATION.get(chainId);
  if (!chainInfo) throw new ChainUnknownError("Unknown chain id: " + chainId);
  return chainInfo;
}
/**
 * This is a getter method to returns the chain ids of all known chains.
 *
 * @returns {number[]} array of chain Ids
 */
function getKnownChainsIds() {
  return Array.from(CHAIN_INFORMATION.keys());
}
/**
 * This is a getter method to return all information available for each known chain.
 *
 * @returns {ChainInformation | ChainType[]} An array containing information for
 * each known chain
 */
function getKnownChainInformation() {
  return Array.from(CHAIN_INFORMATION.values());
}
function getDefaultChainId() {
  return 1;
}

var chains = {
  __proto__: null,
  isKnownChain: isKnownChain,
  getChainInformation: getChainInformation,
  getKnownChainsIds: getKnownChainsIds,
  getKnownChainInformation: getKnownChainInformation,
  getDefaultChainId: getDefaultChainId
};

function isUnwrappedRpcResult(response) {
  return typeof response === 'object' && response !== null && 'jsonrpc' in response;
}
var EXPLORER_URL_TYPES = /*#__PURE__*/new Map([['block', 'block'], ['transaction', 'tx'], ['address', 'address'], ['token', 'token']]);
var blockExplorerUrl = function blockExplorerUrl(type, value, chainId) {
  if (!getKnownChainsIds().includes(chainId)) {
    return '';
  }
  if (!EXPLORER_URL_TYPES.has(type)) {
    throw new Error('type not supported.');
  }
  var domain = getChainInformation(chainId).explorerUrl;
  var typePart = EXPLORER_URL_TYPES.get(type);
  return domain + "/" + typePart + "/" + value;
};
function rpcResult(response) {
  // Some providers don’t wrap the response
  if (isUnwrappedRpcResult(response)) {
    if (response.error) {
      throw new Error(response.error);
    }
    return response.result || null;
  }
  return response || null;
}
function ethereumRequest(_x, _x2, _x3) {
  return _ethereumRequest.apply(this, arguments);
}
function _ethereumRequest() {
  _ethereumRequest = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(ethereum, method, params) {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          if (!ethereum.request) {
            _context2.next = 2;
            break;
          }
          return _context2.abrupt("return", ethereum.request({
            method: method,
            params: params
          }).then(rpcResult));
        case 2:
          if (!(ethereum.sendAsync && ethereum.selectedAddress)) {
            _context2.next = 4;
            break;
          }
          return _context2.abrupt("return", new Promise(function (resolve, reject) {
            ethereum.sendAsync({
              method: method,
              params: params,
              from: ethereum.selectedAddress,
              jsonrpc: '2.0',
              id: 0
            }, function (err, result) {
              if (err) {
                reject(err);
              } else {
                resolve(result);
              }
            });
          }).then(rpcResult));
        case 4:
          if (!ethereum.send) {
            _context2.next = 6;
            break;
          }
          return _context2.abrupt("return", ethereum.send(method, params).then(rpcResult));
        case 6:
          throw new Error('The Ethereum provider doesn’t seem to provide a request method.');
        case 7:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _ethereumRequest.apply(this, arguments);
}
function getAccountIsContract(_x4, _x5) {
  return _getAccountIsContract.apply(this, arguments);
}
function _getAccountIsContract() {
  _getAccountIsContract = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(ethereum, account) {
    var code;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return ethereumRequest(ethereum, 'eth_getCode', [account]);
        case 3:
          code = _context3.sent;
          return _context3.abrupt("return", code !== '0x');
        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          return _context3.abrupt("return", false);
        case 10:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 7]]);
  }));
  return _getAccountIsContract.apply(this, arguments);
}
function getAccountBalance(_x6, _x7) {
  return _getAccountBalance.apply(this, arguments);
}
function _getAccountBalance() {
  _getAccountBalance = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(ethereum, account) {
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          return _context4.abrupt("return", ethereumRequest(ethereum, 'eth_getBalance', [account, 'latest']));
        case 1:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return _getAccountBalance.apply(this, arguments);
}
function getBlockNumber(_x8) {
  return _getBlockNumber.apply(this, arguments);
}
function _getBlockNumber() {
  _getBlockNumber = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(ethereum) {
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          return _context5.abrupt("return", ethereumRequest(ethereum, 'eth_blockNumber', []));
        case 1:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return _getBlockNumber.apply(this, arguments);
}
function pollEvery(fn, delay) {
  var timer; // can be TimeOut (Node) or number (web)
  var stop = false;
  var poll = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request, onResult) {
      var result;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return request();
          case 2:
            result = _context.sent;
            if (!stop) {
              onResult(result);
              timer = setTimeout(poll.bind(null, request, onResult), delay);
            }
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function poll(_x9, _x10) {
      return _ref.apply(this, arguments);
    };
  }();
  return function () {
    var _fn = fn.apply(void 0, arguments),
      request = _fn.request,
      onResult = _fn.onResult;
    stop = false;
    poll(request, onResult);
    return function () {
      stop = true;
      clearTimeout(timer);
    };
  };
}
var ACCOUNT_KEY = 'LAST_ACTIVE_ACCOUNT';
var CONNECTOR_KEY = 'LAST_WALLET_CONNECTOR';
var setLastActiveAccount = function setLastActiveAccount(account) {
  var _localStorage;
  (_localStorage = localStorage) == null || _localStorage.setItem(ACCOUNT_KEY, account);
};
var clearLastActiveAccount = function clearLastActiveAccount() {
  var _localStorage2;
  (_localStorage2 = localStorage) == null || _localStorage2.removeItem(ACCOUNT_KEY);
};
var getLastActiveAccount = function getLastActiveAccount() {
  var _localStorage3;
  return (_localStorage3 = localStorage) == null ? void 0 : _localStorage3.getItem(ACCOUNT_KEY);
};
var setLastConnector = function setLastConnector(connector) {
  var _localStorage4;
  (_localStorage4 = localStorage) == null || _localStorage4.setItem(CONNECTOR_KEY, connector);
};
var getLastConnector = function getLastConnector() {
  var _localStorage5;
  return (_localStorage5 = localStorage) == null ? void 0 : _localStorage5.getItem(CONNECTOR_KEY);
};

const img = require('./Cipher.png');

const img$1 = require('./Fortmatic.svg');

const img$2 = require('./Frame.png');

const img$3 = require('./Metamask.png');

const img$4 = require('./Portis.svg');

const img$5 = require('./Status.png');

const img$6 = require('./wallet.svg');

const img$7 = require('./walletconnect.png');

function isElectron() {
  // See https://github.com/electron/electron/issues/2288
  return typeof navigator === 'object' && typeof navigator.userAgent === 'string' && navigator.userAgent.indexOf('Electron') >= 0;
}
// See the corresponding prop type, EthereumProviderType, in prop-types.js.
var PROVIDERS = /*#__PURE__*/new Map( /*#__PURE__*/[{
  id: 'frame',
  name: 'Frame',
  type: 'Desktop',
  image: img$2,
  strings: {
    'your Ethereum wallet': 'Frame'
  }
}, {
  id: 'metamask',
  name: 'Metamask',
  type: 'Desktop',
  image: img$3,
  strings: {
    'your Ethereum wallet': 'Metamask'
  }
}, {
  id: 'status',
  name: 'Status',
  type: 'Mobile',
  image: img$5,
  strings: {
    'your Ethereum wallet': 'Status'
  }
}, {
  id: 'cipher',
  name: 'Cipher',
  type: 'Mobile',
  image: img,
  strings: {
    'your Ethereum wallet': 'Cipher'
  }
}, {
  id: 'fortmatic',
  name: 'Fortmatic',
  type: 'Any',
  image: img$1,
  strings: {
    'your Ethereum wallet': 'Fortmatic'
  }
}, {
  id: 'portis',
  name: 'Portis',
  type: 'Any',
  image: img$4,
  strings: {
    'your Ethereum wallet': 'Portis'
  }
}, {
  id: 'walletconnect',
  name: 'WalletConnect',
  type: 'Any',
  image: img$7,
  strings: {
    'your Ethereum wallet': 'WalletConnect'
  }
}, {
  id: 'unknown',
  name: 'Unknown',
  type: 'Desktop',
  image: img$6,
  strings: {
    'your Ethereum wallet': 'your wallet'
  }
}].map(function (provider) {
  return [provider.id, provider];
}));
// Get a providers object for a given ID.
function getProvider(providerId) {
  return PROVIDERS.get(providerId);
}
// Get a string that depends on the current Ethereum provider.
// The default string is used as an identifier (à la gettext).
function getProviderString(string, providerId) {
  if (providerId === void 0) {
    providerId = 'unknown';
  }
  var provider = getProvider(providerId);
  return provider && provider.strings[string] || string;
}
// Get an identifier for the provider, if it can be detected.
function identifyProvider(provider) {
  if (provider && isElectron()) {
    return 'frame';
  }
  if (provider && provider.isMetaMask) {
    return 'metamask';
  }
  return 'unknown';
}
// Get a provider from its useWallet() identifier.
function getProviderFromUseWalletId(id) {
  if (id === 'injected' || id === 'provided') {
    return getProvider(identifyProvider(window.ethereum)) || getProvider('unknown');
  }
  return getProvider(id) || getProvider('unknown');
}

// Only watch block numbers, and return functions allowing to subscribe to it.
function useWatchBlockNumber(_ref) {
  var ethereum = _ref.ethereum,
    pollBlockNumberInterval = _ref.pollBlockNumberInterval;
  var lastBlockNumber = useRef(null);
  // Using listeners lets useWallet() decide if it wants to expose the block
  // number, which implies to re-render whenever the block number updates.
  var blockNumberListeners = useRef(new Set());
  var addBlockNumberListener = useCallback(function (cb) {
    if (blockNumberListeners.current.has(cb)) {
      return;
    }
    // Immediately send the block number to the new listener
    cb(lastBlockNumber.current);
    // Add the listener
    blockNumberListeners.current.add(cb);
  }, []);
  var removeBlockNumberListener = useCallback(function (cb) {
    blockNumberListeners.current["delete"](cb);
  }, []);
  // Update the block number and broadcast it to the listeners
  var updateBlockNumber = useCallback(function (blockNumber) {
    if (lastBlockNumber.current === blockNumber) {
      return;
    }
    lastBlockNumber.current = blockNumber;
    blockNumberListeners.current.forEach(function (cb) {
      return cb(blockNumber);
    });
  }, []);
  useEffect(function () {
    if (!ethereum) {
      updateBlockNumber(null);
      return;
    }
    var cancel = false;
    var pollBlockNumber = pollEvery(function () {
      return {
        request: function request() {
          return getBlockNumber(ethereum);
        },
        onResult: function onResult(latestBlockNumber) {
          if (!cancel) {
            updateBlockNumber(latestBlockNumber === null ? null : JSBI.BigInt(latestBlockNumber).toString());
          }
        }
      };
    }, pollBlockNumberInterval);
    var stopPollingBlockNumber = pollBlockNumber();
    return function () {
      cancel = true;
      stopPollingBlockNumber();
    };
  }, [ethereum, pollBlockNumberInterval, updateBlockNumber]);
  return {
    addBlockNumberListener: addBlockNumberListener,
    removeBlockNumberListener: removeBlockNumberListener
  };
}

var NO_BALANCE = '-1';
function useWalletBalance(_ref) {
  var account = _ref.account,
    ethereum = _ref.ethereum,
    pollBalanceInterval = _ref.pollBalanceInterval;
  var _useState = useState(NO_BALANCE),
    balance = _useState[0],
    setBalance = _useState[1];
  useEffect(function () {
    if (!account || !ethereum) {
      return;
    }
    var cancel = false;
    // Poll wallet balance
    var pollBalance = pollEvery(function (account, ethereum, onUpdate) {
      var lastBalance = NO_BALANCE;
      return {
        request: function request() {
          return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  return _context.abrupt("return", getAccountBalance(ethereum, account).then(function (value) {
                    return value ? JSBI.BigInt(value).toString() : NO_BALANCE;
                  })["catch"](function () {
                    return NO_BALANCE;
                  }));
                case 1:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }))();
        },
        onResult: function onResult(balance) {
          if (!cancel && balance !== lastBalance) {
            lastBalance = balance;
            onUpdate(balance);
          }
        }
      };
    }, pollBalanceInterval);
    // start polling balance every x time
    var stopPollingBalance = pollBalance(account, ethereum, setBalance);
    return function () {
      cancel = true;
      stopPollingBalance();
      setBalance(NO_BALANCE);
    };
  }, [account, ethereum, pollBalanceInterval]);
  return balance;
}

var UseWalletContext = /*#__PURE__*/createContext(null);
// CONTEXT CONSUMER ============================================================
function useWallet() {
  var walletContext = useContext(UseWalletContext);
  if (walletContext === null) {
    throw new Error('useWallet() can only be used inside of <UseWalletProvider />, ' + 'please declare it at a higher level.');
  }
  var getBlockNumber = useGetBlockNumber();
  var wallet = walletContext.wallet;
  return useMemo(function () {
    return _extends({}, wallet, {
      getBlockNumber: getBlockNumber
    });
  }, [getBlockNumber, wallet]);
}
function useGetBlockNumber() {
  var walletContext = useContext(UseWalletContext);
  var _useState = useState(null),
    blockNumber = _useState[0],
    setBlockNumber = _useState[1];
  var requestedBlockNumber = useRef(false);
  var getBlockNumber = useCallback(function () {
    if (walletContext === null) {
      return null;
    }
    requestedBlockNumber.current = true;
    walletContext.addBlockNumberListener(setBlockNumber);
    return blockNumber;
  }, [walletContext, blockNumber]);
  useEffect(function () {
    if (!requestedBlockNumber.current || walletContext === null) {
      return;
    }
    walletContext.addBlockNumberListener(setBlockNumber);
    return function () {
      walletContext.removeBlockNumberListener(setBlockNumber);
    };
  }, [requestedBlockNumber, walletContext]);
  return getBlockNumber;
}
UseWalletProvider.propTypes = {
  children: node,
  connectors: /*#__PURE__*/objectOf(object),
  autoConnect: bool,
  pollBalanceInterval: number,
  pollBlockNumberInterval: number
};
UseWalletProvider.defaultProps = {
  connectors: {},
  autoConnect: false,
  pollBalanceInterval: 2000,
  pollBlockNumberInterval: 5000
};
function UseWalletProvider(_ref) {
  var children = _ref.children,
    connectorsInitsOrConfigs = _ref.connectors,
    autoConnect = _ref.autoConnect,
    pollBalanceInterval = _ref.pollBalanceInterval,
    pollBlockNumberInterval = _ref.pollBlockNumberInterval;
  var walletContext = useContext(UseWalletContext);
  if (walletContext !== null) {
    throw new Error('<UseWalletProvider /> has already been declared.');
  }
  var _useState2 = useState(null),
    connector = _useState2[0],
    setConnector = _useState2[1];
  var _useState3 = useState(null),
    error = _useState3[0],
    setError = _useState3[1];
  var _useState4 = useState(null),
    type = _useState4[0],
    setType = _useState4[1];
  var _useState5 = useState('disconnected'),
    status = _useState5[0],
    setStatus = _useState5[1];
  var web3ReactContext = useWeb3React();
  var activationId = useRef(0);
  var account = web3ReactContext.account,
    web3ChainId = web3ReactContext.chainId,
    ethereum = web3ReactContext.library,
    web3Error = web3ReactContext.error;
  var balance = useWalletBalance({
    account: account,
    ethereum: ethereum,
    pollBalanceInterval: pollBalanceInterval
  });
  var _useWatchBlockNumber = useWatchBlockNumber({
      ethereum: ethereum,
      pollBlockNumberInterval: pollBlockNumberInterval
    }),
    addBlockNumberListener = _useWatchBlockNumber.addBlockNumberListener,
    removeBlockNumberListener = _useWatchBlockNumber.removeBlockNumberListener;
  // Combine the user-provided connectors with the default ones (see connectors.js).
  var connectors = useMemo(function () {
    return getConnectors(connectorsInitsOrConfigs);
  }, [connectorsInitsOrConfigs]);
  var chainId = useMemo(function () {
    return web3ChainId ? web3ChainId : getDefaultChainId();
  }, [web3ChainId]);
  var reset = useCallback(function () {
    if (web3ReactContext.active) {
      web3ReactContext.deactivate();
    }
    clearLastActiveAccount();
    setConnector(null);
    setError(null);
    setStatus('disconnected');
  }, [web3ReactContext]);
  // if the user switched networks on the wallet itself
  // return unsupported error.
  useMemo(function () {
    if (web3Error instanceof UnsupportedChainIdError) {
      setStatus('error');
      setError(new ChainUnsupportedError(web3Error.message));
    }
  }, [web3Error]);
  var connect = useCallback( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(connectorId) {
      var id, _ref3, connectorInit, connectorConfig, connector, web3ReactConnector, _account, handledError;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (connectorId === void 0) {
              connectorId = 'injected';
            }
            // Prevent race conditions between connections by using an external ID.
            id = ++activationId.current;
            reset();
            // Check if another connection has happened right after deactivate().
            if (!(id !== activationId.current)) {
              _context.next = 5;
              break;
            }
            return _context.abrupt("return");
          case 5:
            if (connectors[connectorId]) {
              _context.next = 9;
              break;
            }
            setStatus('error');
            setError(new ConnectorUnsupportedError(connectorId));
            return _context.abrupt("return");
          case 9:
            // If no connection happens, we're in the right context and can safely update
            // the connection stage status
            setStatus('connecting');
            _ref3 = connectors[connectorId] || [], connectorInit = _ref3[0], connectorConfig = _ref3[1]; // Initialize the (useWallet) connector if it exists.
            _context.next = 13;
            return connectorInit == null ? void 0 : connectorInit();
          case 13:
            connector = _context.sent;
            // Initialize the web3-react connector if it exists.
            web3ReactConnector = connector == null || connector.web3ReactConnector == null ? void 0 : connector.web3ReactConnector(_extends({}, connectorConfig || {}));
            if (web3ReactConnector) {
              _context.next = 19;
              break;
            }
            setStatus('error');
            setError(new ConnectorUnsupportedError(connectorId));
            return _context.abrupt("return");
          case 19:
            _context.prev = 19;
            // TODO: there is no way to prevent an activation to complete, but we
            // could reconnect to the last provider the user tried to connect to.
            setConnector(connectorId);
            _context.next = 23;
            return web3ReactContext.activate(web3ReactConnector, undefined, true);
          case 23:
            setLastConnector(connectorId);
            if (!(connectorId === 'injected')) {
              _context.next = 30;
              break;
            }
            _context.next = 27;
            return web3ReactConnector.getAccount();
          case 27:
            _account = _context.sent;
            _account && setLastActiveAccount(_account);
            web3ReactConnector.getProvider().then(function (provider) {
              provider.on('accountsChanged', function (accounts) {
                setLastActiveAccount(accounts[0]);
              });
            });
          case 30:
            setStatus('connected');
            _context.next = 48;
            break;
          case 33:
            _context.prev = 33;
            _context.t0 = _context["catch"](19);
            if (!(id !== activationId.current)) {
              _context.next = 37;
              break;
            }
            return _context.abrupt("return");
          case 37:
            // If not, the error has been thrown during the current connection attempt,
            // so it's correct to indicate that there has been an error
            setConnector(null);
            setStatus('error');
            if (!(_context.t0 instanceof UnsupportedChainIdError)) {
              _context.next = 42;
              break;
            }
            setError(new ChainUnsupportedError(_context.t0.message));
            return _context.abrupt("return");
          case 42:
            if (!connector.handleActivationError) {
              _context.next = 47;
              break;
            }
            handledError = connector.handleActivationError(_context.t0);
            if (!handledError) {
              _context.next = 47;
              break;
            }
            setError(handledError);
            return _context.abrupt("return");
          case 47:
            // Otherwise, set to state the received error
            setError(_context.t0);
          case 48:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[19, 33]]);
    }));
    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }(), [connectors, reset, web3ReactContext]);
  useEffect(function () {
    if (!autoConnect) {
      return;
    }
    var lastConnector = getLastConnector();
    var lastActiveAccount = getLastActiveAccount();
    if (lastActiveAccount && lastConnector === 'injected') {
      var isInjectedAvailable = Object.keys(connectors).some(function (key) {
        return key === 'injected';
      });
      if (isInjectedAvailable) {
        connect();
      }
    }
    //eslint-disable-next-line
  }, []);
  useEffect(function () {
    if (!account || !ethereum) {
      return;
    }
    var cancel = false;
    setType(null);
    getAccountIsContract(ethereum, account).then(function (isContract) {
      if (!cancel) {
        setStatus('connected');
        setType(isContract ? 'contract' : 'normal');
      }
    });
    return function () {
      cancel = true;
      setStatus('disconnected');
      setType(null);
    };
  }, [account, ethereum]);
  var wallet = useMemo(function () {
    var networkName = 'Unknown';
    try {
      var _chains$getChainInfor;
      networkName = (_chains$getChainInfor = getChainInformation(chainId)) == null ? void 0 : _chains$getChainInfor.type;
    } catch (e) {
      console.log('Unsupported network deteƒcted');
    }
    return {
      _web3ReactContext: web3ReactContext,
      account: account || null,
      balance: balance,
      chainId: chainId,
      connect: connect,
      connector: connector,
      connectors: connectors,
      error: error,
      ethereum: ethereum,
      isConnected: function isConnected() {
        return status === 'connected';
      },
      networkName: networkName,
      providerInfo: connector ? getProviderFromUseWalletId(connector) : getProviderFromUseWalletId('unknown'),
      reset: reset,
      status: status,
      type: type
    };
  }, [account, balance, chainId, connect, connector, connectors, error, ethereum, type, reset, status, web3ReactContext]);
  return createElement(UseWalletContext.Provider, {
    value: {
      addBlockNumberListener: addBlockNumberListener,
      pollBalanceInterval: pollBalanceInterval,
      pollBlockNumberInterval: pollBlockNumberInterval,
      removeBlockNumberListener: removeBlockNumberListener,
      wallet: wallet
    }
  }, children);
}
UseWalletProviderWrapper.propTypes = UseWalletProvider.propTypes;
UseWalletProviderWrapper.defaultProps = UseWalletProvider.defaultProps;
function UseWalletProviderWrapper(props) {
  return createElement(Web3ReactProvider, {
    getLibrary: function getLibrary(ethereum) {
      return ethereum;
    }
  }, createElement(UseWalletProvider, Object.assign({}, props)));
}

export { ChainUnsupportedError, ConnectionRejectedError, ConnectorUnsupportedError, UseWalletProviderWrapper as UseWalletProvider, blockExplorerUrl, chains, getLastActiveAccount, getProviderFromUseWalletId, getProviderString, useWallet };
//# sourceMappingURL=index.js.map
