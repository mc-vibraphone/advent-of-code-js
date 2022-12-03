import { readFileSync } from 'fs'

// https://adventofcode.com/2021/day/3
// https://adventofcode.com/2021/day/3/input

const testData = [
  '00100',
  '11110',
  '10110',
  '10111',
  '10101',
  '01111',
  '00111',
  '11100',
  '10000',
  '11001',
  '00010',
  '01010',
]
const useTestData = false

export const binaryDiagnostic = () => {
  const data = useTestData
    ? testData
    : readFileSync(`${__dirname}/data.txt`, 'utf8').split('\n')

  let gamma = ''
  let epsilon = ''
  for (let i = 0; i < data[0].length; i++) {
    const digits = data.reduce(
      (sum, num) => sum + parseInt(num.split('')[i]),
      0,
    )
    gamma += digits > data.length / 2 ? 1 : 0
    epsilon += digits > data.length / 2 ? 0 : 1
  }
  const result1 = parseInt(gamma, 2) * parseInt(epsilon, 2)

  let oxyGenList = [...data]
  for (let i = 0; i < data[0].length; i++) {
    const digits = oxyGenList.reduce(
      (sum, num) => sum + parseInt(num.split('')[i]),
      0,
    )
    const common = digits >= oxyGenList.length / 2 ? '1' : '0'

    oxyGenList = oxyGenList.filter(d => d.split('')[i] === common)

    if (oxyGenList.length === 1) {
      break
    }
  }

  let c02ScrubList = [...data]
  for (let i = 0; i < data[0].length; i++) {
    const digits = c02ScrubList.reduce(
      (sum, num) => sum + parseInt(num.split('')[i]),
      0,
    )
    const leastCommon = digits < c02ScrubList.length / 2 ? '1' : '0'

    c02ScrubList = c02ScrubList.filter(d => d.split('')[i] === leastCommon)
    if (c02ScrubList.length === 1) {
      break
    }
  }

  const result2 = parseInt(oxyGenList[0], 2) * parseInt(c02ScrubList[0], 2)

  return [result1, result2]
}
