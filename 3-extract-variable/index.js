const calculatePrice = ({ quantity, itemPrice }) =>
  quantity * itemPrice - // base price
  Math.max(0, quantity - 500) * itemPrice * 0.04 + // quantity discount
  Math.min(quantity * itemPrice * 0.1, 100); // shipping

module.exports = calculatePrice;

/* Motivation:
 * Quand une expression devient complexe et difficile à lire, il fautdrait introduire des variable locale pour la simplifier et la rendre plus maniable.
 * Avec des variable bien nommées on communique l'intention et on comprend mieux ce qui se passe. */
