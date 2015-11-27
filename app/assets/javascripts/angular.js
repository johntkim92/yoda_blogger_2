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
}]);
