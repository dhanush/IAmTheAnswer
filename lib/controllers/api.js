'use strict';

var mongoose = require('mongoose'), Genre = mongoose
		.model('Genre');

/**
 * Returns all the genres
 */
exports.genres = function(req, res) {
	return Genre.find(function(err, things) {
		if (!err) {
			return res.json(things);
		} else {
			return res.send(err);
		}
	});
}