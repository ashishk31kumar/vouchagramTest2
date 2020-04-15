var express = require('express');
var router = express.Router();
const request = require('request');

router.get('/', function (req, res, next) {
  let url = 'https://api.gyftr.net/smartbuyapi/hdfc/api/v1/home/categories'
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body);
    }
  })
});

module.exports = router;