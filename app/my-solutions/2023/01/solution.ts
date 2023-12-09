// https://adventofcode.com/2023/day/1
// https://adventofcode.com/2023/day/1/input

import { puzzleData, testData } from './data'

const part2_test_data = [
	'two1nine',
	'eightwothree',
	'abcone2threexyz',
	'xtwone3four',
	'4nineeightseven2',
	'zoneight234',
	'7pqrstsixteen',
];


const trebuchet = () => {
  const useTestData = false;
  const data = useTestData ? testData : puzzleData

  return [part1(data), part2(data)]
}

const part1 = (data: string[]) => {
	let sum = 0;
	data.forEach((item) => {
		const re = /\d/g;
		const values = [...item.matchAll(re)];
		sum += parseInt(values[0].toString() + values[values.length - 1].toString());
	});
	return sum;
}

const token_to_number = (token: string) => {
	switch(token) {
		case "one":
			return 1;
		case "two":
			return 2;
		case "three":
			return 3;
		case "four":
			return 4;
		case "five":
			return 5;
		case "six":
			return 6;
		case "seven":
			return 7;
		case "eight":
			return 8;
		case "nine":
			return 9;
		default:
			console.assert(false);
			return null;
	}
};

const make_a_number = (tens_place: string, ones_place: string) => {
	// See if we have a numeric character (so like 1 - 9) or a string token of a numer (so like one two ... eight nine)
	let numeric_tens = parseInt(tens_place);
	if(isNaN(numeric_tens)) {
		numeric_tens = token_to_number(tens_place)!;
	}
	let numeric_ones = parseInt(ones_place);
	if(isNaN(numeric_ones)) {
		numeric_ones = token_to_number(ones_place)!;
	}
	console.assert(numeric_tens < 10);
	console.assert(numeric_ones < 10);
	console.assert(10 * numeric_tens + numeric_ones < 100);
	return (10 * numeric_tens) + numeric_ones;
};
const part2 = (data: string[]) => {
	let sum = 0;
	data.forEach((item) => {
		const re = /\d|one|two|three|four|five|six|seven|eight|nine/g;
		const values = [...item.matchAll(re)];
		sum += make_a_number(values[0].toString(), values[values.length - 1].toString());
	});
	return sum;
}

export default trebuchet

export const solutionData = {
  puzzleData,
  testData,
}
