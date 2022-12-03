import { readFileSync } from 'fs'

// https://adventofcode.com/2022/day/3
// https://adventofcode.com/2022/day/3/input

const testData = [
  'vJrwpWtwJgWrhcsFMMfFFhFp',
  'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
  'PmmdzqPrVvPwwTWBwg',
  'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn',
  'ttgJtRGJQctTZtZT',
  'CrZsJsPPZsGzwwsLwLmpwMDw',
]

export const rucksackReorganization = () => {
  const data = readFileSync(`${__dirname}/data.txt`, 'utf8').split('\n')

  const alpha = 'abcdefghijklmnopqrstuvwxyz'
  let score1 = 0

  data.forEach(rucksack => {
    const compartment1 = rucksack.slice(0, rucksack.length / 2)
    const compartment2 = rucksack.slice(rucksack.length / 2)

    const match = compartment1.split('').reduce((match, letter) => {
      if (compartment2.includes(letter)) {
        return letter
      }
      return match
    }, '')

    if (alpha.includes(match)) {
      score1 += alpha.indexOf(match) + 1
    }
    if (alpha.toUpperCase().includes(match)) {
      score1 += alpha.toUpperCase().indexOf(match) + 27
    }

    // console.log(`${compartment1} ${compartment2} - ${match}`)
  })

  let score2 = 0
  for (let i = 0; i < 100; i++) {
    const sacks = data.slice(i * 3, i * 3 + 3)

    const match = sacks[0].split('').reduce((match, item) => {
      if (sacks[1].includes(item) && sacks[2].includes(item)) {
        return item
      }
      return match
    }, '')
    // console.log(sacks, match)

    if (alpha.includes(match)) {
      score2 += alpha.indexOf(match) + 1
    }
    if (alpha.toUpperCase().includes(match)) {
      score2 += alpha.toUpperCase().indexOf(match) + 27
    }
  }

  return [score1, score2]
}
