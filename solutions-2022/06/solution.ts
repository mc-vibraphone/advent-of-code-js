import { readFileSync } from 'fs'

// https://adventofcode.com/2022/day/6
// https://adventofcode.com/2022/day/6/input
<<<<<<< HEAD
//
import * as stream from 'stream';
import * as fs from 'fs';
import * as readline from 'readline';


const testData = [

//	'mjqjpqmgbljsphdztnvjfqwrcgsml',
//	'bvwbjplbgvbhsrlpgdmjqwftvncz',
//	'nppdvjthqldpwncqszvftbrmjlhg',
//	'nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg',
//	'zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw'
	//	2 star inputs
	'mjqjpqmgbljsphdztnvjfqwrcgsmlb',
	'bvwbjplbgvbhsrlpgdmjqwftvncz',
	'nppdvjthqldpwncqszvftbrmjlhg',
	'nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg',
	'zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw',
]

export const tuningTrouble = () => {

	//const rl = readline.createInterface(stream.Readable.from(testData.join(('\n'))));

	const rl = readline.createInterface(fs.createReadStream(`${__dirname}/data.txt`));

	rl.on('line', (line:string) => {
		console.log(line);
		let _data = [...line];
		let _start = 0;
		let _end = 14;
		let buff = new Set();
		_data.slice(_start, _end).forEach(x => buff.add(x));
		while(buff.size != 14 && _end < _data.length) {
			buff = new Set();
			_start++, _end++;
			_data.slice(_start, _end).forEach(x => buff.add(x));
		}
		if(14 == buff.size) {
			console.log(`EOM is at ${_end}`);
		}
		else {
			console.log(`No marker found.`);
		}
	});

	rl.on('end', () => {
		console.log("EOF");
	});

	return 0
=======

const testData = [
  'mjqjpqmgbljsphdztnvjfqwrcgsml',
]

export const tuningTrouble = () => {
  const data = readFileSync(`${__dirname}/data.txt`, 'utf8').split('\n')
  console.log(testData)
  return 0
>>>>>>> 1ea1d7f (day 6 initial commit)
}
