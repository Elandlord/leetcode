/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 1) return strs[0];

    let longestPrefix = "";

    let smallestLength = Math.min(...strs.map(s=>s.length));

    for(i = 0; i <= smallestLength; i++) {
        let substr = strs[0].substr(0, i);

        let hasCommonPrefix = strs.filter((string) => {
            return string.substr(0, i) === substr;
        }).length === strs.length;

        if(hasCommonPrefix) {
            longestPrefix = substr;
        }
    }

    return longestPrefix;
};
