import monkeyMap from './solution'

describe('Solution for Monkey Map', () => {
  const answer = monkeyMap()
  it('Part 1 should have the correct result', () => {
    expect(answer[0]).toBe(11464)
  })
  it('Part 2 should have the correct result', () => {
    expect(answer[1]).toBe(0)
  })
})
