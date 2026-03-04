const calculateDeliveryFee = (order) => {
  let fee = 25;
  if (order.distance > 7) {
    fee = 80;
  }
  if (order.totalAmount > 400) {
    fee = 0;
  }
  return fee;
};
module.exports = calculateDeliveryFee;
