exports = module.exports = function (app, mongoose) {

    var usermentions_schema = new mongoose.Schema({
        created_at: {
            type: Date
        },
        id: {
            type: Number
        },
        retweet_count: {
            type: String
        },        
        location: {
            type: String
        },
        screen_name: {
            type: String
        },
        name: {
            type: String
        },
        id_user: {
            type: Number
        },
        id_user_str: {
            type: String
        },
    });

    mongoose.model('Usermentionsmodel', usermentions_schema);

};