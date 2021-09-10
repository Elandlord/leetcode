/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map = {};
    for(let i = 0; i < s.length; i++) {
        if(map[s.charAt(i)] >= 0) {
            map[s.charAt(i)]++;
        } else {
            map[s.charAt(i)] = 0;
        }
    }

    for(let i = 0; i < s.length; i++) {
        if(map[s.charAt(i)] === 0) return i;
    }

    return -1;
};

console.log(firstUniqChar("leetcode"));
console.log(firstUniqChar("loveleetcode"));
console.log(firstUniqChar("aabb"));
