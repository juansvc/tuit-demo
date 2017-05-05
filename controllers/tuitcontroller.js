var mongoose = require('mongoose');
var TuitModel  = mongoose.model('Tuitsmodel');

exports.addTuit = function(req, res) {
	console.log('POST');
	console.log(req);

	var tuit = new TuitModel({
		name:    req.body.name,
		text: 	  req.body.text,
		retweet_count:  req.body.rcount,
<<<<<<< HEAD
		favorite_count:   req.body.fcount		
=======
		favorite_count:   req.body.fcount,
		date: req.body.user_update
>>>>>>> master
	});

	tuit.save(function(err, tuit) {
		if(err) return res.send(500, err.message);
    res.status(200).jsonp(tuit);
	});
};

exports.status = function(req, res){
    res.status(200).send("UP");
};