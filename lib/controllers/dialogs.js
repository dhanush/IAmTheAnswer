
var mongoose = require('mongoose'), Dialog = mongoose.model('Dialog');

exports.all = function(req, res) {
	return Dialog.find(function(err, things) {
		if (!err) {
			return res.json(things);
		} else {
			return res.send(err);
		}
	});
};


exports.show = function(req, res) {
	return Dialog.findById(req.params.id, function(err, dialog) {
		if (!err) {
			return res.json(dialog);
		} else {
			return res.send(err);
		}
	});
};


exports.create = function (req, res, next) {
	  var newDialog = new Dialog(req.body);
	  newDialog.save(function(err) {
	    if (err) return res.json(400, err);
	    
	  });
	};