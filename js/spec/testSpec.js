'use strict';
const test = require('tape');
const Robot = require('../robotPrototype');
const Types = require('../robotTypes');
const Class = require('../robotClass');

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
	t.equal(testRobot.hitSpeed, 1000, 'should have a base hit speed of 1000ms')

	t.end();
});

/*
/														 |
/   Robot Types test suite   |
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
	t.equal(testHumvee.hitSpeed, testRobot.hitSpeed - 200, 'should decrease hitSpeed by 200ms');

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
/														 |
/   Robot Class test suite   |
/														 |
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
	t.equal(testAttack.hitSpeed, testDrone.hitSpeed + 200, 'should increase hitSpeed 200ms');
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
	t.equal(testOffensive.hitSpeed, testHumvee.hitSpeed + 100, 'should increase hitSpeed by 100ms');

	t.end();
});




































