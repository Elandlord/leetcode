/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length < 2) return 0;

    let maxProfit = 0;
    let minBuyPrice = prices[0];

    prices.forEach((currentPrice, i) => {
        maxProfit = Math.max(maxProfit, currentPrice - minBuyPrice);
        minBuyPrice = Math.min(minBuyPrice, currentPrice);
    });

    return maxProfit;
};

console.log(maxProfit([7,1,5,3,6,4])); // 5
console.log(maxProfit([7,6,4,3,1])); // 0
console.log(maxProfit([7,1,5,3,3,7])); // 6
