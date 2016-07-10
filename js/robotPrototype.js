'use strict';

function Robot (name) {
	this.name = name || null;
	this.health = 50;
	this.armor = 50;
	this.damage = 10;
	this.hitSpeed = 1000;

	this.toString = function() {
    var output = [this.name,
      ": a ",
      this.class,
      " class ",
      this.type,
      " with ",
      this.health,
      " health. ",
      " Wielding a ",
      this.weapon.weaponType,
      " & an added ",
      this.bonus.bonusType,
      " bonus!"
    ].join("");
    return output;
  };
}


module.exports = Robot;

