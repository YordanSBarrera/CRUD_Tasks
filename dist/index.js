"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _config = require("./config");

var _app = _interopRequireDefault(require("./app"));

require("./database");

_app["default"].listen(_config.PORT);

console.log("server on port ", _config.PORT);