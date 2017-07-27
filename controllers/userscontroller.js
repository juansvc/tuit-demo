var mongoose = require('mongoose');
var Usersmodel = mongoose.model('Usersmodel');

exports.addUsers = function (req, res) {
    console.log('POST USERS');
    //console.log(req);
    var userd = req.body.user;
    delete userd.entities;
    if (userd.user.location.length>0) {
        console.log("yes location");
    } else {
        userd.user.location = "Ecuador";
    }
    var userm = new Usersmodel(userd);

    userm.save(function (err, userm) {
        if (err) return res.send(500, err.message);
        res.status(200).jsonp(userm);
    });
};

exports.status = function (req, res) {
    res.status(200).send("UP");
};