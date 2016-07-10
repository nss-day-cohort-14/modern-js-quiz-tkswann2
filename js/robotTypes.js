'use strict';
const Robot = require('./robotPrototype');
const rndNum = require('./rndNum');


function Drone () {
	Robot.call(this);
	this.type = 'drone';
	this.health -= 20;
	this.evasionChance = rndNum(45,65);
}

function Humvee () {
	Robot.call(this);
	this.type = 'humvee';
	this.armor += 25;
	this.hitSpeed -= 200;
}

function Transformer () {
	Robot.call(this);
	this.type = 'transformer';
	this.health += 30;
	this.damage += 20;
}

module.exports = {Drone, Humvee, Transformer};

