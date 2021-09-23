/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;

    let sMap = {};
    let tMap = {};

    for(let i = 0; i < s.length; i++) {
        sMap[s[i]] !== undefined ? sMap[s[i]]++ : sMap[s[i]] = 1;
        tMap[t[i]] !== undefined ? tMap[t[i]]++ : tMap[t[i]] = 1;
    }

    for (const [key, value] of Object.entries(sMap)) {
        if(tMap[key] !== value) return false;
    }

    return true;
};

console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false
console.log(isAnagram("aacc", "ccaa")); // true
