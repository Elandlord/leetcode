/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let perimeterCount = 0;

    for(let y = 0; y < grid.length; y++) {
        for(let x = 0; x < grid[y].length; x++) {
            if(grid[y][x] === 1) {
                if(y <= 0 || grid[y-1][x] === 0) perimeterCount++; // up
                if(x === grid[y].length - 1 || grid[y][x + 1] === 0) perimeterCount++; // right
                if(y === grid.length - 1 || grid[y + 1][x] === 0) perimeterCount++; // down
                if(x === 0 || grid[y][x - 1] === 0) perimeterCount++; // left
            }
        }
    }

    return perimeterCount;
};

console.log(islandPerimeter([[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]])); // 16
