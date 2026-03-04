function calculateDeliveryFee(order) {
  let fee = 30;
  if (order.distance > 5) {
    fee = 50;
  }
  if (order.totalAmount > 500) {
    fee = 0;
  }
  return fee;
}
module.exports = calculateDeliveryFee;
