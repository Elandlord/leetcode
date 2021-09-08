/**
 * @param {string} s
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function(s, shifts) {
    let total = 0;
    let splittedString = s.split('').reverse();

    return shifts.reverse().map((shift, index) => {
        total += shift;
        let number = (splittedString[index].charCodeAt(0) - 96) + total;
        number = number%26 === 0 ? 26 : number%26;
        splittedString[index] = String.fromCharCode(96 + number);
        return splittedString[index];
    }).reverse().join('');
};

console.log(shiftingLetters("abc", [3,5,9]));
console.log(shiftingLetters("aaa", [1,2,3]));
console.log(shiftingLetters("z", [52]));
