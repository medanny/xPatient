var express = require('express');
var router = express.Router();

router.use(express.static(__dirname + '/../assets'));
router.use(express.static(__dirname + '/../node_modules'));

router.get('/', function(req, res){
	res.sendfile('layouts/nutriadmin.html');
});

module.exports = router;