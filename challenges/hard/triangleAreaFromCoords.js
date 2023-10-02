/**
 * Uses the Shoelace Algorithm (https://vimeo.com/429687542) to find the area of a triangle given the coordinates of the three corners.
 * The triangle is not assumed to be a right-triangle. The points are given in an array, e.g.
 * [{ x: 3, y: 4}, { x: 4, y: 6 }, { x: 7, y: 1 }]
 * @param {{ x: number, y: number }[]} points - The three vertices of the triangle
 * @returns
 */

function triangleAreaFromCoords(points) {
  [A, B, C] = points;

  return (
    0.5 *
    Math.abs(
      A.x * B.y + B.x * C.y + C.x * A.y - (A.y * B.x + B.y * C.x + C.y * A.x)
    )
  );
}

module.exports = triangleAreaFromCoords;
