'use strict';
const Robot = require('./robotPrototype');

const rndNum = (little, big) => {
    let num1 = little || 0,
            num2 = big || 100;
    return Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
};


function Drone () {
	Robot.call(this);
	this.health -= 20;
	this.evasionChance = rndNum(45,65);
}

function Humvee () {
	Robot.call(this);
	this.armor += 25;
	this.hitSpeed -= 200;
}

function Transformer () {
	
}

module.exports = {Drone, Humvee};

