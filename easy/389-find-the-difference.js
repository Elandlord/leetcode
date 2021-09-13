/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    t = t.split('');

    for(let i = 0; i <= s.length; i++) {
        let char = s.charAt(i);

        let foundIndex = t.indexOf(char);
        if(foundIndex !== -1) t.splice(foundIndex, 1);
    }

    return t[0];
};

console.log(findTheDifference("abcd", "abcde")); // "e"
console.log(findTheDifference("", "y")); // "y"
console.log(findTheDifference("a", "aa")); // "a"
console.log(findTheDifference("ae", "aea")); // "a"

