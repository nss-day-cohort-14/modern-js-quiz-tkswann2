'use strict';
const Robot = require('./robotPrototype');
const HF = require('./helperFunctions');

function Drone (name) {
	Robot.call(this, name);
	this.type = 'drone';
	this.health -= 20;
	this.evasionChance = HF.rndNum(45,65);
}

function Humvee (name) {
	Robot.call(this, name);
	this.type = 'humvee';
	this.armor += 25;
	this.hitSpeed += 200;
}

function Transformer (name) {
	Robot.call(this, name);
	this.type = 'transformer';
	this.health += 30;
	this.damage += 20;
}

module.exports = {Drone, Humvee, Transformer};

