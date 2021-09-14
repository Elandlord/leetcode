/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    s = s.split('');

    let letters = [];
    for(let i = 0; i < s.length; i++) {
        if(s[i].match(/[a-zA-Z]/)) letters.push(s[i]); // Pushes all English letters on the letter array
    }

    let reversedString = "";

    for(let i = 0; i < s.length; i++) { // Loop again over the array
        if(s[i].match(/[a-zA-Z]/)) {  // If the original string contains a letter at the index, insert the item from the letters array
            reversedString += letters.pop();
        } else { // Else, return the character at the current index of the original string
            reversedString += s[i];
        }
    }

    return reversedString;
};

// Reverse English letters (uppercase / lowercase)
// All non-English letters/characters remain in the same position

console.log(reverseOnlyLetters("ab-cd")); "dc-ba"
console.log(reverseOnlyLetters("a-bC-dEf-ghIj")); "j-Ih-gfE-dCba"
console.log(reverseOnlyLetters("Test1ng-Leet=code-Q!")); "Qedo1ct-eeLg=ntse-T!"
