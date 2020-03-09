module.exports = function getRoomNumber(person) {
  let result
  switch (person) {
    case 'John': result = 1; break
    case 'Leo': result = 2; break
    case 'Michael': result = 7; break
    case 'Ozzy': result = 9; break
    default: result = 0;
  }
  return result
}
