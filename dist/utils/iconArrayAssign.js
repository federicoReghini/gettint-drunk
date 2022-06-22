"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.iconArrayCard = exports.bossIconCard = exports.assignIdToIconCard = exports.ICONTAKED = void 0;

var barneyDrunk = require('../assets/img/cardIcon/barney_drunk.jpg');

var barneyntDrunk = require('../assets/img/cardIcon/barney_ntdrunk.jpg');

var benderDrunk = require('../assets/img/cardIcon/bender_drunk.jpg');

var benderntDrunk = require('../assets/img/cardIcon/bender_ntdrunk.jpg');

var brianDrunk = require('../assets/img/cardIcon/brian_drunk.jpg');

var brianntDrunk = require('../assets/img/cardIcon/brian_ntdrunk.jpg');

var homerDrunk = require('../assets/img/cardIcon/homer_drunk.jpg');

var homerntDrunk = require('../assets/img/cardIcon/homer_ntdrunk.jpg');

var peterDrunk = require('../assets/img/cardIcon/peter_drunk.jpg');

var peterntDrunk = require('../assets/img/cardIcon/peter_ntdrunk.jpg');

var rockDrunk = require('../assets/img/cardIcon/rockr_drunk.jpg');

var rockntDrunk = require('../assets/img/cardIcon/rockr_ntdrunk.jpg');

var rogerDrunk = require('../assets/img/cardIcon/roger_drunk.jpg');

var rogerntDrunk = require('../assets/img/cardIcon/roger_ntdrunk.jpg');

var shanksDrunk = require('../assets/img/cardIcon/shanks_drunk.jpg');

var shanksntDrunk = require('../assets/img/cardIcon/shanks_ntdrunk.jpg');

var iconArrayCard = [{
  regular: benderntDrunk,
  flipped: benderDrunk,
  belongsTo: ''
}, {
  regular: brianntDrunk,
  flipped: brianDrunk,
  belongsTo: ''
}, {
  regular: homerntDrunk,
  flipped: homerDrunk,
  belongsTo: ''
}, {
  regular: peterntDrunk,
  flipped: peterDrunk,
  belongsTo: ''
}, {
  regular: rockntDrunk,
  flipped: rockDrunk,
  belongsTo: ''
}, {
  regular: rogerntDrunk,
  flipped: rogerDrunk,
  belongsTo: ''
}, {
  regular: shanksntDrunk,
  flipped: shanksDrunk,
  belongsTo: ''
}];
exports.iconArrayCard = iconArrayCard;
var bossIconCard = {
  regular: barneyDrunk,
  flipped: barneyntDrunk
};
exports.bossIconCard = bossIconCard;
var ICONTAKED = [];
/**
 * assign cards to player id
 * @param  {number} id
 */

exports.ICONTAKED = ICONTAKED;

var assignIdToIconCard = function assignIdToIconCard(id) {
  var iconIndex = Math.floor(Math.random() * 7);
  /*  while ((ICONTAKED.find(element => element === iconIndex)) !== undefined) {
       iconIndex = Math.floor(Math.random() * 7);
   } */

  iconArrayCard[iconIndex].belongsTo = id;
  ICONTAKED.push(iconIndex);
  return iconArrayCard[iconIndex];
};

exports.assignIdToIconCard = assignIdToIconCard;