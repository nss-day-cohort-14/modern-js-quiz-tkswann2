'use strict';
const $ = require('jquery');
const Class = require('./robotClass');
const Weapons = require('./weapons');
const Bonus = require('./bonus');

console.log("Class", Class);
console.log("Weapons", Weapons);
console.log("Bonus", Bonus);

// dynamically load weapon choices
$('#classSelect1, #classSelect2')
	.on('change', (e) => {
		let htmlString = `<p>Select one:</p>`;
		$.each(Weapons, (k,v) => {
			htmlString += `<div class="card__button">`;
			// different color list buttons for each select box
			htmlString +=	(e.target.id === 'classSelect1') ? `<a class="card__link btn btn--small btn--yellow weapons" href="#">` : `<a class="card__link btn btn--small btn--blue weapons" href="#">`;
	    htmlString += `<span class="btn__prompt">&raquo;</span>
	      							    <span class="btn__text">${k}</span>
	      							  </a>
	      							</div>
										</div>`;
		});
		
	 if (e.target.id === 'classSelect1') {
	  	$('#box-01').children(':not(label, select)').remove(); 
	  	$('#box-01').append(htmlString);
		// change color of selected box
	  	$('.btn--yellow').on('click', (e) => {
				$('.btn--yellow').removeClass('btn__select');
				$(e.currentTarget).toggleClass('btn__select');
			});
	 }
	 if (e.target.id === 'classSelect2') {
	  	$('#box-03').children(':not(label, select)').remove();
	  	$('#box-03').append(htmlString);
		// change color of selected box
	  	$('.btn--blue').on('click', (e) => {
				$('.btn--blue').removeClass('btn__select');
				$(e.currentTarget).toggleClass('btn__select');
			});
	 } 
// prevent default action of dynamically created links
	$('a').on('click', (e) => e.preventDefault());
	
});

$('body').on('click', (e) => {
	if (e.target.innerText === 'next') {
		$('#classSelect1, #classSelect2').nextAll().remove();
	}
});




