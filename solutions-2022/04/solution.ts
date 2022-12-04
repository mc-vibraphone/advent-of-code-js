import { readFileSync } from 'fs'

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
  const data = readFileSync(`${__dirname}/data.txt`, 'utf8').split('\n')
  console.log(testData)
  return 0
}
