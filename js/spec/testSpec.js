'use strict';
const test = require('tape');
const Robot = require('../robotPrototype');
const Types = require('../robotTypes');
const Class = require('../robotClass');
const Weapons = require('../weapons');
const Bonus = require('../bonus');

/*
/														       |
/   Robot Constructor test suite   |
/														       |
*/

test('Robot constructor: ', function (t) {
	let testRobot = new Robot();

	t.equal(typeof testRobot, 'object', 'should be a constructor object');
	t.equal(testRobot.name, null, 'should have a name value of null');
	t.equal(testRobot.health, 50, 'should have a base health of 50');
	t.equal(testRobot.armor, 50, 'should have a base armor of 50');
	t.equal(testRobot.damage, 10, 'should have a base damage of 10');
	t.equal(testRobot.hitSpeed, 1000, 'should have a base hit speed of 1000ms');

	t.end();
});

/*
/														 |
/   Types test suite         |
/														 |
*/

test('robotTypes: Drone', function (t) {
	let testRobotHealth = new Robot().health;
	let testDrone = new Types.Drone();

	t.equal(typeof testDrone, 'object', 'should be a constructor object');
	t.equal(testDrone.type, 'drone', 'should have a type of drone');
	t.equal(testDrone.health, testRobotHealth - 20, 'should reduce health by 20');
	t.ok(testDrone.evasionChance, 'evasionChance to be defined');

	t.end();
});

test('robotTypes: Humvee', function (t) {
	let testRobot = new Robot();
	let testHumvee = new Types.Humvee();

	t.equal(typeof testHumvee, 'object', 'should be a constructor object');
	t.equal(testHumvee.type, 'humvee', 'should have a type of humvee');
	t.equal(testHumvee.armor, testRobot.armor + 25, 'should increase armor by 25');
	t.equal(testHumvee.hitSpeed, testRobot.hitSpeed + 200, 'should increase hitSpeed by 200ms');

	t.end();
});

test('robotTypes: Transformer', function (t) {
	let testRobot = new Robot();
	let testTransformer = new Types.Transformer();

	t.equal(typeof testTransformer, 'object', 'should be a constructor function');
	t.equal(testTransformer.type, 'transformer', 'should have a type of transformer');
	t.equal(testTransformer.health, testRobot.health + 30, 'should increase health by 30');
	t.equal(testTransformer.damage, testRobot.damage + 20, 'should increase damage by 20');

	t.end();
});


/*
/												 |
/   Class test suite     |
/												 |
*/													 


test('robotClass: Stealth', function (t) {
	let testDrone = new Types.Drone();
	let testStealth = new Class.Stealth();

	t.equal(typeof testStealth, 'object', 'should be a constructor object');
	t.equal(testStealth.class, 'stealth', 'should have a class of stealth');
	t.ok(testStealth.evasionChance, 'should have an increase in evasionChance defined');
	t.equal(testStealth.damage, testDrone.damage - 10, 'should decrease damage by 10');

	t.end();
});

test('robotClass: Attack', function (t) {
	let testDrone = new Types.Drone();
	let testAttack = new Class.Attack();

	t.equal(typeof testAttack, 'object', 'should be a constructor object');
	t.equal(testAttack.class, 'attack', 'should have a class of attack');
	t.equal(testAttack.hitSpeed, testDrone.hitSpeed - 200, 'should decrease hitSpeed 200ms');
	t.equal(testAttack.damage, testDrone.damage + 20, 'should increase damage by 20');

	t.end();
});

test('robotClass: Transport', function (t) {
	let testHumvee = new Types.Humvee();
	let testTransport = new Class.Transport();

	t.equal(typeof testTransport, 'object', 'should be a constructor object');
	t.equal(testTransport.class, 'transport', 'should have a class of transport');
	t.equal(testTransport.armor, testHumvee.armor + 30, 'should increase armor by 30');
	t.equal(testTransport.damage, testHumvee.damage - 10, 'should decrease damage by 10');

	t.end();
});

test('robotClass: Offensive', function (t) {
	let testHumvee = new Types.Humvee();
	let testOffensive = new Class.Offensive();

	t.equal(typeof testOffensive, 'object', 'should be a constructor object');
	t.equal(testOffensive.class, 'offensive', 'should have a class of offensive');
	t.equal(testOffensive.damage, testHumvee.damage + 10, 'should increase damage by 10');
	t.equal(testOffensive.hitSpeed, testHumvee.hitSpeed - 100, 'should decrease hitSpeed by 100ms');

	t.end();
});

test('robotClass: Half-Track', function (t) {
	let testTransformer = new Types.Transformer();
	let testHalfTrack = new Class.HalfTrack();

	t.equal(typeof testHalfTrack, 'object', 'should be a constructor object');
	t.equal(testHalfTrack.class, 'half-track', 'should have a class of half-track');
	t.equal(testHalfTrack.armor, testTransformer.armor + 25, 'should increase armor by 25');
	t.equal(testHalfTrack.damage, testTransformer.damage - 15, 'should decrease damage by 15');
	t.equal(testHalfTrack.hitSpeed, testTransformer.hitSpeed - 150, 'should decrease hitSpeed by 150');

	t.end();
});

