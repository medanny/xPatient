var express = require('express');
var router = express.Router();

router.use(express.static(__dirname + '/../client/dist/'));
router.use(express.static(__dirname + '/../node_modules'));
//router.use(express.static(__dirname + '/../assets'));

router.get('/', function(req, res){
	res.sendfile('client/dist/index.html');
	//res.sendfile('layouts/posts.html');
});

module.exports = router;
