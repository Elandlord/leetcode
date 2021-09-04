var isValid = function(s) {
    let arr = [];

    let matches = new Map()
        .set('(', ')')
        .set('{','}')
        .set('[', ']');

    for(let character of s){
        if(matches.has(character)) arr.push(character);
        else if( matches.get(arr[arr.length-1]) === character ) arr.pop();
        else return false;
    }

    return arr.length === 0;
};
