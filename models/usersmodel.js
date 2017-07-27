exports = module.exports = function (app, mongoose) {

    var users_schema = new mongoose.Schema({

        statuses_count: {
            type: String
        },
        favourites_count: {
            type: Number
        },
        protected: {
            type: Boolean
        },
        profile_image_url: {
            type: String
        },
        name: {
            type: String
        },
        listed_count: {
            type: String
        },
        description: {
            type: String
        },
        location: {
            type: String
        },
        contributors_enabled: {
            type: String
        },
        verified: {
            type: Boolean
        },
        followers_count: {
            type: Number
        },
        url: {
            type: String
        },
        screen_name: {
            type: String
        },
        display_url: {
            type: String
        },
        geo_enabled: {
            type: Boolean
        },
        friends_count: {
            type: Number
        },
        id_str: {
            type: String
        },
        lang: {
            type: String
        },
        time_zone: {
            type: String
        },
        created_at: {
            type: String
        },
        id: {
            type: Number
        },
        profile_background_image_url_https: {
            type: String
        },
        profile_background_image_url: {
            type: String
        }

    });

    mongoose.model('Usersmodel', users_schema);

};