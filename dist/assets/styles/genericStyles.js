"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _reactNativeWeb = require("react-native-web");

var styles = _reactNativeWeb.StyleSheet.create({
  genericContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  txtc: {
    textAlign: 'center'
  },
  genericMt: {
    marginTop: 10
  },
  mH: {
    marginHorizontal: 'auto'
  },
  pH: {
    // paddingHorizontal: 20
    padding: 20
  },
  flexR: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingVertical: 10
  }
});

exports.styles = styles;