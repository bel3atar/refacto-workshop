const { ordersWithPriorityHigherThanNormal } = require('./script')
describe('ordersWithPriorityHigherThan function', () => {
  const fakeOrders = [
    {id: 1, priority: "rush"},
    {id: 2, priority: "high"},
    {id: 3, priority: "normal"},
    {id: 4, priority: "high"},
  ]
  it('should filter orders correclty', () => 
    expect(
      ordersWithPriorityHigherThanNormal(fakeOrders)
      .map(({ id }) => id))
      .toStrictEqual([1, 2, 4]))
})

xdescribe('Priority class', () => {
  it('should function correctly', () => {
    expect(String(new Priority("high"))).toBe('high')
    expect(Number(new Priority("high"))).toBe(1)
    expect(`p${new Priority('normal')}`).toBe('pnormal')
    expect(new Priority('normal') < new Priority('high'))
    expect(new Priority('normal') < new Priority('rush'))
    expect(new Priority('normal') > new Priority('rush')).toBe(false)
    expect(new Priority('normal') > new Priority('rush')).toBe(false)
    expect(new Priority('high') < new Priority('rush'))
    expect(new Priority('rush') <= new Priority('rush'))
    expect(new Priority('high') === new Priority('high'))
    expect(() => new Priority('xxxx')).toThrow(Error)
  })
})
