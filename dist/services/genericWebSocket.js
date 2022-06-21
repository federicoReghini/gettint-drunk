"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wsMessage = exports.sendDataToWs = exports.openConnection = exports.closeConnection = void 0;

var _config = require("./config");

// config
var socket = new WebSocket(_config.WEBSOCKET);

var openConnection = function openConnection() {// socket.send('Connected to server')
};

exports.openConnection = openConnection;

var closeConnection = function closeConnection() {
  socket.close('disconnected to server');
};

exports.closeConnection = closeConnection;

var wsMessage = function wsMessage() {
  socket.onmessage = function (event) {
    // listen to data sent from the websocket server
    var message = JSON.parse(event.data);
    console.log(message);
  };
};

exports.wsMessage = wsMessage;

var sendDataToWs = function sendDataToWs(data) {// socket.send(data)
};

exports.sendDataToWs = sendDataToWs;