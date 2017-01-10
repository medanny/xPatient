var app = angular.module('app', []);

app.service('PostsSvc', function($http){
	this.fetch = function () {
		return $http.get('/api/posts');
	};
	this.create = function (post) {
		return $http.post('/api/posts', post);
	}
	this.delete = function (id){
		return $http.delete('/api/posts/' + id);
	}
});

app.controller('PostsCtrl', function($scope, PostsSvc){
	$scope.addPost = function () {
		if($scope.postBody){
			PostsSvc.create({
				username: 'daniel',
				body : $scope.postBody
			}).then(function (post){
				$scope.posts.unshift(post.data);
				$scope.postBody = null;
			});
		}
	};

	$scope.deletePost = function (id) {
		if(id){
			PostsSvc.delete(id).then(function (post){
				PostsSvc.fetch().then(function (posts){
					$scope.posts = posts.data;
				});
			});
		}
	};

	PostsSvc.fetch().then(function (posts){
		$scope.posts = posts.data;
	});
});
