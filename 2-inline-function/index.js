const driverHasMoreThanFiveLateDeliveries = driver =>
  driver.lateDeliveriesCount > 5;
const getRating = driver =>
  driverHasMoreThanFiveLateDeliveries(driver) ? 2 : 1;

module.exports = getRating;

/* Motivation:
 * Parfois on passe sur une fonction dont le corps est clair comme son nom. Dans ce cas il vaut mieux rendre cette fonction inline
 */
