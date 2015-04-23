var app=angular.module('controllers', []);

app.controller('moviesController', ['$scope', '$location', '$routeParams','movieService',function ($scope, $location, $routeParams, movieService) {
    
  $scope.movies=movieService.getMovies();

  $scope.editMovie=function(index){
    $location.path('/'+index);
  }

  $scope.delMovie=function(index){
    console.log("Deleted movie: ");
   console.log($scope.movie=movieService.getMovies()[index]);
   $scope.movies.splice(index,1);
   
  }

}]);

app.controller('addmoviesController', ['$scope', '$location', '$routeParams','movieService',function ($scope, $location, $routeParams, movieService) {
    
  $scope.save=function(){

    movieService.addMovie({name:$scope.movie.name, averageRating:$scope.movie.averageRating, releaseYear:$scope.movie.releaseYear, url:$scope.movie.url});
    $location.path('/');

  };

  $scope.cancel=function(){
    $location.path('/');
  }

}]);

app.controller('editmoviesController', ['$scope', '$location', '$routeParams','movieService',function ($scope, $location, $routeParams, movieService) {
  
  $scope.movie=movieService.getMovies()[parseInt($routeParams.index)]  ;
  
    $scope.save=function(){

    movieService.editMovie(parseInt($routeParams.index),{name:$scope.movie.name, averageRating:$scope.movie.averageRating, releaseYear:$scope.movie.releaseYear, url:$scope.movie.url});
    $location.path('/');

  };

  $scope.cancel=function(){
    $location.path('/');
  }

}]);

app.controller('deletemoviesController', ['$scope', '$location', '$routeParams','movieService',function ($scope, $location, $routeParams, movieService) {
    
  $scope.delete=function(){

  }

}]);