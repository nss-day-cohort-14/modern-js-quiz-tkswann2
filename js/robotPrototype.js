'use strict';

function Robot (name) {
	this.name = name || null;
	this.health = 50;
	this.armor = 50;
	this.damage = 10;
	this.hitSpeed = 1000;
}


module.exports = Robot;

