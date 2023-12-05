
// https://adventofcode.com/2022/day/3
// https://adventofcode.com/2022/day/3/input

<<<<<<< HEAD
import * as stream from 'stream';
<<<<<<< HEAD
import * as fs from 'fs';
import * as readline from 'readline';

const testData:string[] = [
	'vJrwpWtwJgWrhcsFMMfFFhFp',
	'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
	'PmmdzqPrVvPwwTWBwg',
	'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn',
	'ttgJtRGJQctTZtZT',
	'CrZsJsPPZsGzwwsLwLmpwMDw',
]

export const badgeLocators = () => {

//	const rl = readline.createInterface(stream.Readable.from(testData.join(('\n'))));

	const rl = readline.createInterface(fs.createReadStream(`${__dirname}/data.txt`));

	let all_badges = [];

	let group_ctr = 0;

	let sets = [];

	rl.on('line', (line:string) => {
		console.log(line);
		if(sets.length < 3)
		{
			sets.push(new Set([...line]));
		}
		if(sets.length >= 3) {
			sets.forEach(set => { console.log(`set :: ${[...set]}`); });
			all_badges.push([...(sets[0])].filter(item => sets[1].has(item)).filter(item => sets[2].has(item)));
			group_ctr = 0;
			sets = [];
=======
=======
//import * as stream from 'stream';
import * as fs from 'fs';
import * as readline from 'readline';
>>>>>>> 2c5108a (Worked through part one after misinterpreting the reqs.)

const testData = [
  'vJrwpWtwJgWrhcsFMMfFFhFp',
  'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
  'PmmdzqPrVvPwwTWBwg',
  'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn',
  'ttgJtRGJQctTZtZT',
  'CrZsJsPPZsGzwwsLwLmpwMDw',
]

export const rucksackReorganization = () => {

	//const rl = readline.createInterface(stream.Readable.from(testData.join(('\n'))));

	const rl = readline.createInterface(fs.createReadStream(`${__dirname}/data.txt`));

	let all_dupes = [];

	rl.on('line', (line:string) => {
		let halfway = Math.trunc(line.length / 2);

		if((halfway * 2) != line.length) {
			console.error(`Line :: ${line} :: is not an even length.`);
			return false;
>>>>>>> 375a80e (Initial day 1 2 3 checkin)
		}

		let set_0 = new Set(line.slice(0, halfway).trim().split(""));
		let set_1 = new Set(line.slice(halfway).trim().split(""));

		let intersection = [...set_0].filter( item => set_1.has(item));
		if(intersection.length != 1)
		{
			console.error(`bad intersection in ${line}`);
			return false;
		}
		intersection.forEach((item) => all_dupes.push(item));

	});

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2c5108a (Worked through part one after misinterpreting the reqs.)
	// They have annoyingly flipped lower and uppercase values from the axiomatically
	// correct ASCII values.
	// This turnes 'a' into 1 then through 'z' to 26
	// and 'A' into 27 through 'Z' into 52.
	// Jerks. :P

<<<<<<< HEAD
	const convert_char_value = (char:string) => (char.toString()[0] > 'Z')
		? char.toString().charCodeAt(0) - 96
		: char.toString().charCodeAt(0) - 38;

	rl.on('close', () => {

		console.log(`EOF`);
		console.log(`Badge list is ${all_badges}`);

		let this_sum = all_badges.reduce(
			(total:number, item:string) => total + convert_char_value(item), 0);

		console.log(`Summed priorities is ${this_sum}`);
=======
	rl.on('close', () => {
		console.log(`EOF`);
		console.log(`Priority sum was ${priority_sum}`);
>>>>>>> 375a80e (Initial day 1 2 3 checkin)
=======
	const convert_char_value = (char:string) => (char[0] > 'Z')
		? (char.charCodeAt(0) - 96)
		: (char.charCodeAt(0) - 38);

	rl.on('close', () => {
		console.log(`EOF`);
		let priorities_sum = [...all_dupes].reduce(
			(total:number, item:string) => total + convert_char_value(item), 0);

		console.log(`Summed priorities is ${priorities_sum}`);
>>>>>>> 2c5108a (Worked through part one after misinterpreting the reqs.)
	});

	rl.on('error', (error:Error) => {
			console.log(error);
	});

	return 0
}
