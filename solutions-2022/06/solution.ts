import { readFileSync } from 'fs'
import { uniq } from 'lodash'

// https://adventofcode.com/2022/day/6
// https://adventofcode.com/2022/day/6/input

const testData = ['mjqjpqmgbljsphdztnvjfqwrcgsml']
const useTestData = false

export const tuningTrouble = () => {
  const data = useTestData
    ? testData[0]
    : readFileSync(`${__dirname}/data.txt`, 'utf8').split('\n')[0]

  let result1 = 0
  for (let i = 4; i <= data.length; i++) {
    if (uniq(data.slice(i - 4, i)).length === 4) {
      result1 = i
      break
    }
  }

  let result2 = 0
  for (let i = 14; i <= data.length; i++) {
    if (uniq(data.slice(i - 14, i)).length === 14) {
      result2 = i
      break
    }
  }

  return [result1, result2]
}
