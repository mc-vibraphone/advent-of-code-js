import { readFileSync } from 'fs'
import { flatten, range } from 'lodash'

// https://adventofcode.com/2021/day/5
// https://adventofcode.com/2021/day/5/input

const testData = [
  '0,9 -> 5,9',
  '8,0 -> 0,8',
  '9,4 -> 3,4',
  '2,2 -> 2,1',
  '7,0 -> 7,4',
  '6,4 -> 2,0',
  '0,9 -> 2,9',
  '3,4 -> 1,4',
  '0,0 -> 8,8',
  '5,5 -> 8,2',
]
const useTestData = false

const produceCoordinateSet = ({ x1, y1, x2, y2 }) => {
  let xs = range(x1, x2 + (x1 <= x2 ? 1 : -1))
  let ys = range(y1, y2 + (y1 <= y2 ? 1 : -1))
  const segmentLength = Math.max(xs.length, ys.length)
  if (xs.length !== segmentLength) {
    for (let i = 0; i < segmentLength - 1; i++) {
      xs.push(xs[0])
    }
  }
  if (ys.length !== segmentLength) {
    for (let i = 0; i < segmentLength - 1; i++) {
      ys.push(ys[0])
    }
  }
  return xs.map((x, idx) => `${x}|${ys[idx]}`)
}

const findOverlappingCoords = (
  data: string[],
  includeDiags: boolean = false,
) => {
  let coords = data
    .map(d =>
      flatten(d.split(' -> ').map(c => c.split(','))).map(n => parseInt(n)),
    )
    .map(([x1, y1, x2, y2]) => ({ x1, y1, x2, y2 }))
  if (!includeDiags) {
    coords = coords.filter(
      coord => coord.x1 === coord.x2 || coord.y1 === coord.y2,
    )
  }
  let coordsCount = flatten(
    coords.map(coord => produceCoordinateSet(coord)),
  ).reduce((counter, coord) => {
    if (counter[coord]) {
      counter[coord]++
    } else {
      counter[coord] = 1
    }
    return counter
  }, {})
  return Object.keys(coordsCount).filter(key => coordsCount[key] > 1).length
}

export const hydrothermalVenture = () => {
  const data = useTestData
    ? testData
    : readFileSync(`${__dirname}/data.txt`, 'utf8').split('\n')
  const result1 = findOverlappingCoords(data)
  const result2 = findOverlappingCoords(data, true)

  return [result1, result2]
}
