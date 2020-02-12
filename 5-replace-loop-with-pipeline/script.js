module.exports = function getProgrammerNames(people) {
  const names = []
  for (const person of people)
    if (person.job === 'programmer')
      names.push(person.name)
  return names
}
