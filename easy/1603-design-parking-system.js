/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
 var ParkingSystem = function(big, medium, small) {
    this.bigSpaces = big;
    this.mediumSpaces = medium;
    this.smallSpaces = small;
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {    
    if(carType === 1 && this.bigSpaces > 0) {
        this.bigSpaces--;
        return true;
    }
    
    if(carType === 2 && this.mediumSpaces > 0) {
        this.mediumSpaces--;
        return true;
    }
    

    if(carType === 3 && this.smallSpaces > 0) {
        this.smallSpaces--;
        return true;
    }
    
    return false;
};