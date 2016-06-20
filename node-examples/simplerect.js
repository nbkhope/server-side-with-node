var rect = {
  perimeter: function(width, length) {
    return 2 * (width + length);
  },
  area: function(width, length) {
    return width * length;
  },
};

function solveRect(width, length) {
  console.log("Solving for rectangle with w = " + width + " and l = " + length);

  if (width < 0 || length < 0) {
    console.log("Rectangle dimensions should be greater than zero: w = " +
                width + ", and l = " + length);
  }
  else {
    console.log("Area of rectangle of dimensions [width: " + width +
                ", length: " + length + "] is " + rect.area(width, length));
    console.log("Perimeter of rectangle of dimensions [width: " + width +
                ", length: " + length + "] is " + rect.perimeter(width, length));
  }
}

solveRect(2, 4);
solveRect(3, 5);
solveRect(-3, 5);
