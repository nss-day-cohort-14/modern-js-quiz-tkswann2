'use strict';
const Types = require('./robotTypes');
const rndNum = require('./rndNum');

// Drone classes
function Stealth (name) {
	Types.Drone.call(this, name);
	this.health += rndNum(15,25);
	this.class = 'stealth';
	this.evasionChance += rndNum(5,15);
	this.damage -= rndNum(2,10);
	this.weapon = null;
	this.bonus = null;
}

function Attack (name) {
	Types.Drone.call(this, name);
	this.health += rndNum(18,28);
	this.class = 'attack';
	this.hitSpeed -= 200;
	this.damage += rndNum(15,25);
	this.weapon = null;
	this.bonus = null;
}


// Humvee classes
function Transport (name) {
	Types.Humvee.call(this, name);
	this.health += rndNum(20,30);
	this.class = 'transport';
	this.armor += 30;
	this.damage -= rndNum(2,10);
	this.weapon = null;
	this.bonus = null;
}

function Offensive (name) {
	Types.Humvee.call(this, name);
	this.health += rndNum(10,20);
	this.class = 'offensive';
	this.damage += rndNum(10,15);
	this.hitSpeed -= 100;
	this.weapon = null;
	this.bonus = null;
}


// Transformer classes
function HalfTrack (name) {
	Types.Transformer.call(this, name);
	this.health += rndNum(18,36);
	this.class = 'half-track';
	this.armor += 25;
	this.damage -= rndNum(5,15);
	this.hitSpeed -= 150;
	this.weapon = null;
	this.bonus = null;
}

function Optimus (name) {
	Types.Transformer.call(this, name);
	this.health += rndNum(20,35);
	this.class = 'optimus';
	this.armor += 15;
	this.damage += rndNum(15,25);
	this.hitSpeed -= 200;
	this.weapon = null;
	this.bonus = null;
}



module.exports = {Stealth, Attack, Transport, Offensive, HalfTrack, Optimus};

