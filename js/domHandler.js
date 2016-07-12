'use strict';
const $ = require('jquery');
const Class = require('./robotClass');
const Weapons = require('./weapons');
const Bonus = require('./bonus');

console.log("Class", Class);
console.log("Weapons", Weapons);
console.log("Bonus", Bonus);

const playerChoices = {};
let	  player1,
			player2;

// dynamically load weapon choices
$('#classSelect1, #classSelect2')
	.on('change', (e) => {
});

$('.next').on('mouseenter', (e) => {
	playerChoices.p1Name = 	$('#fighter1').val();
	playerChoices.p2Name = $('#fighter2').val();
	playerChoices.p1Class = $('#classSelect1').val();
	playerChoices.p2Class = $('#classSelect2').val();
});

$('.next').on('click', (e) => {
	$.each(playerChoices, (k,v) => {
		(v === 'Stealth') ? player1 = new Class[v](playerChoices.p1Name) : null;
		console.log("player1", player1);
	});
});

// $('.next').on('click', (e) => {
// 		(playerChoices.p1Class === 'Stealth') ? player1 = new Class.Stealth(playerChoices.p1Name) : null;
// 		(playerChoices.p1Class === 'Attack') ? player1 = new Class.Attack(playerChoices.p1Name) : null;
// 		(playerChoices.p1Class === 'Transport') ? player1 = new Class.Transport(playerChoices.p1Name) : null;
// 		(playerChoices.p1Class === 'Offensive') ? player1 = new Class.Offensive(playerChoices.p1Name) : null;
// 		(playerChoices.p1Class === 'HalfTrack') ? player1 = new Class.HalfTrack(playerChoices.p1Name) : null;
// 		(playerChoices.p1Class === 'Optimus') ? player1 = new Class.Optimus(playerChoices.p1Name) : null;

// 		(playerChoices.p2Class === 'Stealth') ? player2 = new Class.Stealth(playerChoices.p2Name) : null;
// 		(playerChoices.p2Class === 'Attack') ? player2 = new Class.Attack(playerChoices.p2Name) : null;
// 		(playerChoices.p2Class === 'Transport') ? player2 = new Class.Transport(playerChoices.p2Name) : null;
// 		(playerChoices.p2Class === 'Offensive') ? player2 = new Class.Offensive(playerChoices.p2Name) : null;
// 		(playerChoices.p2Class === 'HalfTrack') ? player2 = new Class.HalfTrack(playerChoices.p2Name) : null;
// 		(playerChoices.p2Class === 'Optimus') ? player2 = new Class.Optimus(playerChoices.p2Name) : null;
// 		console.log("player1", player1);
// 		console.log("player2", player2);
// });

$(function() {
	console.log("document is ready");
});



