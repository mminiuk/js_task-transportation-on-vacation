/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
let price = 40;
let total = price * days;
if(days < 3) {
  return total;
}
if(days < 7) {
  return total - 20;
}
if(days >= 7) {
  return total - 50
}
}

module.exports = calculateRentalCost;
