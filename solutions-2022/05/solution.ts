<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { readFileSync } from 'fs'
>>>>>>> 7f5443e (day 5 initial)
=======
import { readFileSync } from 'fs'
>>>>>>> f08969e (day 5 stuff)
=======
>>>>>>> 097fe03 (wip)

// https://adventofcode.com/2022/day/5
// https://adventofcode.com/2022/day/5/input

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 097fe03 (wip)
import * as stream from 'stream';
import * as fs from 'fs';
import * as readline from 'readline';


<<<<<<< HEAD
=======
>>>>>>> 7f5443e (day 5 initial)
=======
>>>>>>> f08969e (day 5 stuff)
=======
>>>>>>> 097fe03 (wip)
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

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
	//const rl = readline.createInterface(stream.Readable.from(testData.join(('\n'))));

	const rl = readline.createInterface(fs.createReadStream(`${__dirname}/data.txt`));

	export const supplyStacks = () => {

		let stacks = [];
		let lines:string[] = [];
		let done_reading = false;

		rl.on('line', (line: string) => {
<<<<<<< HEAD
			if(!line) {
				return;
			}
			if(line.includes('move')) {
				let _instructions = line.split(' ');
				let _count = parseInt(_instructions[1]);
				let _from = parseInt(_instructions[3]) - 1;
				let _to = parseInt(_instructions[5]) - 1;

				let _to_move = stacks[_from].splice(0, _count);

				stacks[_to] = _to_move.concat(stacks[_to]);

//				stacks.forEach((stack, idx) => { console.log(`${idx}:: length ::${stack.length} :: ` + `${stack}`.padStart(20, '_'));});
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
				stacks.forEach((stack, idx) => { console.log(`${idx}:: length ::${stack.length} :: ` + `${stack}`.padStart(20, '_'));});
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
=======
=======
>>>>>>> f08969e (day 5 stuff)
=======
	const rl = readline.createInterface(stream.Readable.from(testData.join(('\n'))));
=======
	//const rl = readline.createInterface(stream.Readable.from(testData.join(('\n'))));
>>>>>>> 57487ef (day 1 complete)

	const rl = readline.createInterface(fs.createReadStream(`${__dirname}/data.txt`));

<<<<<<< HEAD
>>>>>>> 097fe03 (wip)
export const supplyStacks = () => {
=======
	export const supplyStacks = () => {
>>>>>>> 57487ef (day 1 complete)

		let stacks = [];
		let lines:string[] = [];
		let done_reading = false;

		rl.on('line', (line: string) => {
			console.log(line);
=======
>>>>>>> 1db3390 (2 star complete)
			if(!line) {
				return;
			}
			if(line.includes('move')) {
				let _instructions = line.split(' ');
				let _count = parseInt(_instructions[1]);
				let _from = parseInt(_instructions[3]) - 1;
				let _to = parseInt(_instructions[5]) - 1;

				let _to_move = stacks[_from].splice(0, _count);

				stacks[_to] = _to_move.concat(stacks[_to]);

//				stacks.forEach((stack, idx) => { console.log(`${idx}:: length ::${stack.length} :: ` + `${stack}`.padStart(20, '_'));});
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
				stacks.forEach((stack, idx) => { console.log(`${idx}:: length ::${stack.length} :: ` + `${stack}`.padStart(20, '_'));});
			}

		});

<<<<<<< HEAD
  rl.on('error', (error: Error) => {
    console.log(error);
  });
  return 0
}
<<<<<<< HEAD
>>>>>>> 7f5443e (day 5 initial)
=======
>>>>>>> f08969e (day 5 stuff)
=======
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
>>>>>>> 57487ef (day 1 complete)
