/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function(releaseTimes, keysPressed) {
    let answer = keysPressed[0];
    let time = releaseTimes[0];

    for(let i = 1; i < keysPressed.length; i++) {
        let releaseTime = releaseTimes[i] - releaseTimes[i - 1]
        let keyPressed = keysPressed[i]

        if(releaseTime === time && keyPressed > answer) {
            answer = keyPressed;
        }

        if(releaseTime > time) {
            time = releaseTime;
            answer = keyPressed;
        }
    }

    return answer;
};

console.log(slowestKey([12,23,36,46,62], "spuda")); // a
