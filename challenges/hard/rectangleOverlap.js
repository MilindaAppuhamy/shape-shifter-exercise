/*
 * This is intended to be a challenge for any squad who gets finished with everything else.
 * If you haven't done the other challenges, try those first!
 *
 * Imagine you have two rectangles with horizontal bases. If you draw them on the same grid,
 * they would overlap! Each rectangle is described by an array of coordinates, for example:
 * [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 1, y: 1 }, { x: 0, y: 1 }]
 * Can you write a function which calculates the area of the overlap between two rectangles?
 *
 */

/**
 * Given the four corners of two rectangles, find the area of their overlap.
 * If they don't overlap, return 0.
 * @param {{x: number, y: number}[]} rectangle1 - The four corners of rectangle 1
 * @param {{x: number, y: number}[]} rectangle2 - The four corners of rectangle 2
 */

function rectangleOverlap(rectangle1, rectangle2) {
  let xOverlap;
  let yOverlap;

  //If the rectangles do not overlap
  if (
    (rectangle1[0].x < rectangle2[0].x && rectangle1[1].x < rectangle2[0].x) ||
    (rectangle2[0].x < rectangle1[0].x && rectangle2[1].x < rectangle1[0].x)
  ) {
    //The x axises are never overlapping which means there will never be a overlap even if the y-axises overlap
    return 0;
  }

  //X-axis
  //If the one of the rectangles are inside the other
  if (rectangle1[1].x > rectangle2[1].x && rectangle1[0].x < rectangle2[0].x) {
    //rectangle two's x axis is inside the rectangle one
    xOverlap = rectangle2[1].x - rectangle2[0].x;
  }
  if (rectangle2[1].x > rectangle1[1].x && rectangle2[0].x < rectangle1[0].x) {
    //rectangle one's x axis is inide the rectangle two
    xOverlap = rectangle1[1].x - rectangle1[0].x;
  }

  //If the rectangles overlap partially
  if (
    rectangle1[0].x < rectangle2[0].x &&
    rectangle1[1].x > rectangle2[0].x &&
    rectangle1[1].x < rectangle2[1].x
  ) {
    //rectangle one in the front
    xOverlap = rectangle1[1].x - rectangle2[0].x;
  }
  if (
    rectangle2[0].x < rectangle1[0].x &&
    rectangle2[1].x > rectangle1[0].x &&
    rectangle2[1].x < rectangle1[1].x
  ) {
    //rectangle two in the front
    xOverlap = rectangle2[1].x - rectangle1[0].x;
  }

  //Y-axis
  //If the one of the rectangles are inside the other
  if (rectangle1[1].y < rectangle2[1].y && rectangle1[2].y > rectangle2[2].y) {
    //rectangle two's x axis is inside the rectangle one
    yOverlap = rectangle2[2].y - rectangle2[1].y;
  }
  if (rectangle2[1].y < rectangle1[1].y && rectangle2[2].y > rectangle1[2].y) {
    //rectangle one's x axis is inide the rectangle two
    yOverlap = rectangle1[2].y - rectangle1[1].y;
  }

  //If the rectangles overlap partially
  if (
    rectangle1[0].y < rectangle2[0].y &&
    rectangle1[3].y > rectangle2[0].y &&
    rectangle1[3].y < rectangle2[3].y
  ) {
    //rectangle one in the front
    yOverlap = rectangle1[3].y - rectangle2[0].y;
  }
  if (
    rectangle2[0].y < rectangle1[0].y &&
    rectangle2[3].y > rectangle1[0].y &&
    rectangle2[3].y < rectangle1[3].y
  ) {
    //rectangle one in the front
    yOverlap = rectangle2[3].y - rectangle1[0].y;
  }

  return xOverlap * yOverlap;
}

rectangleOverlap(
  [
    { x: 0, y: 0 },
    { x: 9, y: 0 },
    { x: 9, y: 9 },
    { x: 0, y: 9 },
  ],
  [
    { x: 2, y: 2 },
    { x: 7, y: 2 },
    { x: 7, y: 7 },
    { x: 2, y: 7 },
  ]
);

module.exports = rectangleOverlap;
