"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.page = exports.model = void 0;

var _assert = _interopRequireDefault(require("assert"));

var _path = require("path");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

const model = api => {
  const Generator = api.Generator,
        paths = api.paths,
        config = api.config;
  return class Model extends Generator {
    writing() {
      const _this$args = _slicedToArray(this.args, 2),
            name = _this$args[0],
            dir = _this$args[1];

      const absTemplatePath = (0, _path.join)(__dirname, '../templates');
      (0, _assert.default)(name, 'Name required');
      (0, _assert.default)(dir, 'Dir required');
      this.fs.copyTpl((0, _path.join)(absTemplatePath, 'model.js'), (0, _path.join)(paths.absSrcPath, dir, 'models', `${name}.js`), {
        name
      });
    }

  };
};

exports.model = model;

const page = api => {
  const Generator = api.Generator,
        paths = api.paths,
        config = api.config;
  return class Page extends Generator {
    writing() {
      const _this$args2 = _slicedToArray(this.args, 2),
            name = _this$args2[0],
            dir = _this$args2[1];

      const absTemplatePath = (0, _path.join)(__dirname, '../templates');
      (0, _assert.default)(name, 'Name required');
      (0, _assert.default)(dir, 'Dir required');
      this.fs.copyTpl((0, _path.join)(absTemplatePath, 'page.js'), (0, _path.join)(paths.absSrcPath, dir, `${name}.js`), {
        name
      });
      this.fs.copyTpl((0, _path.join)(absTemplatePath, 'page.less'), (0, _path.join)(paths.absSrcPath, dir, `${name}.less`), {
        name
      });
    }

  };
};

exports.page = page;