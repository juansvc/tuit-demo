var mongoose = require('mongoose');
var TuitModel = mongoose.model('Tuitsmodel');

exports.addTuit = function (req, res) {
	console.log('POST');
	//console.log(req);
	//console.log(req.body);
	var tuit = new TuitModel(req.body);

	tuit.save(function (err, tuit) {
		if (err) return res.send(500, err.message);
		res.status(200).jsonp(tuit);
	});
};

exports.status = function (req, res) {
	res.status(200).send("UP");
};