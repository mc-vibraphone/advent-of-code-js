import { readFileSync } from 'fs'
import { range, intersection } from 'lodash'

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
const useTestData = false

export const campCleanup = () => {
  const data = useTestData
    ? testData
    : readFileSync(`${__dirname}/data.txt`, 'utf8').split('\n')

  const pairs = data.map(pair =>
    pair
      .split(',')
      .map(assignment =>
        assignment.split('-').map(section => parseInt(section)),
      ),
  )

  let target1 = 0
  pairs.forEach(pair => {
    const [assignment1, assignment2] = pair

    if (
      (assignment1[0] <= assignment2[0] && assignment1[1] >= assignment2[1]) ||
      (assignment2[0] <= assignment1[0] && assignment2[1] >= assignment1[1])
    ) {
      target1++
    }
  })

  let target2 = 0
  pairs.forEach(pair => {
    const [assignment1, assignment2] = pair
    const range1 = range(assignment1[0], assignment1[1] + 1)
    const range2 = range(assignment2[0], assignment2[1] + 1)
    if (intersection(range1, range2).length) {
      target2++
    }
  })

  return [target1, target2]
}
