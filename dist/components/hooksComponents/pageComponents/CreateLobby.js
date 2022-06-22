"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _styleButtonNf = require("../../../assets/styles/styleButtonNf");

var _ButtonNf = _interopRequireDefault(require("../ButtonNf"));

var _SwitchNf = _interopRequireDefault(require("../SwitchNf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  isOn: false,
  isModalVisible: false,
  players: [{
    id: 0,
    nickname: 'fad'
  }, {
    id: 1,
    nickname: 'dasd'
  }, {
    id: 2,
    nickname: 'faasdffdd'
  }, {
    id: 3,
    nickname: 'sdfs'
  }]
};
/**
 * PageComponents for createLobby
 * @param  {object} user
 * @param  {Array[object]} listOfPlayers
 * @param  {function} onTapStartGame Function to handle the start of the game. There must be at least 2 players(yourself and one more + cpu)
 */

var CreateLobby = function CreateLobby(_ref) {
  var user = _ref.user,
      listOfPlayers = _ref.listOfPlayers,
      onTapStartGame = _ref.onTapStartGame;

  var _useState = (0, _react.useState)(initState),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];
  /**
   * Function for add player to state.players if they weren't add yet
   * @param  {object} player
   */


  var onTapAddPlayers = function onTapAddPlayers(player) {
    return function () {
      var _newState$players, _newState$players2;

      var newState = Object.assign({}, state);
      var FIND = (_newState$players = newState.players) === null || _newState$players === void 0 ? void 0 : _newState$players.some(function (_ref2) {
        var nickname = _ref2.nickname;
        return (player === null || player === void 0 ? void 0 : player.nickname) === nickname;
      });
      if (FIND) return;
      (_newState$players2 = newState.players) === null || _newState$players2 === void 0 ? void 0 : _newState$players2.push(player);
      setState(_objectSpread({}, newState));
    };
  };
  /**
   * functin for controll if conditions are true for start the game
   */


  var onTapGameStart = function onTapGameStart() {
    var _state$players;

    if ((state === null || state === void 0 ? void 0 : (_state$players = state.players) === null || _state$players === void 0 ? void 0 : _state$players.length) >= 2) {
      onTapStartGame();
    }
  };
  /**
   * set a boolean value to his opposite
   * @param  {string} property
   */


  var onHandleChange = function onHandleChange(property) {
    return function () {
      setState(_objectSpread(_objectSpread({}, state), {}, _defineProperty({}, property, !state[property])));
    };
  };
  /**
   * make a map of the player coming form server and onPress add them to state.players
   * @param  {object} player
   * @param  {number} key
   */


  var playerList = function playerList(player, key) {
    return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      key: "".concat(key, "-").concat(player === null || player === void 0 ? void 0 : player.id)
    }, /*#__PURE__*/_react.default.createElement(_ButtonNf.default, {
      title: player === null || player === void 0 ? void 0 : player.nickname,
      onPress: onTapAddPlayers(player)
    }));
  };

  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styleButtonNf.styles.CreateLobbyContainer
  }, /*#__PURE__*/_react.default.createElement(_ButtonNf.default, {
    title: user === null || user === void 0 ? void 0 : user.nickname
  }), /*#__PURE__*/_react.default.createElement(_ButtonNf.default, {
    title: "Add players",
    onPress: onHandleChange('isModalVisible')
  }), /*#__PURE__*/_react.default.createElement(_SwitchNf.default, {
    isOn: state === null || state === void 0 ? void 0 : state.isOn,
    onValueChange: onHandleChange('isOn')
  }), /*#__PURE__*/_react.default.createElement(_ButtonNf.default, {
    title: "Start game",
    onPress: onTapGameStart
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Modal, {
    transparent: false,
    visible: state === null || state === void 0 ? void 0 : state.isModalVisible
  }, (listOfPlayers === null || listOfPlayers === void 0 ? void 0 : listOfPlayers.length) > 0 && listOfPlayers.map(playerList)));
};

var _default = CreateLobby;
exports.default = _default;