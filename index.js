var rect = require("./rectangle.js");

function solveRect(l, b) {
  console.log("Solving for rectangle with l = " + l + " and b = " + b);
  rect(l, b, (err, rectangle) => {
    if (err) {
      console.log("ERROR: ", err.message);
    } else {
      console.log(
        "The area of the rectangle of dimensions l = " +
          l +
          " and b = " +
          b +
          " is " +
          rectangle.area()
      );
      console.log(
        "The perimeter of the rectangle of dimensions l = " +
          l +
          " and b = " +
          b +
          " is " +
          rectangle.perimeter()
      );
    }
  });
  console.log("This statement after the call to rect()");
}

solveRect(2, 4);
solveRect(1, 3);
solveRect(3, 8);
solveRect(7, 2);
solveRect(-4, 6);
solveRect(8, 4);
solveRect(3, 4);
