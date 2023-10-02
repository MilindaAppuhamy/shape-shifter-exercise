/**
 * Find the area of a rectangle given the four corners.
 * The base of the rectangle is assumed to be horizontal.
 * Note: The corners can be given in any order.
 * @param {{ x: number, y: number }[]} points - an array of 4 points, e.g. { x: 3, y: 5 }
 * @return {number} the area
 */

function rectangleAreaFromCoords(points) {
  let lowestX,
    lowestY,
    highestX,
    highestY = null;

  for (let i = 0; i < points.length; i++) {
    if (points[i].x < lowestX || !lowestX) lowestX = points[i].x;
    if (points[i].y < lowestY || !lowestY) lowestY = points[i].y;
    if (points[i].x > highestX || !highestX) highestX = points[i].x;
    if (points[i].y > highestY || !highestY) highestY = points[i].y;
  }

  let organised = [
    { x: lowestX, y: lowestY },
    { x: highestX, y: lowestY },
    { x: highestX, y: highestY },
    { x: lowestX, y: highestY },
  ];

  [A, B, C, D] = organised;

  return (B.x - A.x) * (C.y - B.y);
}

module.exports = rectangleAreaFromCoords;
