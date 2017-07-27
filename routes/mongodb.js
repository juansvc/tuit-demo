var express = require('express');
bodyParser      = require("body-parser"),
methodOverride  = require("method-override"),
mongoose        = require('mongoose');
var router = express.Router();
var app = express();

mongoose.connect('mongodb://localhost/tuits', function(err, res) {
  if(err) throw err;
  console.log('Connected to Database');
});

// Import Models and controllers
var models      = require('../models/tuitsmodel.js')(app, mongoose);
var modelsh      = require('../models/hashtagmodel.js')(app, mongoose);
var modelum      = require('../models/usermentionmodel.js')(app, mongoose);
var modelus      = require('../models/usersmodel.js')(app, mongoose);
var modelrs      = require('../models/retweetedmodel.js')(app, mongoose);

var tuitCtrl    = require('../controllers/tuitcontroller.js');
var Tuit        = mongoose.model('Tuitsmodel');

var hashtagCtrl = require('../controllers/hashtagcontroller.js');
var Hashtag     = mongoose.model('Hashtagmodel');

var usermentionsCtrl = require('../controllers/usermentioncontroller.js');
var Usermention     = mongoose.model('Usermentionsmodel');

var usersCtrl = require('../controllers/userscontroller.js');
var Users     = mongoose.model('Usersmodel');

var retweetedCtrl = require('../controllers/retweetedcontroller.js');
var Retweeted     = mongoose.model('Retweetedmodel');

/* GET home page. */
router.route('/tuit').post(tuitCtrl.addTuit).get(tuitCtrl.status);
router.route('/hashtag').post(hashtagCtrl.addhashtag).get(hashtagCtrl.status);
router.route('/usermentions').post(usermentionsCtrl.adduser_mentions).get(usermentionsCtrl.status);
router.route('/users').post(usersCtrl.addUsers).get(usersCtrl.status);
router.route('/retweeted').post(retweetedCtrl.addretweeted).get(retweetedCtrl.status);

module.exports = router;
