// https://adventofcode.com/2023/day/2
// https://adventofcode.com/2023/day/2/input

import { puzzleData, testData } from './data'

const cubeConundrum = () => {
  const useTestData = false;
  const data = useTestData ? testData : puzzleData

  console.log(data)

  //return [part1(data), part2(data)]
  return [null, part2(data)]
}

const check_cubes = (master_set:{[index: string]:number}, game:string) => {
	let [game_label, phases] = game.split(':');
	let game_value = parseInt(game_label.split(' ')[1]);
	phases.split(';').forEach((phase) => {
		phase.split(',').forEach((reveal) => {
			let [count, color] = reveal.trim().split(' ');
			let count_value = parseInt(count);
			if(count_value > master_set[color]) {
				console.log(`Failing game bc we saw ${count_value} of ${color} :: There are only ${master_set[color]}`);
				game_value = 0;
			}
		});

	});
	console.log(`Returning value >> ${game_value}`);
	return game_value;
};

const part1 = (data: string[]) => {
	const master_set:{[index: string]:number} = {"red":12, "green":13, "blue":14};
	let sum = 0;
	data.forEach((item) => {
		sum += check_cubes(master_set, item);
	});
	return sum;

}

const find_game_cube_power = (game: string) => {
	let [game_label, phases ] = game.split(':');
	let min_cubes:{[index: string]:number} = {"red": 0, "blue":0, "green":0};

	console.log(`Looking at >>${game_label}`);
	phases.split(';').forEach((phase) => {
		phase.split(',').forEach((reveal) => {
			let [count, color] = reveal.trim().split(' ');
			let count_value = parseInt(count);
			if(count_value > min_cubes[color]) {
				console.log(`Setting >>${color} count to ${count}`);
				min_cubes[color] = count_value;
			}
		});

	});
	return min_cubes["red"] * min_cubes["blue"] * min_cubes["green"];
};

const part2 = (data: string[]) => {
	let sum = 0;
	data.forEach((game) => {
		sum += find_game_cube_power(game);
	});
	return sum;
}

export default cubeConundrum

export const solutionData = {
  puzzleData,
  testData,
}
