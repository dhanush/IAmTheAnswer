'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
/**
 * Dialog Schema
 */
var DialogSchema = new Schema({
  text: String,
  movie: String,
  genre: { 
	  type: { type: String}
   }
});


mongoose.model('Dialog', DialogSchema);