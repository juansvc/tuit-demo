var mongoose = require('mongoose');
var RetweetedModel = mongoose.model('Retweetedmodel');

exports.addretweeted = function (req, res) {
    console.log('POST retweeted');
    //console.log(req);
    console.log("Post retweeted");
    aux = 0;
    if (req.body.retweeted_status != null) {
        var myDate = new Date(req.body.retweeted_status.created_at)
        var local = "Ecuador";
        if (req.body.retweeted_status.user.location.length > 0) {
            var local = req.body.user.location;
        }
        data = {
            created_at: myDate,
            id: req.body.retweeted_status.id,
            text: req.body.retweeted_status.text,
            user_name: req.body.retweeted_status.user.name,
            user_screen_name: req.body.retweeted_status.user.screen_name,
            location: req.body.retweeted_status.user.location,
            retweet_count: req.body.retweeted_status.retweet_count,
            favorite_count: req.body.retweeted_status.favorite_count
        }
        var retweeted = new RetweetedModel(data);
        retweeted.save(function (err, retweeted) {
            console.log(retweeted);
        });
        aux = aux + 1;
        res.status(200).jsonp({
            count: aux
        });
    } else {
        console.log("no hay retweeted");
        return res.send(500, "no hay retweeted");
    }

};

exports.status = function (req, res) {
    res.status(200).send("UP");
};