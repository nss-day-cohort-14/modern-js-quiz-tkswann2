'use strict';
const Types = require('./robotTypes');

// Drone classes
function Stealth (name) {
	Types.Drone.call(this, name);
	this.class = 'stealth';
	this.evasionChance += 10;
	this.damage -= 10;
	this.weapon = null;
	this.bonus = null;
}

function Attack (name) {
	Types.Drone.call(this, name);
	this.class = 'attack';
	this.hitSpeed -= 200;
	this.damage += 20;
	this.weapon = null;
	this.bonus = null;
}


// Humvee classes
function Transport (name) {
	Types.Humvee.call(this, name);
	this.class = 'transport';
	this.armor += 30;
	this.damage -= 10;
	this.weapon = null;
	this.bonus = null;
}

function Offensive (name) {
	Types.Humvee.call(this, name);
	this.class = 'offensive';
	this.damage += 10;
	this.hitSpeed -= 100;
	this.weapon = null;
	this.bonus = null;
}


// Transformer classes
function HalfTrack (name) {
	Types.Transformer.call(this, name);
	this.class = 'half-track';
	this.armor += 25;
	this.damage -= 15;
	this.hitSpeed -= 150;
	this.weapon = null;
	this.bonus = null;
}

function Optimus (name) {
	Types.Transformer.call(this, name);
	this.class = 'optimus';
	this.armor += 15;
	this.damage += 20;
	this.hitSpeed -= 200;
	this.weapon = null;
	this.bonus = null;
}
















module.exports = {Stealth, Attack, Transport, Offensive, HalfTrack, Optimus};

