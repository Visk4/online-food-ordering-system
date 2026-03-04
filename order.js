function calculateDeliveryFee(order) {
  let fee = 40;
  if (order.distance > 5) {
    fee = 70;
  }
  if (order.totalAmount > 300) {
    fee = 0;
  }
  return fee;
}
module.exports = calculateDeliveryFee;
