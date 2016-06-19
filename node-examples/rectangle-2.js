/*
 * A node module to calculate the perimeter and area of a rectangle
 */
module.exports = function(width, length, callback) {
  try {
    if (width <= 0 || length <= 0) {
      throw new Error("Rectangle dimensions should be greater than zero.");
    }
    else {
      // the first parameter is the error, which in this case is null;
      // the second parameter is a JavaScript object
      callback(null, {
        perimeter: function() {
          return 2 * (width + length);
        },
        area: function() {
          return width * length;
        },
      });
    }
  }
  catch(error) { // any errors thrown get caught here
    // call the callback function giving the error as the first argument
    callback(error, null);
  }
};
