"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = LobbyContainer;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _UserContainer = _interopRequireDefault(require("./UserContainer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bgImage = require('../../assets/bgImage.png');

function LobbyContainer() {
  var generateTestUser = function generateTestUser() {
    var arrayTmp = [];

    for (var index = 0; index < 7; index++) {
      arrayTmp.push( /*#__PURE__*/_react.default.createElement(_reactNative.View, null));
    }

    return arrayTmp;
  };

  return /*#__PURE__*/_react.default.createElement(_reactNative.ImageBackground, {
    source: bgImage,
    style: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '100vw',
      position: 'relative'
    },
    resizeMode: "cover"
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      position: 'absolute',
      backgroundColor: 'white',
      height: '33%',
      width: '75%',
      top: '43%',
      left: '10%'
    }
  }));
}