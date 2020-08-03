// priority possible values: low, medium, high
const getOrdersWithPriorityHigherThanLow = orders =>
  orders.filter(
    order => order.priority === "medium" || order.priority === "high"
  );

module.exports = { getOrdersWithPriorityHigherThanLow };

/* Motivation:
 * Utiliser des types simples pour des données est pratique au début; mais au fil du temps elles ne le sont plus.
 * Créer une couche d'abstraction devient nécessaire
 * Exemple: représenter un numéro de téléphone avec un chaîne de caractères */
