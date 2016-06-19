// Import the rectangle-1 module
var rect = require('./rectangle-1');

function solveRect(width, length) {
  console.log("Solving for rectangle with dimensions " +
              "[width: " + width + ", length: " + length + "]");

  if (width < 0 || length < 0) {
    console.log("Dimensions are invalid! Please make sure they are nonzero.");
  }
  else {
    console.log("Area: " + rect.area(width, length));
    console.log("Perimeter: " + rect.perimeter(width, length));
  }
}

solveRect(2, 4);
solveRect(3, 5);
solveRect(-3, 5);
