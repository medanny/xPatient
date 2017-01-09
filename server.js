//welcome to the world.
var express = require("express");
var bodyParser = require("body-parser");

var postsRouter = require('./controllers/api/posts');
var staticRouter = require('./controllers/static');

var app = express();
app.use(bodyParser.json());
app.use(postsRouter);
app.use(staticRouter);
app.listen(3000, function(){
	console.log('Server listening on', 3000);
});