const price = require('./script')
describe('price function', () => {
  it ('calculates the correct value when we order less than 500 items', () =>
    expect(price({ quantity: 100, itemPrice: 1 })).toBe(110)
  )
  it ('calculates the correct value when we order more than 500 items', () =>
    expect(price({ quantity: 600, itemPrice: 1 })).toBe(656)
  )
  it ('calculates the correct value when we order more than 500 items', () => {
    expect(price({ quantity: 600, itemPrice: 1 })).toBe(656)
    expect(price({ quantity: 6000, itemPrice: 1 })).toBe(5880)
  })
})
