/**
 * @param {string} s
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function(s, shifts) {
    String.prototype.replaceAt = function(index, replacement) {
        if (index >= this.length) return this.valueOf();
        return this.substring(0, index) + replacement + this.substring(index + 1);
    }

    function shiftLetter(str, times) {
        for(let i = 0; i < str.length; i++) {
            let number = str.charCodeAt(i) - 96;

            number = number+times;
            if(number >= 26) number = number%26 === 0 ? 26 : number%26;

            str = str.replaceAt(i, String.fromCharCode(96 + number));
        }
        return str;
    }

    for(let i = 0; i < shifts.length; i++) {
        let substr1 = shiftLetter(s.substring(0, i+1), shifts[i]);
        let substr2 = s.substring(i+1);
        s = substr1 + substr2;
    }
    return s;
};

console.log(shiftingLetters("abc", [3,5,9]));
console.log(shiftingLetters("aaa", [1,2,3]));
console.log(shiftingLetters("z", [52]));
