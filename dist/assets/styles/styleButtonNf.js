"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _reactNative = require("react-native");

var styles = _reactNative.StyleSheet.create({
  btnPrimary: {
    backgroundColor: '#ffbf43',
    padding: 15,
    borderRadius: 50,
    marginVertical: 10,
    marginHorizontal: 'auto',
    shadowColor: '#171717',
    shadowOffset: {
      width: -2,
      height: 4
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    width: _reactNative.Platform.OS === 'web' ? '100%' : null
  },
  btnText: {
    fontSize: _reactNative.Platform.OS === 'web' ? 18 : 14,
    color: '#fff',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {
      width: 1,
      height: 1
    }
  },
  CreateLobbyContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
    // width: Platform.OS === 'web' ?'50%': '100%',
    width: '100%',
    height: '100%'
  }
});

exports.styles = styles;