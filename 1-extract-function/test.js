const printOwing = require('./script')

describe('printOwing function', () => {
  it('should call console.log() with correct values', () => {
    const spy = jest.spyOn(console, 'log')

    const invoice = { customer: 'Jean-Baptiste Larraché' }
    printOwing(invoice)

    expect(console.log).toHaveBeenCalledTimes(3)
    expect(console.log).toHaveBeenNthCalledWith(2, 'name: Jean-Baptiste Larraché')
    expect(console.log).toHaveBeenNthCalledWith(3, 'amount: 10')

    spy.mockRestore()
  })
})
