// https://adventofcode.com/2022/day/1
// https://adventofcode.com/2022/day/1/input

import { puzzleData, testData } from './data'

const part1 = (data: string[]) => {
  return calculateTotals(data)[0]
}

const part2 = (data: string[]) => {
  return calculateTotals(data)
    .slice(0, 3)
    .reduce((sum, val) => sum + val, 0)
}

export const solutionData = {
  puzzleData,
  testData,
}

const calculateTotals = (data: string[]) => {
  const results = [0]
  data.forEach(snack => {
    const calories = parseInt(snack)
    if (isNaN(calories)) {
      results.push(0)
    } else {
      results[results.length - 1] = results[results.length - 1] + calories
    }
  })

  return results.sort((a, b) => b - a)
}

export const calorieCounting = () => {
  const useTestData = false
  const data = useTestData ? testData : puzzleData

  return [part1(data), part2(data)]
}

// Other exports should go below
