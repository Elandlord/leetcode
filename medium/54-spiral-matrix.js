/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let currentDirection = "right";

    let placesSeen = [];
    let order = [];
    let [x, y] = [0, 0];

    const height = matrix.length;
    const width = matrix[0].length;

    if(width === 1) currentDirection = "down";

    for(let i = 0; i < (height * width); i++) {
        placesSeen.push(`${y} ${x}`);
        order.push(matrix[y][x]);

        if(currentDirection === "right" && x+1 < width && !placesSeen.includes(`${y} ${x+1}`)) x++;
        if((currentDirection === "right" && x+1 === width) || (currentDirection === "right" && placesSeen.includes(`${y} ${x+1}`))) {
            currentDirection="down";
            continue;
        }

        if(currentDirection === "down" && y+1 < height && !placesSeen.includes(`${y+1} ${x}`)) y++;
        if((currentDirection === "down" && y+1 === height) || (currentDirection === "down" && placesSeen.includes(`${y+1} ${x}`))) {
            currentDirection="left";
            continue;
        }

        if(currentDirection === "left" && x-1 >= 0 && !placesSeen.includes(`${y} ${x-1}`)) x--;
        if((currentDirection === "left" && x-1 < 0) || (currentDirection === "left" && placesSeen.includes(`${y} ${x-1}`))) {
            currentDirection="top";
            continue;
        }

        if(currentDirection === "top" && y-1 >= 0 && !placesSeen.includes(`${y-1} ${x}`)) y--;
        if((currentDirection === "top" && y-1 < 0) || (currentDirection === "top" && placesSeen.includes(`${y-1} ${x}`))) {
            currentDirection="right";
            continue;
        }
    }

    return order;
};
