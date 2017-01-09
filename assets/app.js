var app = angular.module('app', []);

app.service('PostsSvc', function($http){
	this.fetch = function () {
		return $http.get('/api/posts');
	};
	this.create = function (post) {
		return $http.post('/api/posts', post);
	}
});

app.controller('PostsCtrl', function($scope, PostsSvc){
	$scope.addPost = function () {
		debugger;
		if($scope.postBody){
			PostsSvc.create({
				username: 'daniel',
				body : $scope.postBody
			}).then(function (post){
				$scope.posts.unshift(post.data);
				$scope.postBody = null;
			});
		}
	}

	PostsSvc.fetch().then(function (posts){
		debugger;
		$scope.posts = posts.data;
	});
});


