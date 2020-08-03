const printInvoice = require('.')

describe('printInvoice function', () => {
  it('should call console.log() with correct values', () => {
    const spy = jest.spyOn(console, 'log')

    const invoice = { customer: 'Jean-Baptiste Larraché' }
    printInvoice(invoice)

    expect(console.log).toHaveBeenCalledTimes(3)
    expect(console.log).toHaveBeenNthCalledWith(2, 'name: Jean-Baptiste Larraché')
    expect(console.log).toHaveBeenNthCalledWith(3, 'amount: 10')

    spy.mockRestore()
  })
})
