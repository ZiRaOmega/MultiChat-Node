var express = require('express');
var router = express.Router();
const Chat = require('../Chat/websocket');
Chat


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});

module.exports = router;