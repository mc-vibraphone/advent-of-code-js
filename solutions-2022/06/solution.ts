import { readFileSync } from 'fs'

// https://adventofcode.com/2022/day/6
// https://adventofcode.com/2022/day/6/input

const testData = [
  'mjqjpqmgbljsphdztnvjfqwrcgsml',
]

export const tuningTrouble = () => {
  const data = readFileSync(`${__dirname}/data.txt`, 'utf8').split('\n')
  console.log(testData)
  return 0
}
