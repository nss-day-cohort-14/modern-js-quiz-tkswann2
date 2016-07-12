'use strict';
const $ = require('jquery');
const Class = require('./robotClass');
const Weapons = require('./weapons');
const Bonus = require('./bonus');

console.log("Class", Class);
console.log("Weapons", Weapons);
console.log("Bonus", Bonus);


$('#classSelect1, #classSelect2')
	.on('change', (e) => {
		let htmlString = `<p>${e.target.value}</p>`;
		$.each(Weapons, (k,v) => {
			htmlString += `<div class="card__button">
	      							  <a class="card__link btn btn--small btn--yellow" href="">
	      							    <span class="btn__prompt">&raquo;</span>
	      							    <span class="btn__text">${k}</span>
	      							  </a>
	      							</div>
										</div>`;
		});
		htmlString += `<div class="card__button">
	      							  <a class="card__link btn btn--small btn--red" href="">
	      							    <span class="btn__prompt">&raquo;</span>
	      							    <span class="btn__text">Next</span>
	      							  </a>
	      							</div>
										</div>`;
		
	 if (e.target.id === 'classSelect1') {
	  $('#box-01').children(':not(label, select)').remove(); 
	  $('#box-01').append(htmlString);
	}
	 if (e.target.id === 'classSelect2') {
	  $('#box-03').children(':not(label, select)').remove();
	  $('#box-03').append(htmlString);
	} 
});


