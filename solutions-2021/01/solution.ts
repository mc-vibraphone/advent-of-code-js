import { readFileSync } from 'fs'

// https://adventofcode.com/2021/day/1
// https://adventofcode.com/2021/day/1/input

const testData = [
  '199',
  '200',
  '208',
  '210',
  '200',
  '207',
  '240',
  '269',
  '260',
  '263',
]
const useTestData = false

export const sonarSweep = () => {
  const data = (
    useTestData
      ? testData
      : readFileSync(`${__dirname}/data.txt`, 'utf8').split('\n')
  ).map(i => parseInt(i))
  let increasedMeasurements1 = 0
  data.forEach((measurement, idx) => {
    if (idx > 0 && measurement > data[idx - 1]) {
      increasedMeasurements1++
    }
  })

  let increasedMeasurements2 = 0
  data.forEach((_, idx) => {
    if (
      idx > 0 &&
      data.slice(idx, idx + 3).reduce((sum, val) => sum + val) >
        data.slice(idx - 1, idx + 2).reduce((sum, val) => sum + val) &&
      data.slice(idx, idx + 3).length === 3
    ) {
      increasedMeasurements2++
    }
  })

  return [increasedMeasurements1, increasedMeasurements2]
}
