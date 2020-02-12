const getProgrammerNames = require('./script')
describe('getProgrammerNames function', () => {
  it('should only get the names of the programmers', () => {
    const fakePeople = [
      {name: 'Donald Knuth', job: 'programmer'},
      {name: 'Michael Jordan', job: 'sportsman'},
      {name: 'Dimitri Konstantinidis', job: 'actor'},
      {name: 'Richard Stallman', job: 'programmer'},
      {name: 'Andy Ngo', job: 'singer'},
    ]
    expect(getProgrammerNames(fakePeople)).toStrictEqual([
      'Donald Knuth', 'Richard Stallman'
    ])
  })
})
