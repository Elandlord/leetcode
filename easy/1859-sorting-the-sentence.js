/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let words = s.split(" ");
    
    words = words.map((word, index) => {
        let numberToFind = index + 1;
        return words.filter((word) => word.includes(numberToFind))[0].replace(numberToFind, "");
    }).join(" ");
    
    return words;
};
