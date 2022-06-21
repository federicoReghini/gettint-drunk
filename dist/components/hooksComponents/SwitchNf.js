"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactNativeWeb = require("react-native-web");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// native components

/**
 * switch custom
 * @param  {boolean} isOn
 * @param  {function} onValueChange
 */
var SwitchNf = function SwitchNf(_ref) {
  var isOn = _ref.isOn,
      onValueChange = _ref.onValueChange;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNativeWeb.Switch, {
    onValueChange: onValueChange,
    activeThumbColor: "#fff",
    activeTrackColor: "#ffbf43",
    thumbColor: "#FAFAFA",
    trackColor: "#939393",
    value: isOn
  }));
};

SwitchNf.defaultProps = {
  isOn: false
};
SwitchNf.propTypes = {
  isOn: _propTypes.default.bool,
  onValueChange: _propTypes.default.func
};
var _default = SwitchNf;
exports.default = _default;