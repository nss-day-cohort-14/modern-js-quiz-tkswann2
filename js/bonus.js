'use strict';

const Bonus = {};

Bonus.Health = function () {
	this.bonusType = 'health +25';
	this.health = 25;
};

Bonus.Armor = function () {
	this.bonusType = 'armor +25';
	this.armor = 25;
};

Bonus.Damage = function () {
	this.bonusType = 'damage +25';
	this.damage = 25;
};

Bonus.HitSpeed = function () {
	this.bonusType = 'hit speed increase by 25%';
	this.hitSpeed = -250;
};

Bonus.Evasion = function () {
	this.bonusType = 'evasion chance increase by 15%';
	this.evasionChance = 15;
};

module.exports = Bonus;