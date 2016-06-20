// Import the module
var argv = require('yargs')
  // add a usage message in case the user does not use the command properly
  .usage('Usage: node $0 --l=[num] --w=[num]')
  .demand(['l', 'w']) // make it require l and w as arguments
  .argv; // argv.l and argv.w will be available

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

// Find out the area and perimeter from given command-line arguments
solveRect(argv.w, argv.l);
