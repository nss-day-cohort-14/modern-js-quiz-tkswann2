'use strict';
const Class = require('./robotClass');
const Weapons = require('./weapons');
const Bonus = require('./bonus');

let test = new Class.HalfTrack('John');

test.weapon = new Weapons.hellFireMissiles();
test.bonus = new Bonus.Health();

console.log("data", test);

