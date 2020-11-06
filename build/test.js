"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fnReact = void 0;

var _foo = _interopRequireDefault(require("./foo.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var fnReact = function fnReact(props) {
  return /*#__PURE__*/React.createElement("div", {
    id: "foo"
  });
};

exports.fnReact = fnReact;