/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function(arr) {
    let results = [];
    results.push("");
    let best = 0;

    for(let i = 0; i < arr.length; i++) {
        let resultLength = results.length;

        for(let j = 0; j < resultLength; j++) {
            let newRes = results[j] + arr[i];

            let newResSet = new Set(newRes.split("")); // for unique values

            if(newResSet.size !== newRes.length)
                continue;

            results.push(newRes);
            best = Math.max(best, newRes.length);
        }
    }

    return best;
};

console.log(maxLength(["un","iq","ue"])); // 4
console.log(maxLength(["cha","r","act","ers"])); // 6
console.log(maxLength(["abcdefghijklmnopqrstuvwxyz"])); // 26
