
// references:
// https://www.vinaturel.de/index.php?cat=c2_White-Wine.html
// https://www.weingrube.com/

const strings = {
	'adjectives': [
		{ t: 'fruchtig', m: 'er', f: 'e', n: 'es' },
		{ t: 'samtig', m: 'er', f: 'e', n: 'es' },
		{ t: 'voll', m: 'er', f: 'e', n: 'es' },
		{ t: 'mild', m: 'er', f: 'e', n: 'es' },
		{ t: 'ansprechend duftig', m: 'er', f: 'e', n: 'es' },
		{ t: 'reif', m: 'er', f: 'e', n: 'es' },
		{ t: 'unreif', m: 'er', f: 'e', n: 'es' },
		{ t: 'brilliant', m: 'er', f: 'e', n: 'es' },
		{ t: 'präzis', m: 'er', f: 'e', n: 'es' },
		{ t: 'geradelinig', m: 'er', f: 'e', n: 'es' },
		{ t: 'unverfälscht', m: 'er', f: 'e', n: 'es' },
		{ t: 'kräftig', m: 'er', f: 'e', n: 'es' },
		{ t: 'frisch', m: 'er', f: 'e', n: 'es' },
		{ t: 'mineralisch', m: 'er', f: 'e', n: 'es' },
		{ t: 'knackig', m: 'er', f: 'e', n: 'es' },

		{ t: 'unterlegt mit', m: '', f: '', n: '' },
		{ t: 'subtile Aromen von', m: '', f: '', n: '' },
		{ t: 'vibrierend Säure von', m: '', f: '', n: '' },
		{ t: 'knackige Säure von', m: '', f: '', n: '' },
		{ t: 'Nuancen von', m: '', f: '', n: '' },
		{ t: 'duftige Noten von', m: '', f: '', n: '' },
		{ t: 'Tiefe bringende Aromen von', m: '', f: '', n: '' },
		{ t: 'einladende Nase nach', m: '', f: '', n: '' }
	],
	'fruit': [
		{ t: 'Aprikose', s: 'f' },
		{ t: 'Tabak', s: 'm' },
		{ t: 'Holz', s: 'n' },
		{ t: 'Beeren', s: 'f' },
		{ t: 'Beerenobst', s: 'n' },
		{ t: 'Apfel', s: 'm' },
		{ t: 'Birne', s: 'f' },
		{ t: 'Zitronentarte', s: 'f' },
		{ t: 'Baiser', s: 'n' },
		{ t: 'Lorbeer', s: 'm' },
		{ t: 'weißer Pfeffer', s: 'm' },
		{ t: 'Litschi', s: 'f' },
		{ t: 'Marille', s: 'f' },
		{ t: 'Citrus', s: 'f' },
		{ t: 'Limette', s: 'f' },
		{ t: 'Orange', s: 'f' },
		{ t: 'Kumquat', s: 'f' },
		{ t: 'Mandarine', s: 'f' },
		{ t: 'Kernobst', s: 'f' },
		{ t: 'Nachhall', s: 'f' },
		{ t: 'nasse Steine', s: 'f' },
		{ t: 'Tafelkreide', s: 'f' },
	],
	'claim': [
		'Brillianz lautet die Devise!',
		'Am Gaumen schneidet der Wein, gemeinsam mit seiner zitrusfrischen Aromatik, einen sauberen feinen Säurebogen in Manier eines Scherenschnitts.',
		'Herzlich Willkommen in der Saftbar, die aus purem Kalk gefertigt wurde.',
		'Dieser Wein hat Größe!',
		'Mit zartem Schmelz und feiner Frucht im Antrunk ist dieser Wein aufs Wesentliche reduziert.',
		'Der Wein wurde von Falstaff mit 93 von 100 Punkten ausgezeichnet.',
		'Am Gaumen ist der Wein ebenso straff gestriegelt wie in der Nase.',
		'Gläserklingen, Lachen.',
		'Gradlinig und extraktreich gleicht er einem gut trainiertem Hürdenläufer, der jetzt bereits enorme Freude bereitet.',
		'Der Wein macht seinem Namen alle Ehre.'
	]
}

class FlavorGenerator {
	constructor(parameters) {
		if (!parameters || !parameters.strings) {
			throw new Error('A set of strings is required!');
		}

		this.strings = parameters.strings;
		// this.stringsClone = Object.assign({}, parameters.strings);
		this.stringsClone = JSON.parse(JSON.stringify(this.strings)); // deep clone!
	}

	randomInt (min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	pick (arr) {
		const index = this.randomInt(0, arr.length - 1);
		const item = arr.splice(index, 1);

		return { item: item[0], newArray: arr };
	}

	makeExpression () {
		if (this.stringsClone.adjectives.length < 1) { throw new Error('Not enough adjectives'); }
		if (this.stringsClone.fruit.length < 1) { throw new Error('Not enough fruit names'); }

		const adjData = this.pick(this.stringsClone.adjectives);
		const fruitData = this.pick(this.stringsClone.fruit);

		const adj = adjData.item;
		const fruit = fruitData.item;

		this.stringsClone.adjectives = adjData.newArray;
		this.stringsClone.fruit = fruitData.newArray;

		const genderedAdj = adj.t + adj[fruit.s] + ' ' + fruit.t;

		return genderedAdj;
	}

	makeClaim () {
		const claim = this.pick(this.stringsClone.claim);
		return claim.item;
	}

	reset () {
		this.stringsClone = JSON.parse(JSON.stringify(this.strings));
	}
}

export { strings as flavors };
export { FlavorGenerator };