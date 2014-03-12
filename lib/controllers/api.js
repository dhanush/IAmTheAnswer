'use strict';

var mongoose = require('mongoose'), Dialog = mongoose.model('Dialog'), Thing = mongoose
		.model('Thing');

/**
 * Get awesome things
 */
exports.awesomeThings = function(req, res) {
	return Thing.find(function(err, things) {
		if (!err) {
			return res.json(things);
		} else {
			return res.send(err);
		}
	});
};

exports.dialogs = function(req, res) {
	return Dialog.find(function(err, things) {
		if (!err) {
			return res.json(things);
		} else {
			return res.send(err);
		}
	});
};