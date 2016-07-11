'use strict';
const Types = require('./robotTypes');
const HF = require('./helperFunctions');


// Drone classes
function Stealth (name) {
	Types.Drone.call(this, name);
	this.health += HF.rndNum(15,25);
	this.class = 'stealth';
	this.evasionChance += HF.rndNum(5,15);
	this.damage -= HF.rndNum(2,10);
}

function Attack (name) {
	Types.Drone.call(this, name);
	this.health += HF.rndNum(18,28);
	this.class = 'attack';
	this.hitSpeed -= 200;
	this.damage += HF.rndNum(15,25);
}


// Humvee classes
function Transport (name) {
	Types.Humvee.call(this, name);
	this.health += HF.rndNum(20,30);
	this.class = 'transport';
	this.armor += 30;
	this.damage -= HF.rndNum(2,10);
}

function Offensive (name) {
	Types.Humvee.call(this, name);
	this.health += HF.rndNum(10,20);
	this.class = 'offensive';
	this.damage += HF.rndNum(10,15);
	this.hitSpeed -= 100;
}


// Transformer classes
function HalfTrack (name) {
	Types.Transformer.call(this, name);
	this.health += HF.rndNum(18,36);
	this.class = 'half-track';
	this.armor += 25;
	this.damage -= HF.rndNum(5,15);
	this.hitSpeed -= 150;
}

function Optimus (name) {
	Types.Transformer.call(this, name);
	this.health += HF.rndNum(20,35);
	this.class = 'optimus';
	this.armor += 15;
	this.damage += HF.rndNum(15,25);
	this.hitSpeed -= 200;
}



module.exports = {Stealth, Attack, Transport, Offensive, HalfTrack, Optimus};

