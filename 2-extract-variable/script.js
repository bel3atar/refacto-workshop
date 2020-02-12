function price(order) {
  return order.quantity * order.itemPrice -  // base price
    Math.max(0, order.quantity - 500) * order.itemPrice * 0.04 + // quantity discount
    Math.min(order.quantity * order.itemPrice * 0.1, 100) // shipping
}
module.exports = price
