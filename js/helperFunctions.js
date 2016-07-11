'use strict';

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


module.exports = {firstLetterIsVowel, splitString, rndNum, totalStats};