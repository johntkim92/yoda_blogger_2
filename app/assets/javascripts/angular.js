var app = angular.module('YodaApp', []);

//Post Controller
app.controller('PostsController', ['$http', function($http){
  var authenticity_token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
  var controller = this;
  // get all posts
  $http.get('/posts').success(function(data){
    controller.posts = data.posts;
  });

  this.createPost = function() {
    $http.post('/posts', {
      authenticity_token: authenticity_token,
      post: {
        title: this.newPostTitle,
        body: this.newPostBody
      }
    }).success(function(data){
      console.log(data);
    });
  }
}]);
