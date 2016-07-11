'use strict';
const rndNum = require('./rndNum');

const Weapons = {};

Weapons.hellFireMissiles = function () {
	this.weaponType = 'hellfire missiles';
	this.damage = rndNum(5,15);
	this.hitSpeed = -200;
}; 

Weapons.Cannon = function () {
	this.weaponType = 'cannon';
	this.damage = rndNum(35,45);
	this.hitSpeed = 200;
};

Weapons.Laser = function () {
	this.weaponType = 'laser';
	this.damage = rndNum(3,12);
	this.hitSpeed = -300;
};

Weapons.FiftyCal = function () {
	this.weaponType = 'fifty cal';
	this.damage = rndNum(8,16);
	this.hitSpeed = -150;
};

Weapons.Chainsaw = function () {
	this.weaponType = 'chainsaw';
	this.damage = rndNum(5,10);
};

Weapons.BattleAxe = function () {
	this.weaponType = 'battleaxe';
	this.damage = rndNum(6,12);
};



module.exports = Weapons;