'use strict';
const $ = require('jquery');
const Class = require('./robotClass');
const Weapons = require('./weapons');
const Bonus = require('./bonus');

console.log("Class", Class);
console.log("Weapons", Weapons);
console.log("Bonus", Bonus);

const playerChoices = {},
		  player1,
			player2;


// sets values on playerChoices obj to be used for building the bots
$('.next').on('mouseenter', (e) => {
	playerChoices.p1Name = 	$('#fighter1').val();
	playerChoices.p2Name = $('#fighter2').val();
	playerChoices.p1Class = $('#classSelect1').val();
	playerChoices.p2Class = $('#classSelect2').val();
});

// build bot objects, load battleground scene in DOM
$('.next').on('click', (e) => {
		(playerChoices.p1Class === 'Stealth') ? player1 = new Class.Stealth(playerChoices.p1Name) : null;
		(playerChoices.p1Class === 'Attack') ? player1 = new Class.Attack(playerChoices.p1Name) : null;
		(playerChoices.p1Class === 'Transport') ? player1 = new Class.Transport(playerChoices.p1Name) : null;
		(playerChoices.p1Class === 'Offensive') ? player1 = new Class.Offensive(playerChoices.p1Name) : null;
		(playerChoices.p1Class === 'HalfTrack') ? player1 = new Class.HalfTrack(playerChoices.p1Name) : null;
		(playerChoices.p1Class === 'Optimus') ? player1 = new Class.Optimus(playerChoices.p1Name) : null;

		(playerChoices.p2Class === 'Stealth') ? player2 = new Class.Stealth(playerChoices.p2Name) : null;
		(playerChoices.p2Class === 'Attack') ? player2 = new Class.Attack(playerChoices.p2Name) : null;
		(playerChoices.p2Class === 'Transport') ? player2 = new Class.Transport(playerChoices.p2Name) : null;
		(playerChoices.p2Class === 'Offensive') ? player2 = new Class.Offensive(playerChoices.p2Name) : null;
		(playerChoices.p2Class === 'HalfTrack') ? player2 = new Class.HalfTrack(playerChoices.p2Name) : null;
		(playerChoices.p2Class === 'Optimus') ? player2 = new Class.Optimus(playerChoices.p2Name) : null;
		
		// empty 3 main divs
		$('#box-01, #box-02, #box-03').empty();
	  // append attack button to 2nd div 
		$('<div/>')
			.addClass('card__button')
			.html(`<a class="card__link btn btn--small btn--orange upperCase" href="#"><span class="btn__prompt">&raquo;</span><span class="btn__text">Attack</span></a>`)
			.appendTo('#box-02');
		// populate outer divs with robot info
		$('#box-01')
			.html(`<p>${player1.toString()}</p>`);
		$('#box-03')
			.html( `<p>${player2.toString()}</p>`);
	
});


$(function() {
	console.log("document is ready");
});






