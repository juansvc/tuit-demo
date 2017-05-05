exports = module.exports = function(app, mongoose) {

	var tuis_schema = new mongoose.Schema({
		name: 		{ type: String },
		text: 		{ type: Number },
		retweet_count: 	{ type: String },
		favorite_count:  { type: String },
		user_update: { type:String }
	});

	mongoose.model('Tuitsmodel', tuis_schema);

};