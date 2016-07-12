'use strict';
const Class = require('./robotClass');
const Weapons = require('./weapons');
const Bonus = require('./bonus');

let test = new Class.HalfTrack('John');
test.weapon = new Weapons.hellFireMissiles();
test.bonus = new Bonus.Health();

let test2 = new Class.Attack('Mary');
test2.setWeapon(new Weapons.Laser());
test2.setBonus(new Bonus.Armor());

let robot = new Class.Optimus("Steve");
robot.setWeapon(new Weapons.FiftyCal());
robot.setBonus(new Bonus.HitSpeed());
console.log("steve", robot);

let drone = new Class.Stealth('stealth');



console.log("test", test.toString());
console.log("test2", test2);
console.log("test2", test2.toString());






