import { flavors as flavorStrings } from './flavors.js';
import { FlavorGenerator } from './flavors.js';

const output = document.querySelector('#output');
const regenBtn = document.querySelector('#regenerate');
const gen = new FlavorGenerator({ strings: flavorStrings });

const regenerate = function () {
	gen.reset();
	output.textContent = '';

	const claim = gen.makeClaim();

	const aromas = [];
	for (var i = 0; i < gen.randomInt(4,8); i++) {
		aromas.push(gen.makeExpression());
	}
	const lastAroma = aromas.splice(aromas.length-1, 1);
	const aromasString = aromas.join(', ');

	output.textContent += claim + ' ';
	output.textContent += aromasString[0].toUpperCase() + aromasString.substring(1);
	output.textContent += ' und ' + lastAroma + '.';
}

regenBtn.addEventListener('click', regenerate);

regenerate();
