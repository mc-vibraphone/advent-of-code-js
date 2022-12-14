import { readFileSync } from 'fs'
import { cloneDeep } from 'lodash'

// https://adventofcode.com/2022/day/5
// https://adventofcode.com/2022/day/5/input

const testData = [
  '    [D]    ',
  '[N] [C]    ',
  '[Z] [M] [P]',
  ' 1   2   3 ',
  '',
  'move 1 from 2 to 1',
  'move 3 from 1 to 3',
  'move 2 from 2 to 1',
  'move 1 from 1 to 2',
]
const useTestData = false

export const supplyStacks = () => {
  const data = useTestData
    ? testData
    : readFileSync(`${__dirname}/data.txt`, 'utf8').split('\n')

  const dataSeparator = data.indexOf('')
  const stacks = data[dataSeparator - 2].split(' ').map(_ => [])

  for (let i = dataSeparator - 2; i >= 0; i--) {
    for (let s = 0; s < stacks.length; s++) {
      if (data[i].slice(s * 4 + 1, s * 4 + 2) !== ' ') {
        stacks[s].push(data[i].slice(s * 4 + 1, s * 4 + 2))
      }
    }
  }

  const stacks1 = cloneDeep(stacks)
  for (let i = dataSeparator + 1; i < data.length; i++) {
    const manuever = data[i]
      .replace('move ', '')
      .replace('from ', '')
      .replace('to ', '')
      .split(' ')
      .map(_ => parseInt(_))
    for (let n = 1; n <= manuever[0]; n++) {
      const block = stacks1[manuever[1] - 1].pop()
      stacks1[manuever[2] - 1].push(block)
    }
  }
  const result1 = stacks1.map(s => s[s.length - 1]).join('')

  const stacks2 = cloneDeep(stacks)
  for (let i = dataSeparator + 1; i < data.length; i++) {
    const manuever = data[i]
      .replace('move ', '')
      .replace('from ', '')
      .replace('to ', '')
      .split(' ')
      .map(_ => parseInt(_))

    let selection = stacks2[manuever[1] - 1].splice(
      stacks2[manuever[1] - 1].length - manuever[0],
      manuever[0],
    )
    stacks2[manuever[2] - 1].push(...selection)
  }
  const result2 = stacks2.map(s => s[s.length - 1]).join('')

  return [result1, result2]
}
