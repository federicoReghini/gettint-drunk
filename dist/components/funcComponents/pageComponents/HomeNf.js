"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _genericStyles = require("../../../assets/styles/genericStyles");

var _ButtonNf = _interopRequireDefault(require("../../hooksComponents/ButtonNf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// native components

/**
 * home page components for seven and half game
 * @param  {function} onQuickMatch
 * @param  {function} onCreateLobby
 * @param  {function} onLeaderBoard
 */
var HomeNf = function HomeNf(_ref) {
  var onQuickMatch = _ref.onQuickMatch,
      onCreateLobby = _ref.onCreateLobby,
      onLeaderBoard = _ref.onLeaderBoard;
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _genericStyles.styles.genericContainerFlex1
  }, /*#__PURE__*/_react.default.createElement(_ButtonNf.default, {
    title: 'Quick match',
    onPress: onQuickMatch
  }), /*#__PURE__*/_react.default.createElement(_ButtonNf.default, {
    title: 'create lobby',
    onPress: onCreateLobby
  }), /*#__PURE__*/_react.default.createElement(_ButtonNf.default, {
    title: 'Leader board',
    onPress: onLeaderBoard
  }));
};

var _default = HomeNf;
exports.default = _default;