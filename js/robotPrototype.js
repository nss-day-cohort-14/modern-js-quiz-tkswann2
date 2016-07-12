'use strict';
const HF = require('./helperFunctions');

function Robot (name) {
	this.name = name || null;
	this.health = 50;
	this.armor = 50;
	this.damage = 10;
	this.hitSpeed = 1000;

	this.toString = () => {
    let output = [this.name,
      ": ",
      (HF.firstLetterIsVowel(this.class)) ? 'an ' : 'a ',
      this.class,
      " class ",
      this.type,
      " with ",
      this.health,
      " health. ",
      " Sporting a ",
      this.weapon.weaponType,
      " & an added ",
      HF.splitString(this.bonus.bonusType)[1],
      " bonus ",
      HF.splitString(this.bonus.bonusType)[0]
    ].join("");
    return output;
  };
  
  this.setWeapon = function (newWeapon) {
  	this.weapon = newWeapon;
  };

  this.setBonus = function (newBonus) {
  	this.bonus = newBonus;
  };
}


module.exports = Robot;

