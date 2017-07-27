var mongoose = require('mongoose');
var Usermentionsmodel = mongoose.model('Usermentionsmodel');

exports.adduser_mentions = function (req, res) {
    console.log('POST usermentions');
    //console.log(req);
    console.log("Post usermentions");
    aux = 0;
    if (req.body.entities.user_mentions.length > 0) {
        req.body.entities.user_mentions.forEach(function (element) {
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
                location: local,
                screen_name: element.screen_name,
                name: element.name,
                id_user: element.id,
                id_user_str: element.id_str,
            }
            var user_mentions = new Usermentionsmodel(data);
            user_mentions.save(function (err, user_mentions) {                
                console.log(user_mentions);
            });
            aux=aux+1;
        });
        res.status(200).jsonp({count:aux});
    } else {
        console.log("no hay user_mentions");
        return res.send(500, "no hay user_mentions");
    }

};

exports.status = function (req, res) {
    res.status(200).send("UP");
};