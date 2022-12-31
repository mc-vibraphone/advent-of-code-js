import fullOfHotAir from './solution'

describe('Solution for Full Of Hot Air', () => {
  const answer = fullOfHotAir()
  it('Part 1 should have the correct result', () => {
    expect(answer[0]).toBe('2-1=10=1=1==2-1=-221')
  })
  it('Part 2 should have the correct result', () => {
    expect(answer[1]).toBe(0)
  })
})
