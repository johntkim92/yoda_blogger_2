var app = angular.module('YodaApp', []);

//Post Controller
app.controller('PostsController', ['$http', function($http){
  var controller = this;
  // get all posts
  $http.get('/posts').success(function(data){
    controller.posts = data.posts;
  });

  this.createPost = function() {
    $http.post('/posts', {
      post: {
        title: 'bruh'
      }
    }).success(function(data){
      console.log(data);
    });
  }
}]);
