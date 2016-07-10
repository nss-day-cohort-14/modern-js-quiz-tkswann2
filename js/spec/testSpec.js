'use strict';
const test = require('tape');
const Robot = require('../robotPrototype');
const Types = require('../robotTypes');

const rndNum = (little, big) => {
    let num1 = little || 0,
            num2 = big || 100;
    return Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
};

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

test('robotTypes: Drone', function (t) {
	let testRobotHealth = new Robot().health;
	let testDrone = new Types.Drone();

	t.equal(typeof testDrone, 'object', 'should be a constructor object');
	t.equal(testDrone.health, testRobotHealth - 20, 'should reduce health by 20');
	t.ok(testDrone.evasionChance, 'evasionChance to be defined');

	t.end();
});

test('robotTypes: Humvee', function (t) {
	let testRobot = new Robot();
	let testHumvee = new Types.Humvee();

	t.equal(typeof testHumvee, 'object', 'should be a constructor object');
	t.equal(testHumvee.armor, testRobot.armor + 25, 'should increase armor by 25');
	t.equal(testHumvee.hitSpeed, testRobot.hitSpeed - 200, 'should decrease hitSpeed by 200ms');

	t.end();
});

test('robotTypes: Transformer', function (t) {
	let testRobot = new Robot();
	let testTransformer = new Types.Transformer();

	t.equal(typeof testTransformer, 'object', 'should be a constructor function');
	t.equal(testTransformer.health, testRobot.health + 30, 'should increase health by 30');
	t.equal(testTransformer.damage, testRobot.damage + 20, 'should increase damage by 20');

	t.end();
});










