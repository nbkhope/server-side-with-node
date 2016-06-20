// Import the rectangle-2 module
var rect = require('./rectangle-2');

function solveRect(width, length) {
  console.log("Solving for rectangle with [width = " + width + ", length = " +
              length + "]");

  // Use the module
  rect(width, length, function(err, rectangle) {
    // If an error is present, just console log it
    if (err) {
      console.log(err);
    }
    else {
      // Use the module to calculate rectangle area and perimeter
      console.log("Area: " + rectangle.area());
      console.log("Perimeter: " + rectangle.perimeter());
    }
  });
}

solveRect(2, 3);
solveRect(2, -3);
solveRect(2, 0);
solveRect(3, 10);
