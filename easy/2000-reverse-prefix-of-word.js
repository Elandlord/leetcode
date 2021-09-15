/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    let foundIndex = word.split('').indexOf(ch);
    let reversedString = "";

    if(foundIndex !== -1) {
        reversedString = word.slice(0, foundIndex+1);
        word = word.slice(foundIndex+1, word.length);

        let temp = "";

        for(let i = reversedString.length - 1; i >= 0; i--) {
            temp += reversedString[i];
        }

        reversedString = temp;
    }

    return reversedString + word;
};

console.log(reversePrefix("abcdefd", "d")); // dcbaefd
console.log(reversePrefix("xyxzxe", "z")); // zxyxxe
console.log(reversePrefix("abcd", "z")); // abcd
