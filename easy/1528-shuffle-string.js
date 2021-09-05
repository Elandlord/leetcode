/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let newString = [];
  
    for(let i = 0; i < s.length; i++) {
      newString[indices[i]] = s[i];
    }
  
  return newString.join('');
};

console.log(restoreString("codeleet", [4,5,6,7,0,2,1,3]));
console.log(restoreString("abc", [0,1,2]))
console.log(restoreString("aiohn", [3,1,4,2,0]));
console.log(restoreString("aaiougrt",[4,0,2,6,7,3,1,5]));
