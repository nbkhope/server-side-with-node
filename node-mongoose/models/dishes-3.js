// Require module
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create schema for comments
var commentSchema = new Schema({
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
}, { timestamps: true });

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
  comments: [commentSchema],
}, {timestamps: true}); // `timestamps` adds createdAt and updatedAt fields

// Create a model that uses the schema
var Dishes = mongoose.model('Dish', dishSchema);

// Make Dishes available as a module
module.exports = Dishes;
