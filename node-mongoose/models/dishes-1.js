// Require module
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create database schema
var dishSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
}, {timestamps: true});

// Create a model that uses the schema
var Dishes = mongoose.model('Dish', dishSchema);

// Make Dishes available as a module
module.exports = Dishes;
