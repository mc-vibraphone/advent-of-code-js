
// https://adventofcode.com/2022/day/3
// https://adventofcode.com/2022/day/3/input

import * as stream from 'stream';

const testData = [
  'vJrwpWtwJgWrhcsFMMfFFhFp',
  'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
  'PmmdzqPrVvPwwTWBwg',
  'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn',
  'ttgJtRGJQctTZtZT',
  'CrZsJsPPZsGzwwsLwLmpwMDw',
]

export const rucksackReorganization = () => {
	//const fs = require('fs');

	const readline = require('node:readline');

	const rl = readline.createInterface(stream.Readable.from(testData.join(('\n'))));

	//const rl = readline.createInterface(fs.createReadStream(`${__dirname}/data.txt`));

	let priority_sum = 0;

	rl.on('line', (line:string) => {
		console.log(line);
		if(0 != (line.length % 2)) {
			console.error(`Line :: ${line} :: is not an even lengthi.`);
			return false;
		}

	});

	rl.on('close', () => {
		console.log(`EOF`);
		console.log(`Priority sum was ${priority_sum}`);
	});

	rl.on('error', (error:Error) => {
			console.log(error);
	});

	return 0
}
