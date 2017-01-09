var Post = require('../../models/post');
var router = require('express').Router();

router.get('/api/posts', function(req, res){
	console.log('incoming get request');
	Post.find().exec(function (err, posts){
		if (err){
			console.log(err);
			return next(err);
		}
		res.json(posts);
	});
});

router.post('/api/posts', function(req, res){
	console.log('post received!');
	console.log(req.body.username);
	console.log(req.body.body);
	var post = new Post({
		username: req.body.username,
		body : req.body.body
	});
	post.save(function(err, post){
		if(err){
			return next(err);
		}
		console.log('post saved!');
		console.log(post);
		res.json(201, post);
	});
});

module.exports = router;