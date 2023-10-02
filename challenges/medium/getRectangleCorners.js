/**
 * Returns coordinates of the corners anti-clockwise from bottom-left (assumes base is horizontal)
 * @param {number} a - the base
 * @param {number} b - the height
 * @param {Object} point - the bottom left point
 * @param {number} point.x - the x coordinate
 * @param {number} point.y - the y coordinate
 * @returns {Object[]} the corners
 */

function getRectangleCorners(a, b, point) {
  // get the bottom right point
  const point1 = {
    x: point.x + a,
    y: point.y,
  };
  // then the top right
  const point2 = {
    x: point.x + a,
    y: point.y + b,
  };
  // then the top left
  const point3 = {
    x: point.x,
    y: point.y + b,
  };
  // and return them as an array of points
  return [point, point1, point2, point3];
}

getRectangleCorners(2, 3, { x: 0, y: 0 });

module.exports = getRectangleCorners;
