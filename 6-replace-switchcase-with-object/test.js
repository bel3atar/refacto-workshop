const getRoomNumber = require('./script')

describe('my function', () => {
  it('should return the correct room number', () => {
    expect(getRoomNumber('Ozzy')).toBe(9)
    expect(getRoomNumber('Michael')).toBe(7)
  })
  it('should return 0 when the person is not found', () => {
    expect(getRoomNumber('Jeremy')).toBe(0)
  })
})
