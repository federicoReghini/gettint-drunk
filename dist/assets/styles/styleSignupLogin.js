"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _reactNative = require("react-native");

var styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh'
  },
  title: {
    margin: 20
  },
  inputContainer: {
    marginBottom: 20
  },
  btn: {
    borderRadius: 20
  },
  textInput: {
    margin: 10,
    textAlign: 'center'
  }
});

exports.styles = styles;