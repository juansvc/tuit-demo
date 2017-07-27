exports = module.exports = function (app, mongoose) {

    var retweeted = new mongoose.Schema({
        created_at: {
            type: Date
        },
        id: {
            type: Number
        },
        text: {
            type: String
        },
        user_name: {
            type: String
        },
        user_screen_name: {
            type: String
        },
        location: {
            type: String
        },
        retweet_count: {
            type: Number
        },
        favorite_count: {
            type: Number
        }        
    });

    mongoose.model('Retweetedmodel', retweeted);
};
