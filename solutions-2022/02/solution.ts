
// https://adventofcode.com/2022/day/2
// https://adventofcode.com/2022/day/2/input

const testData = [
  'A Y',
  'B X',
  'C Z',
]

export const rps = () => {

	const fs = require('fs');

	const readline = require('node:readline');

	const rl = readline.createInterface(fs.createReadStream(`${__dirname}/data.txt`));

	// Opponent - 
	// A - rock
	// B - paper
	// C - scissors
	// Self -
	// X - rock
	// Y - paper
	// Z -- scissors

	const game_matrix = { 'AX': 3, 'AY': 6, 'AZ': 0,
			      'BX': 0, 'BY': 3, 'BZ': 6,
			      'CX': 6, 'CY': 0, 'CZ': 3,
	};

	const game_results = {'X': {'A': 'AZ', 'B': 'BX', 'C': 'CY'}, // lose
			      'Y': {'A': 'AX', 'B': 'BY', 'C': 'CZ'}, // draw
			      'Z': {'A': 'AY', 'B': 'BZ', 'C': 'CX'}, // win
	};

	const item_score = { 'X': 1, 'Y': 2, 'Z': 3,};

	let total_score = 0;

	rl.on('line', (line) => {
		const signs = line.trim().split(' ');
		let result = game_results[signs[1]][signs[0]];
		console.log(`${signs} :: ${result} :: ${result[1]}`);
		total_score += game_matrix[result];
		total_score += item_score[result[1]];
	});

	rl.on('close', () => {
		console.log(`Total score was ${total_score}.`);
	});

	return 0;
}
