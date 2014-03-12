/**
 * New node file
 */
'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    

var GenreSchema = new Schema({
  type: String
});

mongoose.model('Genre', GenreSchema);
