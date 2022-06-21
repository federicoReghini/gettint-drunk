"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactNativeWeb = require("react-native-web");

var _styleButtonNf = require("../../assets/styles/styleButtonNf");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// native components

/**
 * Button Custom with 3 props
 * @param  {string} title
 * @param  {func} onPress
 * @param  {boolean} isDisabled
 */
var ButtonNf = function ButtonNf(_ref) {
  var title = _ref.title,
      onPress = _ref.onPress,
      isDisabled = _ref.isDisabled;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNativeWeb.Pressable, {
    disabled: isDisabled,
    accessibilityRole: "button",
    onPress: onPress,
    style: _styleButtonNf.styles.btn
  }, /*#__PURE__*/_react.default.createElement(_reactNativeWeb.Text, {
    style: _styleButtonNf.styles.btnText
  }, title)));
};

ButtonNf.defaultProps = {
  title: 'btnName',
  isDisabled: false
};
ButtonNf.propTypes = {
  title: _propTypes.default.string,
  isDisabled: _propTypes.default.bool,
  onPress: _propTypes.default.func
};
var _default = ButtonNf;
exports.default = _default;