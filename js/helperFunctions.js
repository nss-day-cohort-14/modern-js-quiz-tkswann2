'use strict';
const $ = require('jquery');

const rndNum = (little, big) => {
    let num1 = little || 0,
            num2 = big || 100;
    return Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
};

const totalStats = (dmg1, dmg2) => dmg1 + dmg2;

const firstLetterIsVowel = (string) => {
	const arr = ['a','e','i','o','u'];
	let vowel = false,
			firstLetter = string.split('')[0];
			arr.forEach(v => {
				if (v === firstLetter) vowel = true;
			});
	return vowel;
};

const splitString = (string) => {
	let newArr = string.split(' ');
	return newArr;
};

const calcDmg = (opp1, opp2) => {
	opp2.health -= opp1.damage;
	return opp2;
};

const fightFunc = (opp1, opp2) => {
		calcDmg(opp1, opp2);
		if (opp2.health <= 0) $('#box-02').empty().prepend(`<h4><strong>${opp2.name}</strong> has been slain!</h4>`);	
		else $('.attackButton').append(`<p><strong>${opp2.name}</strong>: has ${opp2.health} left after a ${opp1.class} special attack by ${opp1.name}.</p>`);
};


module.exports = {firstLetterIsVowel, splitString, rndNum, totalStats, fightFunc, calcDmg};