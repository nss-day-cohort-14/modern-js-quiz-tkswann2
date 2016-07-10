'use strict';
const Types = require('./robotTypes');


function Stealth () {
	Types.Drone.call(this);
	this.class = 'stealth';
	this.evasionChance += 10;
	this.damage -= 10;
}

function Attack () {
	Types.Drone.call(this);
	this.class = 'attack';
	this.hitSpeed += 200;
	this.damage += 20;
}

function Transport () {
	Types.Humvee.call(this);
	this.class = 'transport';
	this.armor += 30;
	this.damage -= 10;
}

function Offensive () {
	Types.Humvee.call(this);
	this.class = 'offensive';
	this.damage += 10;
	this.hitSpeed += 100;
}

module.exports = {Stealth, Attack, Transport, Offensive};

