"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactNative = require("react-native");

var _genericStyles = require("../../assets/styles/genericStyles");

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
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _genericStyles.styles.genericContainer
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Switch, {
    onValueChange: onValueChange,
    activeThumbColor: "#939393",
    activeTrackColor: "#ffbf43",
    thumbColor: "#ffbf43",
    trackColor: "#939393",
    value: isOn,
    style: _genericStyles.styles.genericMt
  }), isOn ? /*#__PURE__*/_react.default.createElement(_reactNative.Text, null, "Public") : /*#__PURE__*/_react.default.createElement(_reactNative.Text, null, "Private"));
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