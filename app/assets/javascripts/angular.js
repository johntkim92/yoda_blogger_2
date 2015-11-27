var app = angular.module('YodaApp', []);

//Post Controller
app.controller('PostsController', ['$http', function($http){
  this.createPost = function() {
    $http.post('/posts', {
      post: {
        title:
      }
    });
  }
}]);
