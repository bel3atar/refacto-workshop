function raiseFivePercent(salary) {
  return salary * 1.05;
}
function raiseTenPercent(salary) {
  return salary * 1.1;
}

module.exports = { raiseFivePercent, raiseTenPercent };

/* Motivation:
 * Si on voit plusieurs fonctions qui ont une logique similaire avec différentes valeurs, on pourrait supprimer la duplication de code en utilisant une unique fonction avec un paramètre pour ces différentes valeurs. Ceci augmente l'utilité de la fonction puisqu'on peut l'appliquer ailleurs avec différentes valeurs.  */
