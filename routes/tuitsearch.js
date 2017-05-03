var express = require('express');
var Twit = require('twit');
var router = express.Router();

var T = new Twit({
  	consumer_key: 'CtnSB5gksgtXqip74NjD6KD4p',
		consumer_secret: '1tmULEY7tIDUi7ZrjcShsgkMyRQlyBcnF8hjAsihbk2QSFaJM7',
    app_only_auth: true
		//access_token: '	844261634-lPlhwjAWngSIIHPxqHhMpjM19MEA5fWtSiJFxFXG',
		//access_token_secret: '7f4QDpgtwnvUPJBK8Sv9lOJMd8e02WpOzBJgwdxIv620Q'
	});

/* GET tuit listing. */
router.get('/', function(req, res, next) {
  //T.getAuth();
  T.get('search/tweets', {q:'nodejs', count: 10}, function(error, tweets, response){    
    res.status(200).json(tweets.statuses);
  });
  
});

router.get('/all/:id/:count', function(req,res){
    //res.send('users all'+req.params.id);
    T.get('search/tweets', {q: req.params.id, count: req.params.count}, function(error, tweets, response){    
    res.status(200).json(tweets.statuses);
  });
});


module.exports = router;