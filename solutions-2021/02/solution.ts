import { readFileSync } from 'fs'

// https://adventofcode.com/2021/day/2
// https://adventofcode.com/2021/day/2/input

const testData = [
  'forward 5',
  'down 5',
  'forward 8',
  'up 3',
  'down 8',
  'forward 2',
]
const useTestData = false

export const dive = () => {
  const data = useTestData
    ? testData
    : readFileSync(`${__dirname}/data.txt`, 'utf8').split('\n')

  const position1 = data.reduce(
    (position, move) => {
      const [direction, magnitude] = move.split(' ')
      if (direction === 'forward') {
        position.distance += parseInt(magnitude)
      } else if (direction === 'down') {
        position.depth += parseInt(magnitude)
      } else if (direction === 'up') {
        position.depth -= parseInt(magnitude)
      }
      return position
    },
    { distance: 0, depth: 0 },
  )

  const position2 = data.reduce(
    (position, move) => {
      const [direction, magnitude] = move.split(' ')
      if (direction === 'forward') {
        position.distance += parseInt(magnitude)
        position.depth += position.aim * parseInt(magnitude)
      } else if (direction === 'down') {
        position.aim += parseInt(magnitude)
      } else if (direction === 'up') {
        position.aim -= parseInt(magnitude)
      }
      return position
    },
    { distance: 0, depth: 0, aim: 0 },
  )

  return [
    position1.distance * position1.depth,
    position2.distance * position2.depth,
  ]
}
