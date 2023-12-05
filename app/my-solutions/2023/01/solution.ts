// https://adventofcode.com/2023/day/1
// https://adventofcode.com/2023/day/1/input

import { puzzleData, testData } from './data'

const trebuchet = () => {
  const useTestData = true
  const data = useTestData ? testData : puzzleData

  console.log(data)

  return [part1(data), part2(data)]
}

const part1 = (data: string[]) => {
  return null
}

const part2 = (data: string[]) => {
  return null
}

export default trebuchet

export const solutionData = {
  puzzleData,
  testData,
}
