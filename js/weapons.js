'use strict';
const HF = require('./helperFunctions');

const Weapons = {};

Weapons.hellFireMissiles = function () {
	this.weaponType = 'hellfire missiles';
	this.damage = HF.rndNum(5,15);
	this.hitSpeed = -200;
}; 

Weapons.Cannon = function () {
	this.weaponType = 'cannon';
	this.damage = HF.rndNum(35,45);
	this.hitSpeed = 200;
};

Weapons.Laser = function () {
	this.weaponType = 'laser';
	this.damage = HF.rndNum(3,12);
	this.hitSpeed = -300;
};

Weapons.FiftyCal = function () {
	this.weaponType = 'fifty cal';
	this.damage = HF.rndNum(8,16);
	this.hitSpeed = -150;
};

Weapons.Chainsaw = function () {
	this.weaponType = 'chainsaw';
	this.damage = HF.rndNum(5,10);
};

Weapons.BattleAxe = function () {
	this.weaponType = 'battleaxe';
	this.damage = HF.rndNum(6,12);
};



module.exports = Weapons;