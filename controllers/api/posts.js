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

router.delete('/api/posts/:postId', function(req, res){
	var id = req.params.postId;
	console.log('deleting post with id: ' + id);

	Post.remove({
		_id: id
	}, function(err){
			if (err) {
				res.send(err);
			}
			res.json({message: "Post deleted"});
	});
});

module.exports = router;