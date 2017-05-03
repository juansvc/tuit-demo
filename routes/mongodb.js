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
var models     = require('../models/tuitsmodel.js')(app, mongoose);
var tuitCtrl = require('../controllers/tuitcontroller.js');
var Tuit = mongoose.model('Tuitsmodel');

/* GET home page. */
router.route('/tuit').post(tuitCtrl.addTuit).get(tuitCtrl.status);

module.exports = router;
