# Flavor description generator

This tiny web app generates random more or less nonsensical descriptions of wine flavors in an arrogant and condescending tone. Press generate once or multiple times, until you have one that you like.

Link: [flavor generator](https://oelna.github.io/flavor-generator/)

## Notes / Todo

- Only supports german for now, but if you know a little Javascript, it's easy to customize
- Limited set of phrases, can also be extended in code

## How to extend

Simply add as many entries in [flavors.js](flavors.js) as you require.

`t` is the term, `m`, `f` and `n` are endings for masculine, feminine and neutral forms respectively.

Fruit/Aromas have a `s` property, which determines the required sex for the word.

Obviously this is not perfect and tailored to german usage, but it is what it is.

```javascript
const strings = {
	'adjectives': [
		{ t: 'fruchtig', m: 'er', f: 'e', n: 'es' },
		{ t: 'samtig', m: 'er', f: 'e', n: 'es' },
		{ t: 'voll', m: 'er', f: 'e', n: 'es' },
		{ t: 'mild', m: 'er', f: 'e', n: 'es' }
	],
	'fruit': [
		{ t: 'Aprikose', s: 'f' },
		{ t: 'Tabak', s: 'm' },
		{ t: 'Holz', s: 'n' }
  ]
}
```

## Screenshot

<img width="974" alt="Screen Shot 2021-01-03 at 14 29 24" src="https://user-images.githubusercontent.com/1279725/103479762-27ba7700-4dd0-11eb-8c4a-8760c47b40a1.png">
