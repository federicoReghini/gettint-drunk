"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _reactNative = require("react-native");

var styles = _reactNative.StyleSheet.create({
  genericContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  genericContainerFlex1: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh'
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