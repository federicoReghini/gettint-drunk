const barneyDrunk = require('../assets/img/cardIcon/barney_drunk.jpg')
const barneyntDrunk = require('../assets/img/cardIcon/barney_ntdrunk.jpg')

const benderDrunk = require('../assets/img/cardIcon/bender_drunk.jpg')
const benderntDrunk = require('../assets/img/cardIcon/bender_ntdrunk.jpg')

const brianDrunk = require('../assets/img/cardIcon/brian_drunk.jpg')
const brianntDrunk = require('../assets/img/cardIcon/brian_ntdrunk.jpg')

const homerDrunk = require('../assets/img/cardIcon/homer_drunk.jpg')
const homerntDrunk = require('../assets/img/cardIcon/homer_ntdrunk.jpg')

const peterDrunk = require('../assets/img/cardIcon/peter_drunk.jpg')
const peterntDrunk = require('../assets/img/cardIcon/peter_ntdrunk.jpg')

const rockDrunk = require('../assets/img/cardIcon/rockr_drunk.jpg')
const rockntDrunk = require('../assets/img/cardIcon/rockr_ntdrunk.jpg')

const rogerDrunk = require('../assets/img/cardIcon/roger_drunk.jpg')
const rogerntDrunk = require('../assets/img/cardIcon/roger_ntdrunk.jpg')

const shanksDrunk = require('../assets/img/cardIcon/shanks_drunk.jpg')
const shanksntDrunk = require('../assets/img/cardIcon/shanks_ntdrunk.jpg')

let iconArrayCard = [{
    regular: benderDrunk,
    flipped: benderntDrunk,
    belongsTo: ''
}, {
    regular: brianDrunk,
    flipped: brianntDrunk,
    belongsTo: ''
}, {
    regular: homerDrunk,
    flipped: homerntDrunk,
    belongsTo: ''
}, {
    regular: peterDrunk,
    flipped: peterntDrunk,
    belongsTo: ''
}, {
    regular: rockDrunk,
    flipped: rockntDrunk,
    belongsTo: ''
}, {
    regular: rogerDrunk,
    flipped: rogerntDrunk,
    belongsTo: ''
}, {
    regular: shanksDrunk,
    flipped: shanksntDrunk,
    belongsTo: ''
}]

const bossIconCard = {
    regular: barneyDrunk,
    flipped: barneyntDrunk
}

const iconTaked = []

const assignIdToIconCard = (id) => {

    let iconIndex = Math.floor(Math.random() * 7);
    while ((iconTaked.find(element => element === iconIndex)) !== undefined) {
        iconIndex = Math.floor(Math.random() * 7);
    }
    iconArrayCard[iconIndex].belongsTo = id;
    iconTaked.push(iconIndex)
}

export { iconArrayCard, bossIconCard, assignIdToIconCard, iconTaked }

