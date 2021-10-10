var rect = require("./rectangle.js");

function solveRect(l, b) {
  console.log(`Solving for rectangle with the length ${l} and breath ${b}`);

  if (l <= 0 || b <= 0) {
    console.log("Please provide the length and breath greater and zero");
  } else {
    console.log(`The area of the rectangle is ${rect.area(l, b)}`);
    console.log(`The area of the perimeter is ${rect.perimeter(l, b)}`);
  }
}

solveRect(2, 4);
solveRect(1, 3);
solveRect(3, 8);
solveRect(7, 2);
solveRect(-4, 6);
solveRect(8, 4);
solveRect(3, 4);
