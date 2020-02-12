const readingsOutsideRange = require('./script')

const station = {
  name: "ZB1",
  readings: [
    { temp: 47, time: 0 },
    { temp: 53, time: 1 },
    { temp: 58, time: 2 },
    { temp: 53, time: 3 },
    { temp: 51, time: 4 },
  ]
}

describe('readingsOutsideRange function', () => {
  it('should filter results correctly', () =>
    expect(readingsOutsideRange(station, 40, 50)).toStrictEqual([
      { temp: 53, time: 1 },
      { temp: 58, time: 2 },
      { temp: 53, time: 3 },
      { temp: 51, time: 4 },
    ])
  )
})
