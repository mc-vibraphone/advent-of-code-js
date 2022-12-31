import monkeyInTheMiddle from './solution'

describe('Solution for Monkey in the Middle', () => {
  const answer = monkeyInTheMiddle()
  it('Part 1 should have the correct result', () => {
    expect(answer[0]).toBe(120056)
  })
  it('Part 2 should have the correct result', () => {
    expect(answer[1]).toBe(0)
  })
})
