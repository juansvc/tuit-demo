var mongoose = require('mongoose');
var TuitModel  = mongoose.model('Tuitsmodel');

exports.addTuit = function(req, res) {
	console.log('POST');
	console.log(req);

	var tuit = new TuitModel({
		user_name:    req.body.user.name,
		created_at: 	  req.body.created_at,
		user_screen_name:  req.body.user.screen_name,
		user_location:   req.body.user.location,
		text: req.body.text,
		retweet_count: req.body.retweet_count,
		favorite_count: req.body.favorite_count
	});

	tuit.save(function(err, tuit) {
		if(err) return res.send(500, err.message);
    res.status(200).jsonp(tuit);
	});
};

exports.status = function(req, res){
    res.status(200).send("UP");
};