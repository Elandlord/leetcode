/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let strippedString = s.replace(/[^a-z0-9]/gi,'').toLowerCase();
  
    return strippedString === strippedString.split('').reverse().join('');
};

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // true
console.log(isPalindrome("Never odd or even.")); // true
