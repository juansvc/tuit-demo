var mongoose = require('mongoose');
var HashtagModel = mongoose.model('Hashtagmodel');

exports.addhashtag = function (req, res) {
    console.log('POST hashtag');
    //console.log(req);
    console.log("Post hastag");
    aux = 0;
    if (req.body.entities.hashtags.length > 0) {
        req.body.entities.hashtags.forEach(function (element) {
            var myDate = new Date(req.body.created_at)
            console.log("fecha:");
            console.log(myDate);
            var local = "Ecuador";
            if (req.body.user.location.length>0) {
                var local = req.body.user.location;
            }
            data = {
                created_at: myDate,
                id: req.body.id,
                retweet_count: req.body.retweet_count,
                hashtag: element.text,
                location: local
            }
            var hashtag = new HashtagModel(data);
            hashtag.save(function (err, hashtag) {                
                console.log(hashtag);
            });
            aux=aux+1;
        });
        res.status(200).jsonp({count:aux});
    } else {
        console.log("no hay hashtag");
        return res.send(500, "no hay hashtag");
    }

};

exports.status = function (req, res) {
    res.status(200).send("UP");
};