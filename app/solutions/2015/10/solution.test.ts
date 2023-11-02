import elvesLookElvesSay from './solution'

describe('Solution for Elves Look, Elves Say', () => {
  const answer = elvesLookElvesSay()
  it('Part 1 should have the correct result', () => {
    expect(answer[0]).toBe(252594)
  })
  it('Part 2 should have the correct result', () => {
    expect(answer[1]).toBe(3579328)
  })
})
