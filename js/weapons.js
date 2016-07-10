'use strict';

const Weapons = {};

Weapons.hellFireMissiles = function () {
	this.weaponType = 'hellfire missiles';
	this.damage = 10;
	this.hitSpeed = -200;
};

Weapons.Cannon = function () {
	this.weaponType = 'cannon';
	this.damage = 40;
	this.hitSpeed = 200;
};

Weapons.Laser = function () {
	this.weaponType = 'laser';
	this.damage = 12;
	this.hitSpeed = -300;
};

Weapons.FiftyCal = function () {
	this.weaponType = 'fifty cal';
	this.damage = 5;
	this.hitSpeed = -150;
};

Weapons.Chainsaw = function () {
	this.weaponType = 'chainsaw';
	this.damage = 15;
};

Weapons.BattleAxe = function () {
	this.weaponType = 'battleaxe';
	this.damage = 12;
};



module.exports = Weapons;