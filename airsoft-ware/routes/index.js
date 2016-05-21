var express = require('express');
var router = express.Router();

var gameInProgress = false;

/* GET home page. */
router.get('/', function(req, res, next) {
  if (!gameInProgress) {  
    res.render('index');
  } else {
    res.render('playing')
  }
});

router.post('/play', function name(req, res, next) {
  gameInProgress = true;  
  setTimeout(function () {    
    gameInProgress = false;       
  }, Number(req.body.round_duration));
  res.redirect("/");
});

module.exports = router;