test('robotClass: Optimus', function (t) {
	let testTransformer = new Types.Transformer();
	let testOptimus = new Class.Optimus();

	t.equal(typeof testOptimus, 'object', 'should be a constructor object');
	t.equal(testOptimus.class, 'optimus', 'should have a class of optimus');
	t.equal(testOptimus.armor, testTransformer.armor + 15, 'should increase armor by 15');
	t.equal(testOptimus.damage, testTransformer.damage + 20, 'should increase damage by 20');
	t.equal(testOptimus.hitSpeed, testTransformer.hitSpeed - 200, 'should decrease hitSpeed by 200');

	t.end();
});


/*
/												 |
/   Weapons test suite   |
/												 |
*/

test('Robot Weapons: HellfireMissiles', function (t) {
	let testWeapon = new Weapons.hellFireMissiles();

	t.equal(testWeapon.weaponType, 'hellfire missiles', 'should have a type defined as hellfire missiles');
	t.equal(testWeapon.damage, 10, 'should have a damage value of 10');
	t.equal(testWeapon.hitSpeed, -200, 'should decrease hitSpeed by 200');

	t.end();
});

test('Robot Weapons: Cannon', function (t) {
	let testWeapon = new Weapons.Cannon();

	t.equal(testWeapon.weaponType, 'cannon', 'should have a type defined as cannon');
	t.equal(testWeapon.damage, 40, 'should have a damage value of 40');
	t.equal(testWeapon.hitSpeed, 200, 'should increase hitSpeed by 200');

	t.end();
});

test('Robot Weapons: Laser', function (t) {
	let testWeapon = new Weapons.Laser();

	t.equal(testWeapon.weaponType, 'laser', 'should have a type defined as laser');
	t.equal(testWeapon.damage, 12, 'should have a damage value of 40');
	t.equal(testWeapon.hitSpeed, -300, 'should decrease hitSpeed by 300');

	t.end();
});

test('Robot Weapons: FiftyCal', function (t) {
	let testWeapon = new Weapons.FiftyCal();

	t.equal(testWeapon.weaponType, 'fifty cal', 'should have a type defined as fifty cal');
	t.equal(testWeapon.damage, 5, 'should have a damage value of 5');
	t.equal(testWeapon.hitSpeed, -150, 'should decrease hitSpeed by 300');

	t.end();
});

test('Robot Weapons: Chainsaw', function (t) {
	let testWeapon = new Weapons.Chainsaw();

	t.equal(testWeapon.weaponType, 'chainsaw', 'should have a type defined as chainsaw');
	t.equal(testWeapon.damage, 15, 'should have a damage value of 15');

	t.end();
});

test('Robot Weapons: BattleAxe', function (t) {
	let testWeapon = new Weapons.BattleAxe();

	t.equal(testWeapon.weaponType, 'battleaxe', 'should have a type defined as battleaxe');
	t.equal(testWeapon.damage, 12, 'should have a damage value of 12');

	t.end();
});


/*
/												 |
/   Bonus test suite     |
/												 |
*/

test('Robot Bonus: Health', function (t) {
	let testBonus = new Bonus.Health();

	t.equal(testBonus.bonusType, 'health +25', 'should have a bonusType defined as health +25');
	t.equal(testBonus.health, 25, 'should increase health by 25');

	t.end();
});

test('Robot Bonus: Armor', function (t) {
	let testBonus = new Bonus.Armor();

	t.equal(testBonus.bonusType, 'armor +25', 'should have a bonusType defined as armor +25');
	t.equal(testBonus.armor, 25, 'should increase armor by 25');

	t.end();
});

test('Robot Bonus: Damage', function (t) {
	let testBonus = new Bonus.Damage();

	t.equal(testBonus.bonusType, 'damage +25', 'should have a bonusType defined as damage +25');
	t.equal(testBonus.damage, 25, 'should increase damage by 25');

	t.end();
});

test('Robot Bonus: HitSpeed', function (t) {
	let testBonus = new Bonus.HitSpeed();

	t.equal(testBonus.bonusType, 'hit speed increase by 25%', 'should have a bonusType defined as hit speed increase by 25%');
	t.equal(testBonus.hitSpeed, -250, 'should increase hitSpeed by 25%');

	t.end();
});

test('Robot Bonus: Evasion', function (t) {
	let testBonus = new Bonus.Evasion();

	t.equal(testBonus.bonusType, 'evasion chance increase by 15%', 'should have a bonusType defined as evasion chance increase by 15%');
	t.equal(testBonus.evasionChance, 15, 'should increase evasionChance by 15%');

	t.end();
});







































