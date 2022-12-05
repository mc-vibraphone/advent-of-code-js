import * as stream from 'stream';
import * as fs from 'fs';
import * as readline from 'readline';


// https://adventofcode.com/2022/day/4
// https://adventofcode.com/2022/day/4/input

const testData = [
  '2-4,6-8',
  '2-3,4-5',
  '5-7,7-9',
  '2-8,3-7',
  '6-6,4-6',
  '2-6,4-8',
]

export const campCleanup = () => {

	//const rl = readline.createInterface(stream.Readable.from(testData.join(('\n'))));

	const rl = readline.createInterface(fs.createReadStream(`${__dirname}/data.txt`));

	function check_containment(pair:string)
	{
		let areas:string [] = pair.split(',');
		let area_0:number[] = Array.from(areas[0].split('-')).map(item => parseInt(item));
		let area_1:number[] = Array.from(areas[1].split('-')).map(item => parseInt(item));
		if((area_0[0] <= area_1[0]) && (area_0[1] >= area_1[1])) {
			return true;
		}
		if(area_1[0] <= area_0[0] && area_1[1] >= area_0[1]) {
			return true;
		}
		return false;
	}

	let total:number = 0;

	rl.on('line', (line:string) => {
		if(check_containment(line)) {
			total++;
		}

	});
	rl.on('close', () => {

		console.log(`EOF`);
		console.log(`Total enclosed things were ${total}`);
	});

	rl.on('error', (error:Error) => {
		console.log(error);
	});

	return 0
}
