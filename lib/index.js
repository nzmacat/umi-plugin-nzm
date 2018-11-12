"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _path = require("path");

var _generator = require("./generator");

var _default = (api, opts = {}) => {
  api.registerGenerator('nzm:model', {
    Generator: (0, _generator.model)(api)
  });
  api.registerGenerator('nzm:page', {
    Generator: (0, _generator.page)(api)
  });
};

exports.default = _default;