
// https://adventofcode.com/2022/day/1
// https://adventofcode.com/2022/day/1/input

const testData = [
  '1000',
  '2000',
  '3000',
  '',
  '4000',
  '',
  '5000',
  '6000',
  '',
  '7000',
  '8000',
  '9000',
  '',
  '10000',
]

export const doAThing = () => {

	const fs = require('node:fs');

	const readline = require('node:readline');

	const rl = readline.createInterface(fs.createReadStream(`${__dirname}/data.txt`));

	let current_elf_calories = [];
	let all_calories = [-1];

	rl.on('line', (line) => {
		if("" == line) {
			let total_calories = 0;
			current_elf_calories.forEach((calorie) => {
				total_calories += calorie;
			});

			all_calories.every((this_one, idx) => {
				if(total_calories >= this_one) {
					all_calories.splice(idx, 0, total_calories);
					return false;
				}
				return true;
			});
			current_elf_calories = [];
		}
		else {
			current_elf_calories.push(parseInt(line));
		}
	});

	rl.on('close', ()=> {
		console.log("EOF");
		console.log(`Highest calorie count is ${all_calories[0]}`);
		console.log(`3 highest calorie counts are ${all_calories[0]} :: ${all_calories[1]} :: ${all_calories[2]} :: ${all_calories.slice(0, 3).reduce((sum, value) => sum + value)}`);
	});
}
