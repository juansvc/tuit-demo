exports = module.exports = function(app, mongoose) {

	var tuis_schema = new mongoose.Schema({
		user_name: 		{ type: String },
		created_at: 		{ type: String },
		user_screen_name: 	{ type: String },
		user_location: 	{ type: String },
		text: 	{ type: String },
		retweet_count:  { type: String },
		favorite_count: { type:String }
	});

	mongoose.model('Tuitsmodel', tuis_schema);

};