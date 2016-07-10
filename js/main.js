'use strict';
const Class = require('./robotClass');
const Weapons = require('./weapons');
const Bonus = require('./bonus');
const totalStats = require('./totalStats');

let test = new Class.HalfTrack('John');
test.weapon = new Weapons.hellFireMissiles();
test.bonus = new Bonus.Health();

let test2 = new Class.Attack('Mary');
test2.weapon = new Weapons.Laser();
test2.bonus = new Bonus.Armor();

console.log("data", test);
console.log(test.toString());

console.log("test2", test2);
console.log(test2.toString());

