
// https://adventofcode.com/2022/day/5
// https://adventofcode.com/2022/day/5/input

import * as stream from 'stream';
import * as fs from 'fs';
import * as readline from 'readline';


const testData = [
  '    [D]    ',
  '[N] [C]    ',
  '[Z] [M] [P]',
  ' 1   2   3 ',
  '',
  'move 1 from 2 to 1',
  'move 3 from 1 to 3',
  'move 2 from 2 to 1',
  'move 1 from 1 to 2',
]

	//const rl = readline.createInterface(stream.Readable.from(testData.join(('\n'))));

	const rl = readline.createInterface(fs.createReadStream(`${__dirname}/data.txt`));

	export const supplyStacks = () => {

		let stacks = [];
		let lines:string[] = [];
		let done_reading = false;

		rl.on('line', (line: string) => {
			console.log(line);
			if(!line) {
				return;
			}
			if(line.includes('move')) {
				console.log(`this here is a move thing ${line}`);
				let _instructions = line.split(' ');
				let _count = parseInt(_instructions[1]);
				let _from = parseInt(_instructions[3]) - 1;
				let _to = parseInt(_instructions[5]) - 1;
				console.log(` moving ${_count} from ${_from} to ${_to}`);
				for(let i = 0; i < _count; i++)
				{
					stacks[_to].unshift(stacks[_from].shift());
				}
				stacks.forEach((stack, idx) => { console.log(`${idx} :: ${stack}`);});
			}
			else if(!line.includes('1') && !done_reading) {
				lines.push(line);
			}
			else {
				done_reading = true;
				lines.forEach(line => {
					line.match(/(\s\s\s\s?|\[[A-Z]\])/g).forEach((item, idx) => {
						if(!stacks[idx]) {
							stacks[idx] = [];
						}
						if(!(item == '    ')) {
							console.log(`adding ::${item}`);
							stacks[idx].push(item);
						}
						else {
							console.log(`skpping ${item}`);
						}
					});
				});
				stacks.forEach((stack, idx) => { console.log(`${idx} :: ${stack}`);});
			}

		});

		rl.on('close', () => {
			console.log(`EOF`);
			console.log(`top level is`);
			stacks.forEach(stack =>  { console.log(`${stack[0]}`);});

		});

		rl.on('error', (error: Error) => {
			console.log(error);
		});
		return 0
	}
