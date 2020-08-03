const getProgrammersNames = people => {
  const names = [];
  for (const person of people)
    if (person.job === "programmer") names.push(person.name);
  return names;
};

const sumNumbers = string => {
  const split = string.split(",");
  let sum = 0;
  for (var i = 0; i < split.length; ++i) sum += Number(split[i]);
  return sum;
};

module.exports = { getProgrammersNames, sumNumbers };
/* Motivation:
 * Les pipelines permettent de décrire le traitement sous forme de séries d'opérations, où chacune consomme et génère une collection.
 * La logique est plus facile à suivre.
 * On lit du haut en bas pour voir comment les objets traversent la pipeline */
