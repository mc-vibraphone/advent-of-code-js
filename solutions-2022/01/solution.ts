import { readFileSync } from 'fs'

// https://adventofcode.com/2022/day/1
// https://adventofcode.com/2022/day/1/input

const testData = [
  '1000',
  '2000',
  '3000',
  '',
  '4000',
  '',
  '5000',
  '6000',
  '',
  '7000',
  '8000',
  '9000',
  '',
  '10000',
]

export const calorieCounting = () => {
  const data = readFileSync(`${__dirname}/data.txt`, 'utf8').split('\n')

  const results = [0]
  data.forEach(snack => {
    const calories = parseInt(snack)
    if (isNaN(calories)) {
      results.push(0)
    } else {
      results[results.length - 1] = results[results.length - 1] + calories
    }
  })

  results.sort((a, b) => b - a)

  const answer1 = results[0]
  const answer2 = results.slice(0, 3).reduce((sum, val) => sum + val, 0)
  return [answer1, answer2]
}
