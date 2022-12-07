import { readFileSync } from 'fs'

// https://adventofcode.com/2021/day/6
// https://adventofcode.com/2021/day/6/input

const testData = ['3,4,3,1,2']
const useTestData = false

const extrapolateFishAfterGenerations = (
  data: number[],
  generations: number,
) => {
  let fish = new Array(9).fill(0)
  data.forEach(d => fish[d]++)
  for (let i = 0; i < generations; i++) {
    fish = [
      fish[1],
      fish[2],
      fish[3],
      fish[4],
      fish[5],
      fish[6],
      fish[7] + fish[0],
      fish[8],
      fish[0],
    ]
  }
  return fish.reduce((sum, num) => sum + num)
}

export const lanternfish = () => {
  const data = (
    useTestData
      ? testData
      : readFileSync(`${__dirname}/data.txt`, 'utf8').split('\n')
  )[0]
    .split(',')
    .map(n => parseInt(n))

  const result1 = extrapolateFishAfterGenerations(data, 80)
  const result2 = extrapolateFishAfterGenerations(data, 256)

  return [result1, result2]
}
