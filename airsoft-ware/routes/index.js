var express = require('express');
var router = express.Router();
var Game = require('../models/game');

var game = null;

/* GET home page. */
router.get('/', function(req, res, next) {
  if (game == null) {  
    res.render('index');
  } else {
    res.render('playing', { game: game })
  }
});

router.post('/play', function name(req, res, next) {
  game = new Game();
  game.addTeam(req.body.team1_name);
  game.addTeam(req.body.team2_name);  
  setTimeout(function () {    
    game = null;       
  }, Number(req.body.round_duration));
  res.redirect("/");
});

router.get('/registerpoint', function (req, res, next) {
  if (game == null) {
    res.redirect("/");
  }   
    
  res.render('registerpoint');          
});

router.post('/registerpoint', function (req, res, next) {
    if (game == null) {
    res.redirect("/");
  }   
    
  var ip = req.connection.remoteAddress;
  game.registerPoint(ip, req.body.name);  
  res.redirect("/");        
});

module.exports = router;
