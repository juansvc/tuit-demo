exports = module.exports = function(app, mongoose) {

	var tuis_schema = new mongoose.Schema({
		name: 		{ type: String },
		text: 		{ type: String },
		retweet_count: 	{ type: String },
<<<<<<< HEAD
		favorite_count:  { type: String }		
=======
		favorite_count:  { type: String },
		user_update: { type:String }
>>>>>>> master
	});

	mongoose.model('Tuitsmodel', tuis_schema);

};