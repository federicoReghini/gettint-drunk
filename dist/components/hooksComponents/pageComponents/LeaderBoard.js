"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _styleLeaderBoard = require("../../../assets/styles/styleLeaderBoard");

var _birra = _interopRequireDefault(require("../../../assets/img/icon/birra.png"));

var _futuramaship = _interopRequireDefault(require("../../../assets/img/icon/futuramaship.png"));

var _leaderboardbg = _interopRequireDefault(require("../../../assets/img/background/leaderboardbg.jpg"));

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
  players: [{
    id: 0,
    nickname: 'Federico',
    score: 200
  }, {
    id: 1,
    nickname: 'Nicola',
    score: 400
  }, {
    id: 2,
    nickname: 'Luca',
    score: 100
  }, {
    id: 3,
    nickname: 'Andrdsaea',
    score: 4300
  }, {
    id: 4,
    nickname: 'dff',
    score: 242300
  }, {
    id: 5,
    nickname: 'fdfsfs',
    score: 243400
  }, {
    id: 6,
    nickname: 'fsdfsdatdt',
    score: 22200
  }]
};
var id = 1;

var LeaderBoard = function LeaderBoard(_ref) {
  var onClickNavigate = _ref.onClickNavigate;

  var _useState = (0, _react.useState)(initState),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  function callbackUseEffect() {//api call for get players nickname and score
  }

  function playerList(player, key) {
    return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: _styleLeaderBoard.styles.leaderBoardContainer,
      key: "".concat(key, "-").concat(player.score)
    }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: _styleLeaderBoard.styles.leaderRow
    }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
      style: {
        color: player.id === id ? '#B72B29' : '#ffbf43',
        fontSize: 20,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {
          width: 1,
          height: 1
        },
        textAlign: 'center'
      }
    }, player.id === id && /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
      source: _birra.default,
      style: {
        width: 20,
        height: 20
      }
    }), player.nickname)), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: _styleLeaderBoard.styles.leaderRow
    }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
      style: {
        color: player.id === id ? '#B72B29' : '#fff',
        fontSize: 20,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {
          width: 1,
          height: 1
        }
      }
    }, player.score)));
  }

  function sortPlayer(a, b) {
    if (a.score > b.score) return -1;
    if (a.score == b.score) return 0;
    if (a.score < b.score) return 1;
  }

  (0, _react.useEffect)(callbackUseEffect, []);
  return /*#__PURE__*/_react.default.createElement(_reactNative.ImageBackground, {
    source: _leaderboardbg.default,
    style: {
      width: '100%',
      height: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Pressable, {
    onPress: onClickNavigate
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    source: _futuramaship.default,
    style: _styleLeaderBoard.styles.imgShip
  })), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      backgroundColor: 'rgba(255, 246, 143, .6)',
      paddingVertical: 20,
      marginTop: 40
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styleLeaderBoard.styles.titleWrapper
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _styleLeaderBoard.styles.leader
  }, "Leader"), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _objectSpread(_objectSpread({}, _styleLeaderBoard.styles.leader), _styleLeaderBoard.styles.board)
  }, "Board")), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styleLeaderBoard.styles.tableHead
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _styleLeaderBoard.styles.nickname
  }, "Nickname"), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _objectSpread(_objectSpread({}, _styleLeaderBoard.styles.nickname), _styleLeaderBoard.styles.score)
  }, "score")), state.players.length > 0 && state.players.sort(sortPlayer).map(playerList)));
};

var _default = LeaderBoard;
exports.default = _default;