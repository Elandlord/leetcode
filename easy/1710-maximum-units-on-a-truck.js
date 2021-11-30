/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    let maxUnits = 0;
  
    boxTypes.sort((firstBox, secondBox) => secondBox[1] - firstBox[1]);
    
    for (let index = 0; index < boxTypes.length; index++) {
        const [count, unit] = boxTypes[index];
    
        if (count === 0) { 
            continue; 
        }
    
        if (truckSize <= count) { 
            maxUnits += truckSize * unit;
            continue;
        }
    
        truckSize -= count;
        maxUnits += count * unit;
    }
  
    return maxUnits;
};
