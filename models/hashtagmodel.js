exports = module.exports = function (app, mongoose) {

    var hashtag_schema = new mongoose.Schema({
        created_at: {
            type: Date
        },
        id: {
            type: Number
        },
        retweet_count: {
            type: Number
        },
        hashtag: {
            type: String
        },
        location: {
            type: String
        }        
    });

    mongoose.model('Hashtagmodel', hashtag_schema);

};