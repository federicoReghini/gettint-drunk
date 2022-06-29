import barneyDrunk from '../assets/img/cardIcon/barney_drunk.jpg'
import barneyntDrunk from '../assets/img/cardIcon/barney_ntdrunk.jpg'

import benderDrunk from '../assets/img/cardIcon/bender_drunk.jpg'
import benderntDrunk from '../assets/img/cardIcon/bender_ntdrunk.jpg'

import brianDrunk from '../assets/img/cardIcon/brian_drunk.jpg'
import brianntDrunk from '../assets/img/cardIcon/brian_ntdrunk.jpg'

import homerDrunk from '../assets/img/cardIcon/homer_drunk.jpg'
import homerntDrunk from '../assets/img/cardIcon/homer_ntdrunk.jpg'

import peterDrunk from '../assets/img/cardIcon/peter_drunk.jpg'
import peterntDrunk from '../assets/img/cardIcon/peter_ntdrunk.jpg'

import rockDrunk from '../assets/img/cardIcon/rockr_drunk.jpg'
import rockntDrunk from '../assets/img/cardIcon/rockr_ntdrunk.jpg'

import rogerDrunk from '../assets/img/cardIcon/roger_drunk.jpg'
import rogerntDrunk from '../assets/img/cardIcon/roger_ntdrunk.jpg'

import shanksDrunk from '../assets/img/cardIcon/shanks_drunk.jpg'
import shanksntDrunk from '../assets/img/cardIcon/shanks_ntdrunk.jpg'

let iconArrayCard = [{
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
}]

const bossIconCard = {
    regular: barneyDrunk,
    flipped: barneyntDrunk
}

const ICONTAKED = []
/**
 * assign cards to player id
 * @param  {number} id
 */
const assignIdToIconCard = (id) => {

    let iconIndex = Math.floor(Math.random() * 7);
    while ((ICONTAKED.find(element => element === iconIndex)) !== undefined) {
        iconIndex = Math.floor(Math.random() * 7);
    }
    iconArrayCard[iconIndex].belongsTo = id;
    ICONTAKED.push(iconIndex)
    return iconArrayCard[iconIndex]
}

export { iconArrayCard, bossIconCard, assignIdToIconCard, ICONTAKED }


