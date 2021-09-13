/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let map = {};
    let validChars = ['b', 'a', 'l', 'o', 'n']

    for(let i = 0; i < text.length; i++) {
        if(validChars.includes(text.charAt(i))) {
            map[text.charAt(i)] === undefined ?
                map[text.charAt(i)] = 1 :
                map[text.charAt(i)]++;
        }
    }

    let balloonCount = 0;

    function hasBalloon(obj) {
        return obj['b'] >= 1 &&
            obj['a'] >= 1 &&
            obj['l'] >= 2 &&
            obj['o'] >= 2 &&
            obj['n'] >= 1;
    }

    while(hasBalloon(map)) {
        balloonCount++;

        map['b'] = map['b'] - 1;
        map['a'] = map['a'] - 1;
        map['l'] = map['l'] - 2;
        map['o'] = map['o'] - 2;
        map['n'] = map['n'] - 1;
    }

    return balloonCount;
};

console.log(maxNumberOfBalloons("nlaebolko")); // 1
console.log(maxNumberOfBalloons("loonbalxballpoon")); // 2
console.log(maxNumberOfBalloons("leetcode")); // 0
