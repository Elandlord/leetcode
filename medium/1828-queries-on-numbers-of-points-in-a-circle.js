/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
var countPoints = function(points, queries) {
    return queries.map((query) => {
        [qx, qy, radius] = query;

        return points.filter((point) => {
            [px, py] = point;
            let a = px - qx;
            let b = py - qy;
            return Math.sqrt(a*a+b*b) <= radius;
        }).length;
    });
};

console.log(countPoints([[1,3],[3,3],[5,3],[2,2]], [[2,3,1],[4,3,1],[1,1,2]])); // output: [3,2,2]
console.log(countPoints([[1,1],[2,2],[3,3],[4,4],[5,5]], [[1,2,2],[2,2,2],[4,3,2],[4,3,3]])); // output: [2,3,2,4]

// euclidean distance =
// a = point.x - query.x
// b = point.y - query.y
// Math.sqrt( a*a + b*b ) <= radius = the point should be in the circle

