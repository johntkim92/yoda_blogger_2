var app = angular.module('YodaApp', []);

//Post Controller
app.controller('PostsController', ['$http', function($http){
  var authenticity_token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
  var controller = this;
  // get all posts
  this.getPosts = function() {
    $http.get('/posts').success(function(data){
      controller.posts = data.posts;
    });
  }
  //get posts on page load
  this.getPosts();

  this.createPost = function() {
    $http.post('/posts', {
      authenticity_token: authenticity_token,
      post: {
        title: this.newPostTitle,
        body: this.newPostBody
      }
    }).success(function(data){
      console.log(data);
      controller.getPosts();
    });
  }
  // 
  // this.editPost = function(post) {
  //   $http.patch('/posts/'+post.id, {
  //     authenticity_token: authenticity_token,
  //     post: {
  //       title: this.editTitle,
  //       body: this.editBody
  //     }
  //   }).success(function(data){
  //     console.log(data);
  //     controller.getPosts();
  //   });
  // }

  this.deletePost = function(post) {
    $http.delete('/posts/'+post.id, {
      authenticity_token: authenticity_token,
    }).success(function(data) {
      controller.getPosts();
    }).error(function(data, status) {
      controller.getPosts();
    });
  }

}]);

// Testing to see $scope will help edit fields
app.controller('EditController', ['$http', '$scope', function($http, $scope) {
  var authenticity_token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

  this.editPost = function() {
    console.log($scope.$parent.post.id);
    $http.patch('/posts/'+$scope.$parent.post.id, {
      authenticity_token: authenticity_token,
      post: {
        title: this.editTitle,
        body: this.editBody
      }
    }).success(function(data){
      console.log(data);
      $scope.$parent.posts.getPosts();
    });
  }
}])
