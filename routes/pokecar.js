var express = require('express');
var router = express.Router();
// const https = require('https');
const request = require('request');




/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
  request('https://api.telegram.org/bot843264427:AAH2bxBsGpHPT4ifRrF35lR2ENebo2ljQ38/sendMessage?chat_id=@PokeMyCar&text=Someone poke your car, @anguschiu', { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
  });
});

module.exports = router;
