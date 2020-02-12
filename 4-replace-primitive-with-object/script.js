// priority possible values: normal, high, rush
function ordersWithPriorityHigherThanNormal(orders) {
  return orders.filter(order => order.priority === "high" || order.priority === "rush")
}
module.exports = {
  ordersWithPriorityHigherThanNormal,
}
