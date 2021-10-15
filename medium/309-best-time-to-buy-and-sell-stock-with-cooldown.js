/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var buy = Infinity;
    let free = 0;
    let last = 0;
    let now = 0;
    
    prices.forEach( (currentPrice) => {
        now = Math.max(last, currentPrice - buy);
        buy = Math.min(buy, currentPrice - free);
        free = last;
        last = now;
    });
    
    return now;   
};
