var express = require('express');
var router = express.Router();

router.use(express.static(__dirname + '/../client/dist/'));
router.use(express.static(__dirname + '/../node_modules'));

router.get('/', function(req, res){
	res.sendfile('client/dist/index.html');
});

module.exports = router;