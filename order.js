function calculateDeliveryFee(order) {
  let fee = 20;
  if (order.distance > 3) {
    fee = 60;
  }
  if (order.totalAmount > 500) {
    fee = 0;
  }
  return fee;
}
module.exports = calculateDeliveryFee;
