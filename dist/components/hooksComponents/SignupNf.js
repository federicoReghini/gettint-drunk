"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _reactNativeWeb = require("react-native-web");

var _validation = require("../../utils/validation");

var _styleSignupLogin = require("../../assets/styles/styleSignupLogin");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var initState = {
  isDisable: true
};
var formData = {
  name: '',
  nickname: '',
  email: '',
  password: '',
  confirmPassword: ''
};

var SignupNf = function SignupNf() {
  var _useState = (0, _react.useState)(initState),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var handleChange = function handleChange(property) {
    return function (e) {
      var newState = Object.assign({}, state);

      if (formData.password === formData.confirmPassword && (0, _validation.checkMail)(formData.email)) {
        newState.isDisable = false;
      } else {
        newState.isDisable = true;
      }

      setState(_objectSpread(_objectSpread({}, state), {}, {
        isDisable: newState.isDisable
      }));
      formData[property] = e.target.value;
    };
  };

  var handleSubmit = function handleSubmit() {
    // api post
    console.log(formData);
  };

  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styleSignupLogin.styles.container
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _styleSignupLogin.styles.title
  }, "Sign up"), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styleSignupLogin.styles.inputContainer
  }, /*#__PURE__*/_react.default.createElement(_reactNativeWeb.TextInput, {
    style: _styleSignupLogin.styles.textInput,
    onChange: handleChange('name'),
    placeholder: 'Insert name'
  }), /*#__PURE__*/_react.default.createElement(_reactNativeWeb.TextInput, {
    style: _styleSignupLogin.styles.textInput,
    onChange: handleChange('nickname'),
    placeholder: 'Insert nickname'
  }), /*#__PURE__*/_react.default.createElement(_reactNativeWeb.TextInput, {
    style: _styleSignupLogin.styles.textInput,
    onChange: handleChange('email'),
    placeholder: 'Insert email'
  }), /*#__PURE__*/_react.default.createElement(_reactNativeWeb.TextInput, {
    style: _styleSignupLogin.styles.textInput,
    secureTextEntry: true,
    onChange: handleChange('password'),
    placeholder: 'Insert password'
  }), /*#__PURE__*/_react.default.createElement(_reactNativeWeb.TextInput, {
    style: _styleSignupLogin.styles.textInput,
    secureTextEntry: true,
    onChange: handleChange('confirmPassword'),
    placeholder: 'Insert confirm password'
  })), /*#__PURE__*/_react.default.createElement(_reactNativeWeb.Button, {
    title: 'Sign up',
    style: _styleSignupLogin.styles.btn,
    disabled: state.isDisable,
    onPress: handleSubmit
  }));
};

var _default = SignupNf;
exports.default = _default;