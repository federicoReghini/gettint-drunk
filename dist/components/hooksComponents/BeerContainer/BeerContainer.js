"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = BeerContainer;

var _react = _interopRequireDefault(require("react"));

var _reactNativeWeb = require("react-native-web");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var beerIcon = require('../../../assets/img/icon/birra.png');

var shotIcon = require('../../../assets/img/icon/shot.png');

function BeerContainer(props) {
  var scoreIsDecimal = {
    cleanScore: props.score % 1 === 0 ? props.score : props.score - 0.5,
    isDecimal: props.score % 1 === 0 ? false : true
  };

  var generateFirstSeriesOfBeer = function generateFirstSeriesOfBeer() {
    var arrayContainer = [];

    for (var index = 0; index < (scoreIsDecimal.cleanScore > 4 ? 4 : scoreIsDecimal.cleanScore); index++) {
      arrayContainer.push( /*#__PURE__*/_react.default.createElement(_reactNativeWeb.Image, {
        key: index,
        source: beerIcon
      }));
    }

    return arrayContainer;
  };

  var generateSecondtSeriesOfBeer = function generateSecondtSeriesOfBeer() {
    var arrayContainer = [];

    for (var index = 5; index <= scoreIsDecimal.cleanScore; index++) {
      arrayContainer.push( /*#__PURE__*/_react.default.createElement(_reactNativeWeb.Image, {
        key: index,
        source: beerIcon
      }));
    }

    return arrayContainer;
  };

  return /*#__PURE__*/_react.default.createElement(_reactNativeWeb.View, null, /*#__PURE__*/_react.default.createElement(_reactNativeWeb.View, null, /*#__PURE__*/_react.default.createElement(_reactNativeWeb.View, null, generateFirstSeriesOfBeer()), scoreIsDecimal.cleanScore > 4 && /*#__PURE__*/_react.default.createElement(_reactNativeWeb.View, null, generateSecondtSeriesOfBeer())), scoreIsDecimal.isDecimal && /*#__PURE__*/_react.default.createElement(_reactNativeWeb.View, null, /*#__PURE__*/_react.default.createElement(_reactNativeWeb.Image, {
    source: shotIcon
  })));
}