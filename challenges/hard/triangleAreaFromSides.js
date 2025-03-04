const trianglePerimeter = require("../easy/trianglePerimeter");

/**
 * Uses Heron's formula (https://en.wikipedia.org/wiki/Heron%27s_formula) to give the area of a triangle
 * with sides a,b,c. The triangle isn't assumed to be a right-triangle.
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {number} the area
 */

function triangleAreaFromSides(a, b, c) {
  const s = trianglePerimeter(a, b, c) / 2;
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

  return area;
}

module.exports = triangleAreaFromSides;
